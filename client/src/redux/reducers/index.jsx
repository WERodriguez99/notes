const initialState = {
    auth: undefined,
    account: undefined,
    newNote: undefined,
}

const reducer = ( state = initialState, action ) => {
    console.log('store:' ,action)
    const options = {
        USER_LOGIN_STATE: { ...state, auth: action.payload },
        GET_DATA_USER: {...state, account: action.payload},
        NEW_NOTE: {...state, newNote: action.payload},
    }

    return options[action.type] || state
};

export default reducer;