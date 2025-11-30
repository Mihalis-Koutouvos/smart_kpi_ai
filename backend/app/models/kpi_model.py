from sqlalchemy import Column, Integer, Float, String
from app.utils.database import Base

class KPIModel(Base):
    __tablename__ = "kpis"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(String, index=True)
    revenue = Column(Float, nullable=False)
    users = Column(Integer, nullable=False)
    conversion_rate = Column(Float, nullable=False)
    uptime = Column(Float, nullable=False)
