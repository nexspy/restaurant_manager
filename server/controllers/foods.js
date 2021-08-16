import express from 'express';
import mongoose from 'mongoose';


export const getFoods = async (req, res) => {
    try{
        var success = false;
        var message = 'incorrect username or password';
        var token = '';

        const foods = [
            {
                'id': '12312e1w32132',
                'name': 'Buff Momo',
                'category': 'momo',
                'subcategory': 'chinese',
                'veg': false,
                'price': '100',
                'currency': 'NPR',
                'currency_title': 'Rs.',
                'image': ''
            },
            {
                'id': '1235435w12wsrqw',
                'name': 'Veg Momo',
                'category': 'momo',
                'subcategory': 'chinese',
                'veg': true,
                'price': '80',
                'currency': 'NPR',
                'currency_title': 'Rs.',
                'image': ''
            }
        ];

        res.status(200).json({
            'success': success,
            'message': message,
            'food': foods
        });
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
};