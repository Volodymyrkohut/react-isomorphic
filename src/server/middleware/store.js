import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../../shared/store/reducers/index.js';
import thunk from "redux-thunk";

const configureStore = () => {
    return createStore(reducer,
        compose(applyMiddleware(thunk)));
};

const storeMiddleware = () => (req, res, next) => {
    req.store = configureStore();
    next();
};

export default storeMiddleware;