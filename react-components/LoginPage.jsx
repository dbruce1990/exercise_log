import React, {Component} from 'react';
import axios from 'axios'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.onSubmit = this
            .onSubmit
            .bind(this)
        this.onEmailChange = this
            .onEmailChange
            .bind(this)
        this.onPasswordChange = this
            .onPasswordChange
            .bind(this)
    }

    onEmailChange(e) {
        this.setState({email: e.target.value})
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        axios
            .post('/login', this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label htmlFor="useremail" className="mdl-textfield__label">Email</label>
                        <input
                            className="mdl-textfield__input"
                            type="email"
                            name="user_email"
                            value={this.state.email}
                            onChange={this.onEmailChange}/>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label htmlFor="password" className="mdl-textfield__label">Password</label>
                        <input
                            className="mdl-textfield__input"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}/>
                    </div>

                    <button
                        type="submit"
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginPage;