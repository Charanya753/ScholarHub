from fastapi import APIRouter
from transformers import pipeline

router = APIRouter()

# Use a small model (lighter + safer for Windows)
generator = pipeline("text-generation", model="distilgpt2")

@router.post("/ai/summary")
def generate_summary(data: dict):
    text = data["description"]

    prompt = f"Summarize this scholarship in simple words:\n{text}\nSummary:"

    result = generator(
        prompt,
        max_length=150,
        num_return_sequences=1,
        truncation=True
    )

    # Extract only generated text after "Summary:"
    generated_text = result[0]["generated_text"]
    summary = generated_text.split("Summary:")[-1].strip()

    return {"summary": summary}