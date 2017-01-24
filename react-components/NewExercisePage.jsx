import React, {Component} from 'react'
import axios from 'axios'

class NewExercise extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exerciseName: ""
        }
        this.exerciseNameOnChange = this
            .exerciseNameOnChange
            .bind(this)
        this.onSubmit = this
            .onSubmit
            .bind(this)
    }

    componentDidUpdate() {
        componentHandler.upgradeDom()
    }

    exerciseNameOnChange(e) {
        this.setState({exerciseName: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        axios
            .post('/api/exercises/new', this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>New Exercise</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label htmlFor="exercise_name" className="mdl-textfield__label">Name</label>
                        <input
                            className="mdl-textfield__input"
                            type="text"
                            id="exercise_name"
                            onChange={this.exerciseNameOnChange}/>
                    </div>

                    <button
                        type="submit"
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default NewExercise