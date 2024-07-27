from pydantic import BaseModel
from typing import List

class Company(BaseModel):
    company_id: int
    name: str
    address: str
    latitude: float
    longitude: float

class CompanyList(BaseModel):
    companies: List[Company]