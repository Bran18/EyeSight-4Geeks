"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash       ## Nos permite manejar tokens por authentication (usuarios)    
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity   #from models import Person
import datetime

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    users = User.query.all()
    users = list(map(lambda x: x.serialize(), users))
    response_body = {
        "users": users
    }

    return jsonify(response_body), 200


@api.route('/hash', methods=['POST', 'GET'])
def handle_hash():
    
    expiracion = datetime.timedelta(days=3)
    access_token = create_access_token(identity='bfernandez@gmail.com', expires_delta=expiracion)
    response_token = {
        "users": "Bran18",
        "token": access_token
    }

    return jsonify(response_token), 200

@api.route('/register/', methods=['POST'])
def register_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username= request.json.get("username", None)

    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400
    if username is None:
        return jsonify({"msg": "No username was provided"}), 400
    
    user = User.query.filter_by(email=email,username=username, password=password).first()
    if user:
        return jsonify({"msg": "User already exists"}), 401
    else:
        new_user = User()
        new_user.email = email
        new_user.password = password
        new_user.username= username

        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "User created successfully"}), 200
    
@api.route('/login/', methods=['POST'])
def login():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return jsonify({"msg":"Email required"}), 400

    if not password:
        return jsonify({"msg":"Password required"}), 400
    
    user = User.query.filter_by(email=email).first()
    print(user)

    if not user:
        return jsonify({"msg": "The email is not correct",
        "status": 401
        
        }), 401

    if not check_password_hash(user.password, password):
          return jsonify({"msg": "The password is not correct",
        "status": 401
             }), 400

    expiracion = datetime.timedelta(days=1)
    access_token = create_access_token(identity=user.email, expires_delta=expiracion)

    data = {
        "user": user.serialize(),
        "token": access_token,
        "expires": expiracion.total_seconds()*1000,
        "userId": user.id,
        "username": user.username
    }


    return jsonify(data), 200
@api.route('/logout/')
def logout():
    # Removing data from session by setting logged_flag to False.
    access_token = None
    # redirecting to home page
    return jsonify(response_token), 200


