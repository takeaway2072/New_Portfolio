import React, { Component } from "react";
import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
        this.handleUnsuccessfullAuth = this.handleUnsuccessfullAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
      }
    
    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin();
    }

    render() {
        return (
        <div className="auth-page-wrapper">
            <div
            className="left-column"
            style={{
                backgroundImage: `url(${loginImg})`
            }}
            />

            <div className="right-column">
            <Login 
                handleSuccessfullAuth={this.handleSuccessfullAuth}
                handleUnSuccessfullAuth={this.handleUnSuccessfullAuth}
                />
            </div>
        </div>
        );
    } 
}