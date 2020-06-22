import React from "react";
import Welcome from "./Auth/Welcome";
import Profile from "./Profile/Profile";
import Orders from "./Profile/Orders/Orders";
import Products from "./Profile/Products/Products";
import {getLocalStorage} from "./Auth/UserFunctions";
import {Route, Router, Switch} from "react-router-dom";
import ProductsContainer from "./Profile/Products/ProductsContainer";
import history from "../history";

let isAuthorized = () => {

    if (!getLocalStorage('usertoken')) {
        history.push('/welcome');
    }

};


let ifAuthorized = () => {
    if (getLocalStorage('usertoken')) {
        history.push('/');
    }
};

let Dev = (props) => {

    return (
        <>
            <Switch>
                <Route exact path="/welcome" component={Welcome}/>

                {/*<Route path="/" onEnter={isAuthorized()}>
                        <Profile>
                            <Route exact path='/' render={() => <OrdersTable/>}/>
                            <Route exact path='/products'
                                   render={() => <ProductsContainer store={props.store}/>}/>
                        </Profile>
                    </Route>*/}

                <Route path="/" onEnter={isAuthorized()} render={() => <Profile />}/>
            </Switch>
        </>
    );
};


export default Dev;