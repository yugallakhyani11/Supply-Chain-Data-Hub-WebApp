import { Company } from '../models/Company';
import { Location } from '../models/Location';

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}


export async function getCompanies(): Promise<Company[]> {
    const response = await fetch('http://localhost:8000/api/companies');
    if (!response.ok) {
        throw new Error('Failed to fetch companies');
    }
    const json: ApiResponse<{ companies: Company[] }> = await response.json();
    
    return json.data.companies;
}

export async function getCompany(id: string): Promise<Company> {
    const response = await fetch(`http://localhost:8000/api/companies/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch company');
    }
    const json: ApiResponse<Company> = await response.json();
    return json.data; 
}

export async function getCompanyLocations(id: string): Promise<Location[]> {
    const response = await fetch(`http://localhost:8000/api/companies/locations/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch company locations');
    }
    const json: ApiResponse<{locations:Location[]}> = await response.json();
    return json.data.locations;
}
