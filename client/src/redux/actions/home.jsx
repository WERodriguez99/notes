import axios from 'axios';

export const GET_DATA_USER = 'GET_DATA_USER';

export const getDataUser = () => async dispatch => {
    try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get('user/home', {
            headers: { "x-access-token": token },
        });

        return dispatch({ type: GET_DATA_USER, payload: data })
    }
    catch(err){
        alert(err)
    }
}