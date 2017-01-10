import React, {Component} from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
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
    }

    onUsernameChange(e) {
        this.setState({username: e.target.value})
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="useremail">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        value={this.state.username}
                        onChange={this.onUsernameChange}/>

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