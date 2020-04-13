import {INIT_DATA} from "../actionTypes";

const initialState = {};

const init = (state = initialState, action) => {
    const {data} = action;
    switch (action.type) {
        case  INIT_DATA:
            return {...state, data};
        default:
            return state;
    }
};

export default init;