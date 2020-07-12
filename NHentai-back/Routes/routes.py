from controllers.libraryController import Controllers
from flask_cors import CORS, cross_origin
from flask import Flask, request

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)
controllers = Controllers()

@app.route('/', methods=['GET'])
def home_page(): return controllers.paginate(request)

@app.route('/<id>', methods=['GET'])
def doujin_page(id): return controllers.doujin(id)

@app.route('/random', methods=['GET'])
def random_page(): return controllers.random()

@app.route('/search', methods=['GET'])
def search_page(): return controllers.search(request)