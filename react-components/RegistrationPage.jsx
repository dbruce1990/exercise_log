import React, {Component} from 'react'
import axios from 'axios'

class RegistrationPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            password_confirm: '',
            email: ''
        }
        this.onSubmit = this
            .onSubmit
            .bind(this)
        this.onUsernameChange = this
            .onUsernameChange
            .bind(this)
        this.onPasswordChange = this
            .onPasswordChange
            .bind(this)
        this.onPasswordConfirmChange = this
            .onPasswordConfirmChange
            .bind(this)
        this.onEmailChange = this
            .onEmailChange
            .bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        axios
            .post('/register', this.state)
            .then(res => handleResponse(res))
            .catch(err => handleError(err))
    }

    onUsernameChange(e) {
        this.setState({username: e.target.value})
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value})
    }

    onPasswordConfirmChange(e) {
        this.setState({password_confirm: e.target.value})
    }

    onEmailChange(e) {
        this.setState({email: e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onUsernameChange}/>

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}/>

                    <label htmlFor="password_confirm">Confirm Password</label>
                    <input
                        type="password"
                        name="password_confirm"
                        value={this.state.password_confirm}
                        onChange={this.onPasswordConfirmChange}/>

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onEmailChange}/>

                    <input type="submit" value="Sign up!"/>
                </form>
            </div>
        );
    }
}

export default RegistrationPage;