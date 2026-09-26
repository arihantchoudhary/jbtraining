from fastapi import APIRouter, Depends
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import BookingRequest

router = APIRouter(prefix="/booking", tags=["booking"])


class BookingPayload(BaseModel):
    name: str
    email: EmailStr | None = None
    phone: str
    preferred_date: str
    preferred_time: str
    notes: str | None = None


@router.post("")
def submit_booking(payload: BookingPayload, db: Session = Depends(get_db)) -> dict[str, str]:
    booking = BookingRequest(
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        preferred_date=payload.preferred_date,
        preferred_time=payload.preferred_time,
        notes=payload.notes,
    )
    db.add(booking)
    db.commit()
    return {"status": "received"}
