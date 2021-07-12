var isPay = (state = false, action) => {
    switch (action.type) {
        case 'PAY':
            {
                return !state;
            }
        default:
            return state;
    }
}

export default isPay;