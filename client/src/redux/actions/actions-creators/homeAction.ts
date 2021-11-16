
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
            const user = localStorage.getItem("user");
        
            if(token && user){
                const { data } = await axios.get<HomeModel>(`user/home?mail=${user}`, {
                    headers: { "x-access-token": token },
                });

                return dispatch({
                    type: ActionType.GET_HOME_SUCCESS,
                    payload: data,
                });
            };
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