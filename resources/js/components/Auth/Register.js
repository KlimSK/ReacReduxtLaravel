import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {register} from './UserFunctions';

class Register extends Component {

    constructor() {
        super();

        this.state = {
            registerUsername: '',
            registerPassword: '',
            registerName: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();


        const newUser = {
            email: this.state.registerUsername,
            password: this.state.registerPassword,
            name: this.state.registerName
        };

        register(newUser).then(res => {
            this.props.history.push('/profile');
        });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {

        const {registerUsername, registerPassword, registerName} = this.state;

        return (
            <div className="signup form-peice">
                <form className="signup-form" action="#" onSubmit={this.handleFormSubmit} method="post">

                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text"
                               name="registerName"
                               id="name"
                               className="name"
                               onChange={this.onChange}
                               value={registerName}
                        />
                        <span className="error"></span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Adderss</label>
                        <input type="email"
                               name="registerUsername"
                               id="email"
                               className="email"
                               onChange={this.onChange}
                               value={registerUsername}
                        />
                        <span className="error"></span>
                    </div>

                    {/*<div className="form-group">
                        <label htmlFor="phone">Phone Number - <small>Optional</small></label>
                        <input type="text" name="phone" id="phone" />
                    </div>*/}

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               name="registerPassword"
                               id="password"
                               className="pass"
                               value={registerPassword}
                               onChange={this.onChange}
                        />
                        <span className="error"></span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="passwordCon">Confirm Password</label>
                        <input type="password" name="passwordCon" id="passwordCon" className="passConfirm"/>
                        <span className="error"></span>
                    </div>

                    <div className="CTA">
                        <input type="submit" value="Signup Now" id="submit"/>
                        <a href="#" className="switch">I have an account</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;