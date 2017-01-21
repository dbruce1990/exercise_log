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
                    <label htmlFor="useremail">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        value={this.state.email}
                        onChange={this.onEmailChange}/>

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}/>

                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default LoginPage;