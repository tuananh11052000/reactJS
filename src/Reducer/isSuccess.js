var isSuccess = (state = false, action) => {
    switch (action.type){
        case 'SUCCESS':
            return !state;
        case "CONTINUE":
            return !state;
        default:
            return state;
    }
}

export default isSuccess;