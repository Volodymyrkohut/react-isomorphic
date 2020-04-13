import React from "react";
import {NavLink, Switch, Route, withRouter, Redirect} from "react-router-dom";

const About = () => <div>about page</div>;
const Index = () => <div>index page</div>;
const Occupation = () => <div>occupation page</div>;

const App = ({data}) => {
    return <div>
        Data {data} <br/>

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

export default App