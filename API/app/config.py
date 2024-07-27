import os

BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
# COMPANIES_CSV = os.path.join(DATA_DIR, "companies.csv")
# LOCATIONS_CSV = os.path.join(DATA_DIR, "locations.csv")
COMPANIES_CSV =  ("D:\SupplyTrace\Supply-Chain-Data-Hub-WebApp\API\Data\companies.csv")
LOCATIONS_CSV = ("D:\SupplyTrace\Supply-Chain-Data-Hub-WebApp\API\Data\locations.csv")

print(f"BASE_DIR: {BASE_DIR}")
print(f"DATA_DIR: {DATA_DIR}")
print(f"COMPANIES_CSV: {COMPANIES_CSV}")
print(f"LOCATIONS_CSV: {LOCATIONS_CSV}")

# Verify if files exist
if not os.path.exists(COMPANIES_CSV):
    print(f"Error: {COMPANIES_CSV} does not exist!")
if not os.path.exists(LOCATIONS_CSV):
    print(f"Error: {LOCATIONS_CSV} does not exist!")