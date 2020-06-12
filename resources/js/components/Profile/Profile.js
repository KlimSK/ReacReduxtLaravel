import React, {Component} from 'react';

import {getProfile} from "../Auth/UserFunctions";
import Navbar from "./inc/Navbar";
import Header from "./inc/Header";
import Footer from "./inc/Footer";
import OrdersTable from "./Orders/OrdersTable";
import {Route} from "react-router-dom";
import {Sugar} from "react-preloaders";
import ProductsContainer from "./Products/ProductsContainer";
import {SemanticToastContainer} from "react-semantic-toasts";
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import CurrenciesContainer from "./Currencies/CurrenciesContainer";
import CategoriesContainer from "./Categories/CategoriesContainer";
import {StatusesContainer} from "./Statuses/StatusesContainer";


class Profile extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            loading: true
        };

    }

    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                name: res.user.name,
                email: res.user.email,
                loading: false
            })
        })
    }

    render() {


        return (

            <main>
                <Navbar/>

                <section className="main-content">
                    <Header username={this.state.name}/>

                    <Route exact path="/" component={OrdersTable}/>
                    <Route exact path="/products" render={() => <ProductsContainer /> }/>
                    <Route exact path="/currencies" render={() => <CurrenciesContainer /> }/>
                    <Route exact path="/categories" render={() => <CategoriesContainer /> }/>
                    <Route exact path="/statuses" render={() => <StatusesContainer /> }/>

                    <Footer/>

                </section>

                <SemanticToastContainer position="bottom-right" />
                <Sugar customLoading={this.state.loading} color={'#4385c2'} background="blur"/>
            </main>
        )
    }
}


export default Profile;