import {combineReducers} from 'redux';
import init from "./init";
import posts from "./posts";
import post from "./post";

export default combineReducers({
    init,
    posts,
    post,
})
