import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Map from './Map';
import { Company } from '../models/Company';
import { Location } from '../models/Location';
import { getCompany, getCompanyLocations } from '../services/api';
import '../style/CompanyDetails.css'; // Import the CSS module


const CompanyDetails: React.FC = () => {
    const { id = '' } = useParams<{ id: string }>();
    const [company, setCompany] = useState<Company | null>(null);
    const [locations, setLocations] = useState<Location[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCompany(id)
            .then(data => setCompany(data))
            .catch(error => console.error(error));

        getCompanyLocations(id)
            .then(data => {
                console.log("Fetched locations:", data); // Debugging log
                if (Array.isArray(data)) {
                    setLocations(data);
                } else {
                    console.error("Data is not an array:", data);
                }
            })
            .catch(error => {
                console.error("Error fetching locations:", error);
                setLocations([]);
            });
    }, [id]);

    return (
        <div className="company-details-container">
        <h1 className="company-details-title">Company Details</h1>
        {company && (
            <div>
                <h2 className="company-name">{company.name}</h2>
                <p className="company-address">{company.address}</p>
                <h3 className="locations-title">Locations</h3>
                <ul className="locations-list">
                    {locations.map(location => (
                        <li key={location.location_id}>
                            <strong>{location.name}</strong>: {location.address} (Lat: {location.latitude}, Lng: {location.longitude})
                        </li>
                    ))}
                </ul>
                <Map company={company} locations={locations} />
            </div>
        )}
        <button className="back-button" onClick={() => navigate('/')}>Back to List</button>
    </div>
);
}

export default CompanyDetails;