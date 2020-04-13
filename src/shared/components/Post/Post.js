import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actionFetchPost} from "../../store/actions/init";
import {withRouter} from "react-router-dom";

const Post = ({post = {}, fetchPost, match}) => {
    const {id} = match.params;
    const {data = {}} = post;
    const {body,title} = data;

    useEffect(() => {
        fetchPost(id)
    }, []);

    return (
        <div>
           <h3>{title}</h3>
            <div>{body}</div>
        </div>
    )

};


const mapStateToProps = ({post}) => {
    return {
        post
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (id) => {
            dispatch(actionFetchPost(id))
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));