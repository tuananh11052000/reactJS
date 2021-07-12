var Products = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_PRODUCT':
            return action.list;
        case 'DECREASED_PRODUCT'://action truyen vao id cua san pham
            {
                let temp = state;
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].id === action.id) {
                        temp[i].quantity = temp[i].quantity - 1;
                    }
                }
                return temp;
            }
        case 'REMOVE_PRODUCT':
            {
                let temp = [...state];
                let index = 0;
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].id === action.id)
                        index = i;
                }
                temp.splice(index, 1)
                return temp;
            }
        case 'EDIT_PRODUCT':
            {
                let temp = state;
                temp[action.index] = action.newProduct;
                return temp;
            }
        default:
            return state;
    }
}

export default Products;