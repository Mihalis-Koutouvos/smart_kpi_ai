from app.utils.database import SessionLocal
from app.models.kpi_model import KPIModel
import pandas as pd
import os

def seed_data():
    session = SessionLocal()

    #Path to your CSV
    csv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "kpis.csv")

    print(f"Loading CSV: {csv_path}")

    df = pd.read_csv(csv_path)

    for _, row in df.iterrows():
        kpi = KPIModel(
            date=row["date"],
            revenue=float(row["revenue"]),
            users=int(row["users"]),
            conversion_rate=float(row["conversion_rate"]),
            uptime=float(row["uptime"]),
        )
        session.add(kpi)

    session.commit()
    session.close()

    print("Database seeded successfully!")

if __name__ == "__main__":
    seed_data()