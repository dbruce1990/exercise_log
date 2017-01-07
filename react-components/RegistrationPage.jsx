import React, {Component} from 'react';

class RegistrationPage extends Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />

                    <label htmlFor="password_confirm">Confirm Password</label>
                    <input type="password" name="password_confirm" />

                    <label htmlFor="user_email">Email</label>
                    <input type="email" name="user_email" />

                    <input type="submit" value="Sign up!" />
                </form>
            </div>
        );
    }
}

export default RegistrationPage;