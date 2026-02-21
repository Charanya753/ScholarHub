from fastapi import APIRouter
from app.database import scholarships_collection
from bson import ObjectId

router = APIRouter()


def serialize_doc(doc):
    doc["_id"] = str(doc["_id"])
    return doc


# CREATE scholarship
@router.post("/scholarships")
def create_scholarship(data: dict):
    result = scholarships_collection.insert_one(data)
    return {
        "message": "Scholarship created",
        "id": str(result.inserted_id)
    }


# GET all scholarships
@router.get("/scholarships")
def get_scholarships():
    scholarships = list(scholarships_collection.find())
    return [serialize_doc(s) for s in scholarships]


# GET one scholarship by ID
@router.get("/scholarship/{id}")
def get_scholarship(id: str):
    scholarship = scholarships_collection.find_one({"_id": ObjectId(id)})
    if scholarship:
        return serialize_doc(scholarship)
    return {"error": "Scholarship not found"}
