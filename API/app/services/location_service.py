import logging
from utils.data_reader import read_locations_csv
from models.location import Location, LocationList
from models.response import ResponseModel
from exceptions import NotFoundException, BadRequestException

logger = logging.getLogger(__name__)

class LocationService:
    @staticmethod
    def get_locations_by_company_id(company_id: int) -> ResponseModel:
        try:
            locations = read_locations_csv()
            company_locations = [Location(**loc) for loc in locations if loc["company_id"] == company_id]
            if not company_locations:
                logger.warning(f"No locations found for company with id {company_id}")
                raise NotFoundException(f"No locations found for company with id {company_id}")
            location_list = LocationList(locations=company_locations)
            return ResponseModel(success=True, message="Locations retrieved successfully", data=location_list)
        except NotFoundException as e:
            raise e
        except Exception as e:
            logger.error(f"Error retrieving locations for company with id {company_id}: {str(e)}")
            raise BadRequestException(f"Failed to retrieve locations for company with id {company_id}")