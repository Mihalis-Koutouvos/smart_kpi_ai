from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.utils.database import SessionLocal
from app.models.kpi_model import KPIModel

router = APIRouter()

def get_db():
    db = SessionLocal()
    try: 
        yield db
    finally:
        db.close()

@router.get("/kpis/")
def get_kpis(db: Session = Depends(get_db)):
    result = db.query(KPIModel).all()
    return [
        {
            "id": kpi.id,
            "date": kpi.date,
            "revenue": kpi.revenue,
            "users": kpi.users,
            "conversion_rate": kpi.conversion_rate,
            "uptime": kpi.uptime
        }
        for kpi in result
    ]