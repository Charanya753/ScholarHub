from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("MONGO_URL"))
db = client["scholarhub"]

users_collection = db["users"]
scholarships_collection = db["scholarships"]
applications_collection = db["applications"]