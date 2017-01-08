import React, { Component } from 'react';

class LoginPage extends Component {
    submit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="useremail">Email</label>
                    <input type="email" name="user_email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />

                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default LoginPage;