from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db import Base, get_engine
from app.routers import booking, contact, newsletter

app = FastAPI(title="JB Training API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://jb-training.vercel.app",
    ],
    allow_origin_regex=r"https://jb-training-.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router)
app.include_router(booking.router)
app.include_router(newsletter.router)


@app.on_event("startup")
def on_startup() -> None:
    Base.metadata.create_all(get_engine())


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
