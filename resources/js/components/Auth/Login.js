import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {login, setCookie, getCookie} from './UserFunctions';

import history from "../../history";

class Login extends Component{

    constructor(){
        super();

        this.state = {
            loginUsername: '',
            loginPassword: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event){
        event.preventDefault();


        const user = {
          email: this.state.loginUsername,
          password: this.state.loginPassword
        };

        login(user).then(res => {
            if(res){
                history.push('/');
            }
        });
    }


    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


    render(){

        const {loginUsername, loginPassword} = this.state;

        return(
            <div className="login form-peice switched">
                <form className="login-form" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="loginemail">Email Adderss</label>
                        <input
                            type="email"
                            name="loginUsername"
                            id="loginemail"
                            value={loginUsername}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="loginPassword">Password</label>
                        <input
                            type="password"
                            name="loginPassword"
                            id="loginPassword"
                            value={loginPassword}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="CTA">
                        <input type="submit" value="Login" />
                        <a href="#" className="switch">I'm New</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;