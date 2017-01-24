import React, {Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'

class exercisesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: []
        }

    }

    getExercises() {
        axios
            .get('/api/exercises')
            .then(res => this.setState({exercises: res.data.exercises}))
            .catch(err => console.log(err))
    }

    componentWillMount() {
        this.getExercises()
    }

    deleteWorkout(workout) {}

    render() {
        return (
            <div>
                <p>exercises</p>
                <Link to="/exercises/new">Add Exercise</Link>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this
                            .state
                            .exercises
                            .map((exercise, index) => <tr key={index}>
                                <td>{exercise.exercise_name}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default exercisesPage