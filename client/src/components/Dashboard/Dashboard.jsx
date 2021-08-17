import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="page page-dashboard">

            <Header />

            <div className="container">

                <h2>Dashboard</h2>

                <div className="content">
                    <Link to={`/food`} className="menu-item">
                        Food
                    </Link>
                    <Link to={`/sales`} className="menu-item">
                        Sales
                    </Link>
                </div>
                
            </div>

            <Footer />
            
        </div>
    )
}

export default Dashboard
