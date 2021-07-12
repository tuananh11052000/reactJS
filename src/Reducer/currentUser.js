var currentUser = (state = { uid: null, role: "let's login" }, action) => {
    switch (action.type) {
        case 'LOGIN':
            {
                console.log(action.value);
                return action.value
            }
        default:
            return state;
    }
}

export default currentUser;