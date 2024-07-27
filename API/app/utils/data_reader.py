import csv
import logging
from typing import List, Dict
from config import COMPANIES_CSV, LOCATIONS_CSV
from exceptions import NotFoundException

logger = logging.getLogger(__name__)

def read_csv(file_path: str) -> List[Dict]:
    try:
        with open(file_path, 'r') as csvfile:
            reader = csv.DictReader(csvfile)
            return [{k: int(v) if k.endswith('_id') else float(v) if k in ['latitude', 'longitude'] else v for k, v in row.items()} for row in reader]
    except FileNotFoundError:
        print(f"Error: The file {file_path} was not found.")
        logger.error(f"File not found: {file_path}")
        raise
    except Exception as e:
        logger.error(f"Error reading CSV file {file_path}: {str(e)}")
        print(f"Error reading CSV file {file_path}: {str(e)}")
        raise

def read_companies_csv() -> List[Dict]:
    return read_csv(COMPANIES_CSV)

def read_locations_csv() -> List[Dict]:
    return read_csv(LOCATIONS_CSV)