var checkBox = (state = [true, false, false, false, false], action) => {
    switch (action.type) {
        case 'ADD_TYPE':
            {
                let temp = [...state];
                temp[action.index] = !temp[action.index];
                return temp;
            }
        default:
            return state;
    }
}

export default checkBox;