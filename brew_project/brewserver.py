import json
import requests

from flask import Flask, jsonify, render_template
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)

BREW_URL = "https://api.brewerydb.com/v2/locations/?name&key=52840d61aed0d4d4dc14a975bf3092c4&format=json"


@app.route('/breweries')
def get_breweries():
    response = requests.get(BREW_URL)
    breweries = json.loads(response.content)
    return jsonify({'breweries': breweries})


@app.route('/')
def main():
    return render_template('brew.html')



if __name__ == '__main__':
    app.run(port=8080)
