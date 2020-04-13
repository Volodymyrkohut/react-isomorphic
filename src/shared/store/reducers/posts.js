import {FETCH_POSTS} from "../actionTypes";

const initialState = {};

const posts = (state = initialState, action) => {
    const {data} = action;

    switch (action.type) {
        case  FETCH_POSTS:
            return {...state, data};
        default:
            return state;
    }
};

export default posts;