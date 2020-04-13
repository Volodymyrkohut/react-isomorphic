import {FETCH_POST} from "../actionTypes";

const initialState = {};

const post = (state = initialState, action) => {
    const {data} = action;

    switch (action.type) {
        case  FETCH_POST:
            return {...state, data};
        default:
            return state;
    }
};

export default post;