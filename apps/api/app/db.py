import os
from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

_engine = None
_SessionLocal: sessionmaker | None = None


class Base(DeclarativeBase):
    pass


def get_engine():
    global _engine
    if _engine is None:
        database_url = os.environ["DATABASE_URL"]
        if database_url.startswith("postgresql://"):
            database_url = database_url.replace("postgresql://", "postgresql+psycopg://", 1)
        _engine = create_engine(database_url, pool_pre_ping=True)
    return _engine


def get_session_factory() -> sessionmaker:
    global _SessionLocal
    if _SessionLocal is None:
        _SessionLocal = sessionmaker(bind=get_engine(), autoflush=False, autocommit=False)
    return _SessionLocal


def get_db() -> Generator[Session, None, None]:
    session_factory = get_session_factory()
    db = session_factory()
    try:
        yield db
    finally:
        db.close()
