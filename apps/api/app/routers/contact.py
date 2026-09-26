from fastapi import APIRouter, Depends
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import ContactSubmission

router = APIRouter(prefix="/contact", tags=["contact"])


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str | None = None
    message: str


@router.post("")
def submit_contact(payload: ContactRequest, db: Session = Depends(get_db)) -> dict[str, str]:
    submission = ContactSubmission(
        name=payload.name,
        email=payload.email,
        subject=payload.subject,
        message=payload.message,
    )
    db.add(submission)
    db.commit()
    return {"status": "received"}
