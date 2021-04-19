"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity 
import re
#from basicauth import decode
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

@api.route('/user/<id>', methods=['DELETE'])
def delete_User(id):
  db.delete_one({'_id': ObjectId(id)})
  return jsonify({'message': 'User Deleted'})

@api.route('/user', methods=["GET"])
def get_user ():
    user = User.query.all()
    result = [user.serialize() for user in User.query.all()]
    return jsonify(result),200

#adding login route
@api.route('/login', methods=["GET"])
def set_login():
    headers = request.headers
    AuthHeader = headers['Authorization']
    #username, password = decode(AuthHeader)
    #Validating if the user is created
    user= User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Wrong password or email"}), 401
    #Token creation
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id}), 200

#creating register route
@api.route('/register', methods=["POST"])
def set_register():
    data= request.get_json()
    user= User(data["name"],data["lastname"],data["email"],data["password"])
    db.session.add(user)
    db.session.commit()
    return jsonify("msg: User created successfully"),200
    return jsonify(request_body),200

@api.route('/emailValidation/<string:id>', methods=["GET"])
def EmailValidation(id):
    regex = '^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$'
    if(re.search(regex, id)):
        user = User.query.filter_by(email=id, is_Active=True).first()
        if user is None:
            return jsonify({"msg": "Your email is valid"}),200
        return jsonify({"msg": "Email already taken"}), 406
    else:
        return jsonify({"msg":"Invalid email"}),411

@api.route('/forgotPassword/<string:id>', methods=["GET"])
def ForgotPassword (id):
    
    regex = '^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$'
    if(re.search(regex, id)):
      
        user = User.query.filter_by(email=id, is_Active=True).first()
        if user is None:
            return jsonify({"msg": "User not found"}),404

        user.password = "!234s678"
        db.session.commit()
        return jsonify({"msg": "Password Generated"}),200
    
    else:
        return jsonify({"msg": "Wrong Email"}),411
