import requests
from bs4 import BeautifulSoup
from app.database import scholarships_collection

def scrape_scholarships():
    url = "https://example.com/scholarships"
    r = requests.get(url)
    soup = BeautifulSoup(r.text, "html.parser")

    for item in soup.select(".scholarship-card"):
        title = item.select_one("h2").text
        scholarships_collection.update_one(
            {"title": title},
            {"$set": {"title": title}},
            upsert=True
        )