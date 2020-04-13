import {INIT_DATA, FETCH_POST, FETCH_POSTS} from "../actionTypes";
import {fetchData} from "../../helpers/network";

export const actionInitData = () => dispatch => {
    return fetchData(`https://jsonplaceholder.typicode.com/posts/1`).then((data) => {
        const {title} = data.data;

        dispatch({type: INIT_DATA, data: title});
    }).catch((error) => {
        console.log("error", error)
    })
};

export const actionFetchPost = (id) => dispatch => {
    return fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`).then((data) => {
        dispatch({type: FETCH_POST, data: data.data})
    }).catch((error) => {
        console.log("post",error)
    })
};

export const actionFetchPosts = () => dispatch => {
    return fetchData(`https://jsonplaceholder.typicode.com/posts`).then((data) => {
        dispatch({type: FETCH_POSTS, data: data.data})
    }).catch((error) => {
        console.log("post",error)
    })
};