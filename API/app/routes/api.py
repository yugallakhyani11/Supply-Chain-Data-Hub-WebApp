from fastapi import APIRouter
from controllers import company_details_controller

router = APIRouter()

router.include_router(company_details_controller.router, tags=["companies"])