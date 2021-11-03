from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

Login_POST_args = reqparse.RequestParser()
Login_POST_args.add_argument(
    'email', type=str
)
Login_POST_args.add_argument(
    'password', type=str
)

class Login(Resource):
    def post(self):
        args = Login_POST_args.parse_args()
        if args['email'] and args['password']: 
            pass # Adicionar ao "Banco de Dados"
        else: 
            pass # Devolver mensagem de erro!
        # return args
        
api.add_resource(Login, '/Login')

if __name__ == '__main__': app.run(debug=True)
