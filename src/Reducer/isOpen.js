var isOpen = (state = { status: false, index: null }, action) => {
    switch (action.type) {
        case 'OPEN':
            {
                return { status: true, index: action.index };
            }
        case 'CLOSE':
            {
                return { status: false, index: null };
            }
        default:
            return state;
    }
}

export default isOpen;