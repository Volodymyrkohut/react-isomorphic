import {INIT_DATA} from "../actionTypes";

export const actionInitData = (data) => dispatch => {
    dispatch({type: INIT_DATA, data});
};