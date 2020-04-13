import React, {useEffect} from "react";
import {NavLink, Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {actionInitData} from "./store/actions/init";


const About = () => <div>about page</div>;
const Index = () => <div>index page</div>;
const Occupation = () => <div>occupation page</div>;

const App = ({data, init, actionGetInitialData}) => {
    useEffect(() => {
        actionGetInitialData("Client")
    }, []);

    return <div>
        Data: {data} <br/>
        Redux data: {init.data} <br/>
        <nav>
            <ul>
                <li><NavLink exact to="/">Main</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/occupation">Occupation</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/" component={Index} exact={true}/>
            <Route path="/about" component={About} exact={true}/>
            <Route path="/occupation" component={Occupation} exact={true}/>
        </Switch>
    </div>
};

const mapStateToProps = ({init}) => {
    return {
        init
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionGetInitialData: (data) => {
            dispatch(actionInitData(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)