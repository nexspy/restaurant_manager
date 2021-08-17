import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import { getFood } from '../FoodCategoriesData';

import './Foods.css';

const Foods = () => {

    const default_foods = getFood();
    const [foods, setFoods] = useState(default_foods);

    return (
        <div className="page page-manage-foods">

            <Header />

                <div className="container">
                    <h2>Foods Manage Page</h2>

                    <Link to={`/food/create`}>
                        Create Food
                    </Link>

                    <p>List of food</p>

                    <div className="food-list">
                        {foods.map((item, index) => {
                            return (
                                <div key={item.id} className="food-item">
                                    <h3>{item.name}</h3>
                                    <p className="price">{item.currency_title} {item.price}</p>
                                </div>
                            );
                        })}
                    </div>

                </div>

            <Footer />
        </div>
    )
}

export default Foods
