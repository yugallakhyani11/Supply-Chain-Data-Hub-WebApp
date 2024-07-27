from fastapi import APIRouter, HTTPException
from services.company_service import CompanyService
from services.location_service import LocationService
from models.response import ResponseModel
from models.company import Company, CompanyList
from models.location import LocationList
from exceptions import AppException
from typing import Union

router = APIRouter()

@router.get("/companies", response_model=ResponseModel[CompanyList])
async def get_all_companies():
    """
    Endpoint to retrieve all companies.

    Returns:
        ResponseModel[CompanyList]: A response containing a list of all companies.

    Raises:
        HTTPException: If there's an error retrieving the companies.
    """
    try:
        return CompanyService.get_all_companies()
    except AppException as e:
        raise HTTPException(status_code=e.status_code, detail=e.message)

@router.get("/companies/{company_id}", response_model=ResponseModel[Company])
async def get_company_by_id(company_id: int):
    """
    Endpoint to retrieve a specific company by its ID.

    Args:
        company_id (int): The ID of the company to retrieve.

    Returns:
        ResponseModel[Company]: A response containing the requested company.

    Raises:
        HTTPException: If the company is not found or there's an error retrieving it.
    """
    try:
        return CompanyService.get_company_by_id(company_id)
    except AppException as e:
        raise HTTPException(status_code=e.status_code, detail=e.message)

@router.get("/companies/locations/{company_id}", response_model=ResponseModel[LocationList])
async def get_locations_by_company_id(company_id: int):
    """
    Endpoint to retrieve all locations for a specific company.

    Args:
        company_id (int): The ID of the company whose locations to retrieve.

    Returns:
        ResponseModel[LocationList]: A response containing a list of locations for the specified company.

    Raises:
        HTTPException: If the company is not found or there's an error retrieving the locations.
    """
    try:
        return LocationService.get_locations_by_company_id(company_id)
    except AppException as e:
        raise HTTPException(status_code=e.status_code, detail=e.message)