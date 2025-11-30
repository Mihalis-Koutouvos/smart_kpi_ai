from fastapi import APIRouter

router = APIRouter()

@router.get("/kpis")
def get_kpis():
    return [
        {"name": "Revenue",
         "value": 120000},
        {"name": "Customer Retention",
         "value": 90},
    ]