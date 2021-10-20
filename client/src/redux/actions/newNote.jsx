import axios from "axios";
export const NEW_NOTE = 'NEW_NOTE';

export const newNote = (info) => async dispatch => {
    
    !info.state && dispatch({type: NEW_NOTE, payload: info})

    try {
        if(info.state) {
            const { data } = await axios.post(`user/notes`, info)
            alert(data.msj)
        }
    }
    catch(err){

    }
}