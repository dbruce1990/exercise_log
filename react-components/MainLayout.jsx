import React, {Component} from 'react'
import {Link} from 'react-router'

class MainLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: true,
            routes: [
                {
                    path: "/workouts",
                    text: "Workouts",
                    requiresAuthentication: true
                }, {
                    path: "/exercises",
                    text: "Exercises",
                    requiresAuthentication: true
                },{
                    path: "/calendar",
                    text: "Calendar"
                }
            ]
        }

        this.isLoggedIn = this
            .isLoggedIn
            .bind(this)
    }

    isLoggedIn() {
        return this.state.loggedIn
    }

    title() {
        return <span className="mdl-layout-title">Exercise Log</span>
    }

    nav(navClass) {
        return <nav className={navClass}>
            <Link to="/" className="mdl-navigation__link">Home</Link>
            {this
                .state
                .routes
                .map((route, index) => <Link key={index} to={route.path} className="mdl-navigation__link">{route.text}</Link>)}
            {this.isLoggedIn == true && <Link to="/logout" className="mdl-navigation__link">Logout</Link>}
            {this.isLoggedIn != true && <Link to="/register" className="mdl-navigation__link">Register</Link>}
            {this.isLoggedIn != true && <Link to="/login" className="mdl-navigation__link">Sign In</Link>}
        </nav>
    }
    render() {
        return (
            <div
                className="mdl-layout--no-desktop-drawer-button mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        {this.title()}
                        <div className="mdl-layout-spacer"></div>
                        {this.nav("mdl-navigation mdl-layout--large-screen-only")}
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    {this.title()}
                    {this.nav("mdl-navigation")}
                </div>
                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default MainLayout