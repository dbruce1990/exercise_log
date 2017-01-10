import React, {Component} from 'react'
import Nav from './Nav.jsx'


class MainLayout extends Component {
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout