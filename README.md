# Full-Stack Developer Take-Home Assessment(Supply-Chain-Data-Hub-WebApp)

This is a full-stack application for managing and displaying companies and their locations using React for the frontend, FastAPI for the backend, and Docker for containerization. It also integrates Google Maps for displaying locations on a map.

## Table of Contents

- [Overview](#overview)
- [API Documentation](#api-documentation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Docker Setup](#docker-setup)
- [Google Maps API Integration](#google-maps-api-integration)

## Overview

The application consists of two main parts:

1. **Backend**: A FastAPI application that serves as the backend API.
2. **Frontend**: A React application that communicates with the backend and displays the data.

## API Documentation

### Get All Companies

**Endpoint:** `/companies`

**Method:** `GET`

**Response:**
```json
{
  "success": true,
  "message": "Companies fetched successfully",
  "data": {
    "companies": [
      {
        "company_id": 1,
        "name": "Company A",
        "address": "Address A",
        "latitude": 40.712776,
        "longitude": -74.005974
      },
      {
        "company_id": 2,
        "name": "Company B",
        "address": "Address B",
        "latitude": 34.052235,
        "longitude": -118.243683
      }
    ]
  }
}

Get Company Details by ID

Endpoint: /companies/{id}

Method: GET

Response:

json

{
  "success": true,
  "message": "Company fetched successfully",
  "data": {
    "company_id": 1,
    "name": "Company A",
    "address": "Address A",
    "latitude": 40.712776,
    "longitude": -74.005974
  }
}

Get All Locations for a Specific Company ID

Endpoint: /companies/{id}/locations

Method: GET

Response:

json

{
  "success": true,
  "message": "Locations fetched successfully",
  "data": [
    {
      "location_id": 1,
      "company_id": 1,
      "name": "Location A",
      "address": "Address A",
      "latitude": 40.712776,
      "longitude": -74.005974
    },
    {
      "location_id": 2,
      "company_id": 1,
      "name": "Location B",
      "address": "Address B",
      "latitude": 34.052235,
      "longitude": -118.243683
    }
  ]
}

Backend Setup

    Install dependencies:

    sh

pip install fastapi uvicorn pydantic

Run the FastAPI application:

sh

    uvicorn main:app --reload

    CORS Configuration:
    Ensure that CORS is configured to allow requests from the frontend.

Frontend Setup

    Install dependencies:

    sh

npm install

Run the React application:

sh

    npm start

Docker Setup

    Build and run the Docker containers:

    sh

    docker-compose up --build

    Access the application:
        Frontend: http://localhost:3000
        Backend: http://localhost:8000

Google Maps API Integration

This project integrates Google Maps for displaying company locations.

    Obtain a Google Maps API key:
        Go to the Google Cloud Console.
        Create a new project or select an existing one.
        Navigate to the "APIs & Services" section.
        Enable the "Maps JavaScript API".
        Create an API key.

    Integrate the API key in the project:
        Create a .env file in the frontend root directory.
        Add the following line to the .env file:

        sh

REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here

Use the API key in your map component:

tsx

        import { GoogleMap, LoadScript } from '@react-google-maps/api';

        const MapComponent = () => {
            return (
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                    </GoogleMap>
                </LoadScript>
            );
        }

License

This project is licensed under the MIT License.

css


This `README.md` provides a comprehensive overview of the project, including API documentation, setup inst
