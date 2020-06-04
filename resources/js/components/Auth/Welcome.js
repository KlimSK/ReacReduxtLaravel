import React, {Component} from 'react';

import Login from "./Login";
import Register from "./Register";

import renderWelcomePage from "../../src/sign_in"
import {getLocalStorage} from "./UserFunctions";
import {Grid} from "semantic-ui-react";


class Welcome extends Component {

    componentDidMount() {
        renderWelcomePage();
    }

    render() {
        return (
            <div className='sign_in_wrap'>
                <section id="formHolder">
                    <Grid container>
                        <Grid.Row>
                            <Grid.Column className="brand" width={8}>
                                <a href="#" onClick={(event) => {
                                    event.preventDefault()
                                }} className="logo">MASTER THESIS<span></span></a>

                                <div className="heading">
                                    <h2>CRM</h2>
                                    <p>Your Right Choice</p>
                                </div>

                                <div className="success-msg">
                                    <p>Great! You are one of our members now</p>
                                    <a href="#" className="profile">Your Profile</a>
                                </div>
                            </Grid.Column>


                            <Grid.Column className="form" width={8}>
                                <Login/>

                                <Register/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Welcome;