import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer  from './reducers';
import thunk from 'redux-thunk';

const initState = {};

const store = createStore(
    rootReducer,
     initState, 
     compose(
         applyMiddleware(thunk),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

     )
    );

export default store;