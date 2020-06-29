import React, {Component} from 'react';

import {getProfile} from "../Auth/UserFunctions";
import Navbar from "./inc/Navbar";
import Header from "./inc/Header";
import Footer from "./inc/Footer";
import {Route} from "react-router-dom";
import {Sugar} from "react-preloaders";
import ProductsContainer from "./Products/ProductsContainer";
import {SemanticToastContainer} from "react-semantic-toasts";
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import CurrenciesContainer from "./Currencies/CurrenciesContainer";
import CategoriesContainer from "./Categories/CategoriesContainer";
import {StatusesContainer} from "./Statuses/StatusesContainer";
import {OrdersContainer} from "./Orders/OrdersContainer";
import {StatisticsContainer} from "./Statistics/StatisticsContainer";
import StatisticsProductsContainer from "./Statistics/Products/StatisticsProductsContainer";
import StatisticsCustomersContainer from "./Statistics/Customers/StatisticsCustomersContainer";
import StatisticsPeriodContainer from "./Statistics/Period/StatisticsPeriodContainer";
import StatisticsCompareContainer from "./Statistics/Compare/StatisticsCompareContainer";
import ConnectionContainer from "./Connections/ConnectionsContainer";


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

                    <Route exact path="/" render={() => <OrdersContainer />}/>
                    <Route exact path="/products" render={() => <ProductsContainer /> }/>
                    <Route exact path="/currencies" render={() => <CurrenciesContainer /> }/>
                    <Route exact path="/categories" render={() => <CategoriesContainer /> }/>
                    <Route exact path="/statuses" render={() => <StatusesContainer /> }/>
                    <Route exact path="/statistics" render={() => <StatisticsContainer /> }/>
                    <Route exact path="/statistics/products" render={() => <StatisticsProductsContainer /> }/>
                    <Route exact path="/statistics/customers" render={() => <StatisticsCustomersContainer /> }/>
                    <Route exact path="/statistics/period" render={() => <StatisticsPeriodContainer /> }/>
                    <Route exact path="/statistics/compare" render={() => <StatisticsCompareContainer /> }/>
                    <Route exact path="/connections" render={() => <ConnectionContainer /> }/>

                    <Footer/>

                </section>

                <SemanticToastContainer position="bottom-right" />
                <Sugar customLoading={this.state.loading} color={'#4385c2'} background="blur"/>
            </main>
        )
    }
}


export default Profile;