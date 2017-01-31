import React, {Component} from 'react';

class CalendarDay extends Component {
    constructor(props){
        super(props)
        this.displayDate = this.displayDate.bind(this);
    }
    
    displayDate(){
        return this.props.day == null ? "empty" : this.props.day.getDate()
    }
    render() {
        return (
            <td>
                {this.displayDate()}
            </td>
        );
    }
}

export default CalendarDay;