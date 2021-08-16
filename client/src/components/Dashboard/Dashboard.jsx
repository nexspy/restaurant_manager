import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="page page-dashboard">
            <h2>Dashboard</h2>

            <div className="content">
                <h3>Food</h3>
                
                <Link to={`/food/create`}>
                    Create Food
                </Link>
            </div>
            
        </div>
    )
}

export default Dashboard
