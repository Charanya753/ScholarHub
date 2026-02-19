from fastapi import APIRouter, HTTPException
from app.database import users_collection
from app.auth import create_access_token
from passlib.hash import bcrypt

router = APIRouter()

@router.post("/signup")
def signup(user: dict):
    if users_collection.find_one({"email": user["email"]}):
        raise HTTPException(status_code=400, detail="User exists")

    hashed_pw = bcrypt.hash(user["password"])
    user["password"] = hashed_pw
    users_collection.insert_one(user)

    token = create_access_token({"email": user["email"]})
    return {"access_token": token}

@router.post("/login")
def login(user: dict):
    db_user = users_collection.find_one({"email": user["email"]})
    if not db_user or not bcrypt.verify(user["password"], db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"email": user["email"]})
    return {"access_token": token}