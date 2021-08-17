import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { getFoodCategoriesData, getFoodSubCategoriesData } from './FoodCategoriesData.js';

import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

const FoodCreate = () => {
    const default_category = 'none';
    const categories = getFoodCategoriesData();
    const default_subcategory = 'none';
    const subcategories = getFoodSubCategoriesData();
    let history = useHistory();

    const [name, setName] = useState('');
    const [category, setCategory] = useState(default_category);
    const [subcategory, setSubcategory] = useState(default_subcategory);
    const [veg, setVeg] = useState(false);
    const [price, setPrice] = useState(1);
    const [currency, setCurrency] = useState('NPR');
    const [currency_title, setCurrencyTitle] = useState('Rs');
    const [image, setImage] = useState('');

    const handleName = (e) => {
        var item = e.target.value;
        setName(item);
    }
    const handleCategory = (e) => {
        var item = e.target.value;
        setCategory(item);
    }
    const handlePrice = (e) => {
        var item = e.target.value;
        setPrice(item);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var food = {
            'name': name,
            'category': category,
            'price': price
        };

        // create food 
        // using simple axios
        history.push('/food')
    }

    return (
        <div className="page page-create-food-form">

            <Header />

            <div className="container">
                <h2>Create Food Form</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={handleName} />
                    <select name="sel-category" id="sel-category" value={category} onChange={handleCategory}>
                        {categories.map((item,key) => {
                            return (
                                <option value={item.name} key={item.id}>{item.label}</option>
                            );
                        })};
                    </select>
                    <input type="number" value={price} onChange={handlePrice} />
                    <button onClick={handleSubmit}>Create</button>
                </form>
            </div>

            <Footer />
            
        </div>
    )
}

export default FoodCreate
