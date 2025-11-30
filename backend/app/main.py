from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import kpi
from app.utils.database import Base, engine

#Create database tables:
Base.metadata.create_all(bind=engine)

#FastAPI declaration instance
app = FastAPI()

app.include_router(kpi.router)

# Allow both localhost and 127.0.0.1 for frontend
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ping")
def ping():
    print("Pinged!")
    return {"message": "pong"}