import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CompanyListPage from './pages/CompanyListPage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import './App.css'; // Import CSS for styling

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/"  element={<CompanyListPage/>} />
                    <Route path="/company/:id" element={<CompanyDetailsPage/>} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
