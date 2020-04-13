import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from "redux-thunk";
import reducer from '../shared/store/reducers/index';
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
    const preloadedState = window.PRELOADED_STATE;

    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(ReduxThunk)));
};

export default configureStore;