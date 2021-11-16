
enum ActionType {

    // Actions types register - login
    GET_REQUEST = "GET_REQUEST",
    REGISTER_SUCCESS = "REGISTER_RSUCCESS",
    
    LOGIN_SUCCESS = "GET_LOGIN_SUCCESS",
    
    GET_FAIL = "GET_FAIL",

    // Actions types of home info
    GET_HOME_REQUEST = "GET_HOME_REQUEST",
    GET_HOME_SUCCESS = "GET_HOME_SUCCESS",
    GET_HOME_FAIL = "GET_HOME_FAIL",

    // Actions types of note
    NOTE_REQUEST = "POST_NEW_NOTE_REQUEST",
    NOTE_FAIL = "POST_NEW_NOTE_FAIL",
        // Details note
        GET_NOTE_SUCCESS = "GET_NOTE_SUCCESS", 
        // New note
        POST_NEW_NOTE_SUCCESS = "POST_NEW_NOTE_SUCCESS",
        // Modify note
        PUT_NOTE_SUCCESS = "PUT_NOTE_SUCCESS",
        // Delete note
        DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS"
         

}

export default ActionType;