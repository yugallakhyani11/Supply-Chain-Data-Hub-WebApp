from typing import Generic, TypeVar, Optional
from pydantic import BaseModel

# Define a generic type T
T = TypeVar('T')

class ResponseModel(BaseModel, Generic[T]):
    """
    A generic response model for API endpoints.
    
    Attributes:
        success (bool): Indicates if the operation was successful.
        message (str): A descriptive message about the operation result.
        data (Optional[T]): The actual data returned by the operation. Type varies based on the endpoint.
    """

    success: bool
    message: str
    data: Optional[T] = None