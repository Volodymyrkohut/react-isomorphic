import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actionFetchPosts} from "../../store/actions/init";
import {Link} from "react-router-dom";

const Post = ({posts = {}, fetchPosts}) => {
    const {data = []} = posts;

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <div>
            <ul>
                {
                    data.map((post) => {
                        const {title, id} = post;
                        return (
                            <li key={id}><Link to={`/posts/${id}`}>{title}</Link></li>
                        )
                    })
                }

            </ul>
        </div>
    )

};


const mapStateToProps = ({posts}) => {
    return {
        posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(actionFetchPosts())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);