import React, {Component} from 'react'
import axios from 'axios'

class NewWorkoutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workoutName: ""
        }
        this.workoutNameOnChange = this
            .workoutNameOnChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onSubmit(e) {
        e.preventDefault()
        axios
            .post('/api/workouts/new', this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    workoutNameOnChange(e) {
        this.setState({workoutName: e.target.value})
    }

    componentDidUpdate() {
        componentHandler.upgradeDom()
    }

    getAllExercises() { 
        //get a list of exercises to add to the workout
    }

    

    render() {
        return (
            <div>
                <h1>New Workout</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label htmlFor="workout_name" className="mdl-textfield__label">Name</label>
                        <input
                            className="mdl-textfield__input"
                            type="text"
                            id="workout_name"
                            onChange={this.workoutNameOnChange}/>
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

export default NewWorkoutPage