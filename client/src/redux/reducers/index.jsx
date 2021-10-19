const initialState = {
    data: undefined,
    auth: undefined,
    notes: undefined,
}

const reducer = ( state = initialState, action ) => {
    console.log('store:' ,action)
    const options = {
        USER_LOGIN_STATE: { ...state, auth: action.payload },
        GET_DATA_USER: {...state, notes: action.payload}
    }

    return options[action.type] || state
};

export default reducer;