
import axios from 'axios';
import { Dispatch } from 'redux';

import { Action } from '../actions-interface/home';
import HomeModel from '../../../models/home';
import ActionType from '../actions-types';

const Home = () => ( dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: ActionType.GET_HOME_REQUEST
        });

        setTimeout( async () => { 
            const token = localStorage.getItem("token");
                    
            if(token){
                const { data } = await axios.get<HomeModel>(`user/home`, {
                    headers: { "x-access-token": token },
                });

                console.log(data)

                return dispatch({
                    type: ActionType.GET_HOME_SUCCESS,
                    payload: data,
                });
            }
            else window.location.href = "http://localhost:3000/";
        }, 3000)

        
    }
    catch(err: any){
        dispatch({
            type: ActionType.GET_HOME_FAIL,
            payload: err.msj
        })
    }
};

export default Home