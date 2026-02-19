from fastapi import FastAPI
from app.routes import users, scholarships, ai, apply

app = FastAPI()

app.include_router(users.router)
app.include_router(scholarships.router)
app.include_router(ai.router)
app.include_router(apply.router)

@app.get("/")
def root():
    return {"message": "ScholarHub Backend Running"}