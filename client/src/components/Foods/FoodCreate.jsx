import React, { useState } from 'react'

import { getFoodCategoriesData, getFoodSubCategoriesData } from './FoodCategoriesData.js';


const FoodCreate = () => {
    const default_category = 'none';
    const categories = getFoodCategoriesData();
    const default_subcategory = 'none';
    const subcategories = getFoodSubCategoriesData();

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
    const handleSubCategory = (e) => {
        var item = e.target.value;
        setSubcategory(item);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var food = {
            'name': name,
            'category': category
        };

        // create food 
        // using simple axios
    }

    return (
        <div>
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
                <select name="sel-subcategory" id="sel-subcategory" value={subcategory} onChange={handleSubCategory}>
                    {subcategories.map((item,key) => {
                        return (
                            <option value={item.name} key={item.id}>{item.label}</option>
                        );
                    })};
                </select>

            </form>
        </div>
    )
}

export default FoodCreate
