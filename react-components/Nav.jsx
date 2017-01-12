import React, {Component} from 'react'
import {Link} from 'react-router'

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true
        }

        this.isLoggedIn = this
            .isLoggedIn
            .bind(this)
    }

    isLoggedIn() {
        return this.state.loggedIn
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {this.isLoggedIn == true && <li><Link to="/logout">Logout</Link></li>}
                    {this.isLoggedIn != true && <li><Link to="/register">Register</Link></li>}
                    {this.isLoggedIn != true && <li><Link to="/login">Sign In</Link></li>}
                </ul>
            </div>
        )
    }
}

export default Nav