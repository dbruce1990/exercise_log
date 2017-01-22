import React, {Component} from 'react'
import {Link} from 'react-router'

class WorkoutsPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>workouts</p>
                <Link to="/workouts/new">Add Workout</Link>
            </div>
        )
    }
}

export default WorkoutsPage