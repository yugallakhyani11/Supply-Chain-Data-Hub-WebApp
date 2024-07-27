from pydantic import BaseModel
from typing import List

class Location(BaseModel):
    location_id: int
    company_id: int
    name: str
    address: str
    latitude: float
    longitude: float

class LocationList(BaseModel):
    locations: List[Location]