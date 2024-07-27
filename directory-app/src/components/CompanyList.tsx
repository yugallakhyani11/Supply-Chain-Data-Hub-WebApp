import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCompanies } from '../services/api';
import { Company } from '../models/Company';
import '../style/CompanyList.css';

const CompanyList: React.FC = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);

    useEffect(() => {
        getCompanies()
            .then(data => {
                console.log("Fetched companies:", data); // Debugging log
                setCompanies(Array.isArray(data) ? data : []);
                setFilteredCompanies(Array.isArray(data) ? data : []);
            })
            .catch(error => {
                console.error("Error fetching companies:", error);
                setCompanies([]);
                setFilteredCompanies([]);
            });
    }, []);

    useEffect(() => {
        setFilteredCompanies(
            companies.filter(company =>
                company.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, companies]);

    return (
        <div className="company-list-container">
            <h1 className="company-list-title">Company List</h1>
            <input
                type="text"
                placeholder="Search companies"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="company-grid">
                {filteredCompanies.length === 0 ? (
                    <div className="no-companies-found">No companies found</div>
                ) : (
                    filteredCompanies.map(company => (
                        <div key={company.company_id} className="company-card">
                            <Link to={`/company/${company.company_id}`} className="company-link">
                                <h2 className="company-name">{company.name}</h2>
                                <p className="company-address">{company.address}</p>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default CompanyList;