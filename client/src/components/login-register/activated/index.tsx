import React, { useEffect } from 'react';
import actions from '../../../redux/actions/actions-creators/register_loginAction';
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { rootStore } from '../../../redux/store';

import Loader from '../../loader';
import Login from '../login'

import utils from '../../../utils';
import alerts from '../../../utils/alerts';

const Verify: React.FC = (): JSX.Element => {
    
    const dispatch = useDispatch();
    const { token } = useParams();
    const store = useSelector(( state: rootStore ) => state.register_login);
    const element = utils.getElement("emergent")

    useEffect(() => {
        dispatch(actions.loading())
        token && dispatch(actions.Activated(token))
    }, []);

    return (
        <div>
            <h1>Hola</h1>
            {
                !store.loading ? store.activated && store.msj ? ( (() => { alerts.alertSuccess(store.msj); return ( <><Login/></> ) } )() ) : store.err && alerts.alertError(store.err) : ReactDOM.createPortal(<Loader />, element)
            }
        </div>
    )
}

export default Verify;