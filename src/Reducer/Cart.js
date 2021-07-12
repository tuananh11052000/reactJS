var Cart = (state = [], action) => {
    switch (action.type) {
        case 'GET_DATA':
            {
                return action.value;
            }
        case 'ADD_CART':
            {
                return state.concat(action.value);
            }
        case "DELETE_CART":
            {
                let temp = [...state];
                temp.splice(action.index, 1);
                return temp;
            }
        case 'DELETE_ALL':
            {
                return [];
            }
        case 'SHOW_CART':
            return action.value;
        case 'PLUS':
            {
                //index
                let temp = [...state];
                let objcoppy = Object.assign({}, temp[action.index]);
                objcoppy.quantitybuy += 1;
                temp.splice(action.index, 1);
                temp.splice(action.index, 0, objcoppy)
                console.log(temp)
                return temp;
            }
        case 'REDUCE':
            {
                let temp = [...state];
                let objcoppy = Object.assign({}, temp[action.index]);
                objcoppy.quantitybuy += -1;
                if (objcoppy.quantitybuy !== 0) {
                    temp.splice(action.index, 1);
                    temp.splice(action.index, 0, objcoppy)
                    return temp;
                }
                else {
                    action.deleteproduct(action.pr.id, action.index);
                }
            }
        default:
            return state;
    }
}

export default Cart;