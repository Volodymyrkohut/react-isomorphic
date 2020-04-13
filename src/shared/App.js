import React, {useEffect} from "react";
import {NavLink, Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {actionInitData} from "./store/actions/init";
import routes from "./routes";

const App = ({init, actionGetInitialData,...restProps}) => {
    useEffect(() => {
        actionGetInitialData()
    }, []);

    return <div>

        Redux data: {init.data} <br/>
        <nav>
            <ul>
                <li><NavLink exact to="/">Main</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/posts">posts</NavLink></li>
            </ul>
        </nav>

        <Switch>
            {
                routes.map(({path, exact, component: Comp, ...rest}) => {
                    return (
                        <Route key={path} path={path} exact={exact} render={(props) => {
                            return <Comp {...props} {...rest} {...restProps}/>
                        }}/>
                    )
                })
            }
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
        actionGetInitialData: () => {
            dispatch(actionInitData())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)