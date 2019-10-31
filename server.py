from flask import Flask
from flask import request
import json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/vehicle"
mongo = PyMongo(app)

@app.route('/users')
def users():
    item = mongo.db.item.find()
    return dumps(item)

@app.route('/users/create', methods=['POST'])
def user_create():
    user = {}
    user['_id'] = ObjectId()
    user['name'] = request.json['name']
    user['location'] = request.json['location']
    mongo.db.item.insert(user)
    return dumps(user)

@app.route('/user/update/<ObjectId:user_id>', methods=["POST"])
def user_update(user_id):
    name = request.json['name']
    location = request.json['location']
    mongo.db.item.update({"_id": user_id}, {"$set": {"name": name, "location": location}})
    return dumps({"name": name, "location": location})

@app.route('/users/show/<ObjectId:user_id>')
def user(user_id):
    user = mongo.db.item.find_one({"_id": user_id})
    return dumps(user)

@app.route('/users/delete/<ObjectId:user_id>')
def user_delete(user_id):
    mongo.db.item.remove({'_id': user_id})
    return dumps({"message":"Deleted"})

@app.route('/users/limit/pages')
def marks_limitpages():
    page = int(request.args.get("page",1))
    skip_count=(page-1) * 5
    sort_key=request.args.get("price","_id")
    order_by = int(request.args.get("order",-1))
    ##filter=request.args.get("filter")
    ##filter_split=filter.split("_")
    list = mongo.db.item.find({}).limit(10).sort(sort_key,order_by).skip(skip_count)
    return dumps(list)