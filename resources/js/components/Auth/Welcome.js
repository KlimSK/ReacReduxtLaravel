import React, {Component} from 'react';

import Login from "./Login";
import Register from "./Register";

import renderWelcomePage from "../../src/sign_in"

class Welcome extends Component{

    componentDidMount(){
        renderWelcomePage();
    }

    render(){
        return(
            <div className="container sign_in_wrap">
                <section id="formHolder">

                    <div className="row">
                        <div className="col-sm-6 brand">
                            <a href="#" onClick={(event) => {event.preventDefault() } } className="logo">MASTER THESIS<span></span></a>

                            <div className="heading">
                                <h2>CRM</h2>
                                <p>Your Right Choice</p>
                            </div>

                            <div className="success-msg">
                                <p>Great! You are one of our members now</p>
                                <a href="#" className="profile">Your Profile</a>
                            </div>
                        </div>

                        <div className="col-sm-6 form">
                            <Login/>

                            <Register/>
                        </div>
                    </div>

                </section>

            </div>
        )
    }
}

export default Welcome;