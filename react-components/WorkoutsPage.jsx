import React, {Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'

class WorkoutsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workouts: []
        }

    }

    getWorkouts() {
        axios
            .get('/api/workouts')
            .then(res => {
                this.setState({workouts: res.data.workouts})
            })
            .catch(err => console.log(err))
    }

    componentWillMount() {
        this.getWorkouts()
    }

    deleteWorkout(workout) {}

    updateWorkout(workout) {}

    render() {
        return (
            <div>
                <p>workouts</p>
                <Link to="/workouts/new">Add Workout</Link>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this
                            .state
                            .workouts
                            .map((workout, index) => <tr key={index}>
                                <td>{workout.workout_name}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WorkoutsPage