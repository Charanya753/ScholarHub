from fastapi import APIRouter
from datetime import datetime
from app.database import applications_collection

router = APIRouter()

@router.post("/apply")
def apply_scholarship(data: dict):
    data["applied_date"] = datetime.utcnow().strftime("%Y-%m-%d")
    applications_collection.insert_one(data)
    return {"message": "Application recorded"}