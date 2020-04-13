import {actionFetchPost, actionFetchPosts} from "./store/actions/init";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";
import Index from "./components/Index/Index";
import About from "./components/About/About";


const routes = [{
    path: '/',
    exact: true,
    component: Index,
}, {
    path: '/about',
    exact: true,
    component: About,
}, {
    path: '/posts',
    exact: true,
    component: Posts,
    fetchInitialData: (dispatch) => {
        return dispatch(actionFetchPosts())
    }
}, {
    path: '/posts/:id',
    exact: true,
    component: Post,
    fetchInitialData: (dispatch, url) => {
        const id = url.split('/').pop();

        return dispatch(actionFetchPost(id))
    }
}];

export default routes