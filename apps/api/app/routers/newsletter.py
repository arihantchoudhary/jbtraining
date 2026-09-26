from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import NewsletterSubscriber

router = APIRouter(prefix="/newsletter", tags=["newsletter"])


class NewsletterPayload(BaseModel):
    email: EmailStr


@router.post("")
def subscribe(payload: NewsletterPayload, db: Session = Depends(get_db)) -> dict[str, str]:
    db.add(NewsletterSubscriber(email=payload.email))
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=409, detail="Already subscribed")
    return {"status": "subscribed"}
