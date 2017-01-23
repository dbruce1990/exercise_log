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
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
    // <div className="mdl-textfield mdl-js-textfield
    // mdl-textfield--floating-label"> < input type = "text" id="workout_name"
    // className="mdl-textfield__input" onChange={this.workoutNameOnChange}/> <label
    // htmlFor="workout_name" className="mdl-textfield__label">Name</label> </div>
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label htmlFor="username" className="mdl-textfield__label">Username</label>
                        <input
                            className="mdl-textfield__input"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.onUsernameChange}/>
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
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label htmlFor="password_confirm" className="mdl-textfield__label">Confirm Password</label>
                        <input
                            className="mdl-textfield__input"
                            type="password"
                            name="password_confirm"
                            value={this.state.password_confirm}
                            onChange={this.onPasswordConfirmChange}/>
                    </div >

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label htmlFor="email" className="mdl-textfield__label">Email</label>
                        <input
                            className="mdl-textfield__input"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onEmailChange}/>
                    </div>

                    <button
                        type="submit"
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        Sign up!
                    </button>
                </form>
            </div>
        );
    }
}

export default RegistrationPage;