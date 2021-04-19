"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity 
import re
from basicauth import decode
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

# adding new tested routes

@api.route('/User', methods=['POST', 'GET'])
def get_user ():
    users: User.querry.all()
    request_body = list(map(lambda x:x.serialize(),users))
    response_body = {
        "users": users
    }
    return jsonify(request_body),200

#adding login route
@api.route('/Login', methods=["GET"])
def set_login():
    headers = request.headers
    AuthHeader = headers['Authorization']
    username, password = decode(AuthHeader)
    #Validating if the user is created
    users= User.query.filter_by(email=email, password=password).first()
    if users is None:
        return jsonify({"msg": "Wrong password or email"}), 401
    #Token creation
    access_token = create_access_token(identity=users.id)
    return jsonify({ "token": access_token, "user_id": users.id}), 200

#creating register route
@api.route('/Register', methods=["POST"])
def set_register():
    data= request.get_json()
    users= User(data["name"],data["lastname"],data["email"],data["password"])
    db.session.add(users)
    db.session.commit()
    return jsonify("msg: User created successfully"),200
    return jsonify(request_body),200

@api.route('/EmailValidation/<string:id>', methods=["GET"])
def EmailValidation(id):
    regex = '^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$'
    if(re.search(regex, id)):
        users = User.query.filter_by(email=id, is_Active=True).first()
        if users is None:
            return jsonify({"msg": "Your email is valid"}),200
        return jsonify({"msg": "Email already taken"}), 406
    else:
        return jsonify({"msg":"Invalid email"}),411

@api.route('/forgotPassword/<string:id>', methods=["GET"])
def ForgotPassword (id):
    
    regex = '^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$'
    if(re.search(regex, id)):
      
        users = User.query.filter_by(email=id, is_Active=True).first()
        if users is None:
            return jsonify({"msg": "User not found"}),404

        users.password = "!234s678"
        db.session.commit()
        return jsonify({"msg": "Password Generated"}),200
    
    else:
        return jsonify({"msg": "Wrong Email"}),411
