import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';

const SalesEntry = () => {
    
    const [orderNumber, setOrderNumber] = useState('121231211');

    return (
        <div className="page page-sales-manager">
            <Header />

            <div className="container">
                <h2>Create Sales Entry</h2>

                <Link to={`/sales`}>
                    Back
                </Link>

                <form>
                    <input type="text" disabled="disabled" value={orderNumber} />
                </form>

            </div>

            <Footer />

        </div>
    )
}


export default SalesEntry