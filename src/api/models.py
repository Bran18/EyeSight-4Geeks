from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200), unique=True, nullable=False)
    firstname = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    url=db.Column(db.String(280), unique=False)
    is_Active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __init__(self, username, firstname, lastName, email, password):
        self.username= username,
        self.firstname = firstname,
        self.lastname = lastName,
        self.email = email,
        self.password = password,
        self.url = url,
        self.is_Active = True

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "firsname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "is_active": self.is_Active,
            # do not serialize the password, its a security breach
        }