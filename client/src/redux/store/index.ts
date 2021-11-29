
import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export type rootStore = ReturnType<typeof rootReducers> 

export default store;