class AppException(Exception):
    def __init__(self, message: str, status_code: int):
        self.message = message
        self.status_code = status_code

class NotFoundException(AppException):
    def __init__(self, message: str):
        super().__init__(message, 404)

class BadRequestException(AppException):
    def __init__(self, message: str):
        super().__init__(message, 400)