export const getFoodCategoriesData = () => {
    return [
        {
            'id': '1231233221312312',
            'name': 'momo',
            'label': 'Momo'
        },
        {
            'id': '1232asd1sdff23',
            'name': 'chowmein',
            'label': 'Chowmein'
        },
        {
            'id': '1232asd1sadff23',
            'name': 'fried_rice',
            'label': 'Fried Rice'
        },
        {
            'id': '1232asd1sddcff23',
            'name': 'thukpa',
            'label': 'Thukpa'
        }
    ];

}

export const getFoodSubCategoriesData = () => {
    return [
        {
            'id': '0',
            'parent_category_id': '12321312312',
            'name': 'none',
            'label': 'none'
        }
    ];
}

export const getFood = () => {
    return [
        {
            'id': '12312e1w32132',
            'name': 'Buff Momo',
            'category': 'momo',
            'subcategory': 'chinese',
            'veg': false,
            'price': 120,
            'currency': 'NPR',
            'currency_title': 'Rs',
            'image': ''
        },
        {
            'id': '1235435w12wsrqw',
            'name': 'Veg Momo',
            'category': 'momo',
            'subcategory': 'chinese',
            'veg': true,
            'price': 100,
            'currency': 'NPR',
            'currency_title': 'Rs',
            'image': ''
        },
        {
            'id': '31341dfadsf1312',
            'name': 'Veg Chowmein',
            'category': 'chowmein',
            'subcategory': 'chinese',
            'veg': true,
            'price': 85,
            'currency': 'NPR',
            'currency_title': 'Rs',
            'image': ''
        }
    ];
}
