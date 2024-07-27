import logging
from utils.data_reader import read_companies_csv
from models.company import Company, CompanyList
from models.response import ResponseModel
from exceptions import NotFoundException, BadRequestException

logger = logging.getLogger(__name__)

class CompanyService:
    @staticmethod
    def get_all_companies() -> ResponseModel:
        try:
              
        # Retrieve all companies from the CSV file.

        # Returns:
        #     ResponseModel[CompanyList]: A response containing a list of all companies.

        # Raises:
        #     BadRequestException: If there's an error retrieving the companies.
            
            companies = read_companies_csv()
            company_list = CompanyList(companies=[Company(**company) for company in companies])
            return ResponseModel(success=True, message="Companies retrieved successfully", data=company_list)
        except Exception as e:
            logger.error(f"Error retrieving companies: {str(e)}")
            raise BadRequestException("Failed to retrieve companies")

    @staticmethod
    def get_company_by_id(company_id: int) -> ResponseModel:
        """
        Retrieve a specific company by its ID.

        Args:
            company_id (int): The ID of the company to retrieve.

        Returns:
            ResponseModel[Company]: A response containing the requested company.

        Raises:
            NotFoundException: If the company with the given ID is not found.
            BadRequestException: If there's an error retrieving the company.
        """
        try:
            companies = read_companies_csv()
            company = next((Company(**c) for c in companies if c["company_id"] == company_id), None)
            if not company:
                logger.warning(f"Company with id {company_id} not found")
                raise NotFoundException(f"Company with id {company_id} not found")
            return ResponseModel(success=True, message="Company retrieved successfully", data=company)
        except NotFoundException as e:
            raise e
        except Exception as e:
            logger.error(f"Error retrieving company with id {company_id}: {str(e)}")
            raise BadRequestException(f"Failed to retrieve company with id {company_id}")