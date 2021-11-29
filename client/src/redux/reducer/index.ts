
import { combineReducers } from 'redux';

import register_login from './register_login';
import home from './home';
import note from './note';

const reducers = combineReducers({
    register_login,
    home,
    note,
});

export default reducers;