import React, {Component} from 'react';

import {getProfile} from "../Auth/UserFunctions";
import Navbar from "./inc/Navbar";
import Header from "./inc/Header";
import Footer from "./inc/Footer";
import OrdersTable from "./Orders/OrdersTable";
import {Route} from "react-router-dom";
import {Sugar} from "react-preloaders";
import ProductsContainer from "./Products/ProductsContainer";


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
                    {/*{children}*/}

                    <Footer/>

                </section>


                <Sugar customLoading={this.state.loading} color={'#4385c2'} background="blur"/>
            </main>
        )
    }
}


export default Profile;