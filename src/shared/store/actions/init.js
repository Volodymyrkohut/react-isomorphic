import {INIT_DATA} from "../actionTypes";
import {fetchData} from "../../helpers/network";

export const actionInitData = () => dispatch => {
    return fetchData(`https://jsonplaceholder.typicode.com/posts/1`).then((data) => {
        const {title} = data.data;
        console.log("title",title)
        dispatch({type: INIT_DATA, data: title});
    }).catch((error) => {
        console.log("error", error)
    })
};