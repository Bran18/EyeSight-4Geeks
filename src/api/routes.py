"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity 
import re
import smtplib
import secrets
import string
from email.mime.multipart import MIMEMultipart
from requests.auth import HTTPBasicAuth
from email.mime.text import MIMEText
from datetime import datetime, timedelta
from basicauth import decode
from werkzeug.security import generate_password_hash, check_password_hash
from api.models import db, User
from api.utils import generate_sitemap, APIException
from functools import wraps
from dateutil.relativedelta import relativedelta
#importin external_api funtion
from api.external_api import request_call_integration
from api.api_google import translate_results

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

#Calling the API external request
@api.route('/external', methods=["POST"])
def set_url():
    user_url= request.json["url"]
    user_lan = request.json["language"]
    results= request_call_integration(user_url, user_lan)
    trans_lan = request.json["transLan"]
    data_es = translate_results(trans_lan, results)
    data = [{'en':results,'es':data_es}]
    return jsonify(data),200



#get all the users
@api.route('/user', methods=["GET"])
def get_user():
    users = User.query.all()
    result = [user.serialize() for user in User.query.all()]
    return jsonify(result),200

#getting one record by the id
@api.route('/user/<id>', methods=["GET"])
def get_users(id):
    user = User.query.get(id)
    return jsonify({"user": user.serialize()}), 401

#set login route
@api.route('/login', methods=['POST','GET'])
def set_login():
    print(request.json)
    
    email = request.json.get("email", None)
    password= request.json.get("password", None)
    
    if not email:
        return jsonify({"msg:": "Email is required"}), 400
    
    if not password:
        return jsonify({"msg:":"Password is required"}), 400

    users = User.query.filter_by(email=email).first()
    print(users)

    if not users and not ckeck_password_hash(user.password, password):
        return jsonify({"msg": "The email is not correct"}), 401

    expiracion = timedelta(days=1)
    access_token = create_access_token(identity=users.email, expires_delta=expiracion)

    data = {
        "user": users.serialize(),
        "token": access_token,
        "userId": users.id,
        "username": users.username
    }

  
    return jsonify(data), 200

@api.route('/logout/<id>')
@jwt_required()
def logout(id):
    db.session.delete(id)  # In order for this to work, I will have to ADD AND COMMIT A USER AS WELL, OTHERWISE GIVES ERROR
    db.session.commit()
    logout_user()
    return redirect('/')

#creating register route
@api.route('/register', methods=["POST"])
def set_register():
    username = request.json.get("username",None)
    firstname = request.json.get("firstname",None)
    lastname = request.json.get("lastname",None)
    email = request.json.get("email",None)
    password = request.json.get("password",None)

    if not email:
        return "Email required", 401
    if not username:
        return "firstname required", 401
    if not lastname:
        return "lastname required", 401
    if not username:
        return "Username required", 401 
    if not password:
        return "Password required", 401
    
    user = User()
    user.firstname=firstname
    user.lastname=lastname
    user.email=email
    user.is_Active= True
    user.username = username
    hashed_password = generate_password_hash(password)
    user.password = hashed_password
    print("user information:",user.is_Active)
    try: 
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        print(e)
        return jsonify("msg: Something went wrong contact your DB manager"), 507

    response = {
    "msg": "Added successfully",
    "username": username,
    "is_Active":is_Active}

    return jsonify(response), 200
    

@api.route('/user/<id>', methods=['POST'])
def update_User(id):
  user = User.query.get(id)

  username = request.json.get("username")
  firstname = request.json.get("firstname")
  lastname = request.json.get("lastname")
  email = request.json.get("email")
  password = request.json.get("password")
  
  user = User()
  user.username = username
  user.firstname = firstname
  user.lastname = lastname
  user.email = email
  user.password = password
  
  db.session.add(user)
  db.session.commit()

  data = {
    "user": users.serialize(),
  }
  return jsonify(data), 200

#Delete user route
@api.route('/user/<id>', methods=['DELETE'])
def delete_user(id):
  user = User.query.get(id)
  db.session.delete(user)
  db.session.commit()

  return jsonify({"msg": "User deleted"}), 200

#Forgot password
@api.route('/forgotPassword/<string:id>', methods=["GET"])
def ForgotPassword (id):
    regex = '^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$'
    if(re.search(regex, id)):
        user = User.query.filter_by(email=id).first()
       

        if user is None:
            return jsonify({"msg": "User not found"}),404

        alphabet = string.ascii_letters + string.digits
        password = ''.join(secrets.choice(alphabet) for i in range(8))     
        user.password = password
        db.session.commit()
        #Codigo Enviar correo
        
        mail_content = 'Hello, We want to let you know that you have sucessfully create a new password. Your new esight password is: ' + password

        #The mail addresses and password
        sender_address = 'esight4geeks@gmail.com'
        sender_pass = '3.num@euler'
        receiver_address = user.email
        #Setup the MIME
        message = MIMEMultipart()
        message['From'] = sender_address
        message['To'] = receiver_address
        message['Subject'] = 'Password recovery esight'   #The subject line
        #The body and the attachments for the mail
        message.attach(MIMEText(mail_content, 'plain'))
        #Create SMTP session for sending the mail
        session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
        session.starttls() #enable security
        session.login(sender_address, sender_pass) #login with mail_id and password
        text = message.as_string()
        session.sendmail(sender_address, receiver_address, text)
        return jsonify({"msg": "New password created"}),200
        session.quit()
        print('mail sended')
    else:
        return jsonify({"msg": "Invalidad email"}),411


    