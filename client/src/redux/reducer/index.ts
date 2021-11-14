
import { combineReducers } from 'redux';

import login from './login';
import home from './home';
import note from './note';

const reducers = combineReducers({
    login,
    home,
    note,
});

export default reducers;