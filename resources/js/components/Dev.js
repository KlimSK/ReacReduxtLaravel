import React from "react";
import history from "../history";
import Welcome from "./Auth/Welcome";
import Profile from "./Profile/Profile";
import OrdersTable from "./Profile/Orders/OrdersTable";
import Products from "./Profile/Products/Products";
import {getLocalStorage} from "./Auth/UserFunctions";
import {Route, Router, Switch} from "react-router-dom";
import ProductsContainer from "./Profile/Products/ProductsContainer";


function isAuthorized() {

    if (!getLocalStorage('usertoken')) {
        history.push('/welcome');
    }

}

let Dev = (props) => {

    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/welcome" component={Welcome}/>

                    <Route path="/" onEnter={isAuthorized()}>
                        <Profile>
                            <Route exact path='/' render={() => <OrdersTable/>}/>
                            <Route exact path='/products'
                                   render={() => <ProductsContainer store={props.store}/>}/>
                        </Profile>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};


export default Dev;