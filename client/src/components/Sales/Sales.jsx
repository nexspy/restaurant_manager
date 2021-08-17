import React, { useState } from 'react'

import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

import { getSales } from './SalesData.js';
import './Sales.css';
import { Link } from 'react-router-dom';

const Sales = () => {

    const default_sales = getSales();
    const [sales, setSales] = useState(default_sales);

    return (
        <div className="page page-sales-manager">
            <Header />

            <div className="container">
                <h2>Sales</h2>

                <Link to={`/sales/create`} className="menu-item">
                    Create Entry
                </Link>

                <section>
                    <p>List of sales today</p>

                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>Order Number</th>
                            <th>Note</th>
                        </tr>
                        {sales.map((item, index) => {
                            return (
                                <tr className="sales-item" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.order_number}</td>
                                    <td>{item.note}</td>
                                </tr>
                            )
                        })}
                    </table>
                </section>

            </div>

            <Footer />
        </div>
    )
}

export default Sales