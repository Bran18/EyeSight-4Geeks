from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200), unique=True, nullable=False)
    firstname = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    is_Active = db.Column(db.Boolean(), unique=False, nullable=False)
    favoritesWord = db.relationship('FavoriteWord', backref='user')

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "is_active": self.is_Active,
            "favoritesWord": list(map(lambda x: x.serializebyUser(), self.favoritesWord)),
            # do not serialize the password, its a security breach
        }

class FavoriteWord(db.Model):
    __tablename__ = 'favoriteWord'
    # Notice that each column is also a normal Python instance attribute.
    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(120), unique=False, nullable=False)
    userid = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def __repr__(self):
        return '<FavoriteWord %r>' % self.userid

    def serializebyUser(self):
        return {
            "id": self.id,
            "word": self.word,
            "translated": self.translated,

            # do not serialize the password, its a security breach
        }