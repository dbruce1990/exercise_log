import React, {Component} from 'react';
import {Link} from 'react-router';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;