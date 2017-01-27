import React, {Component} from 'react'

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            days: [],
            weeks: [],
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            daysOfWeek: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ]
        }

        this.getDaysInMonth = this
            .getDaysInMonth
            .bind(this);
        this.displayMonthName = this
            .displayMonthName
            .bind(this);
        this.previousMonth = this
            .previousMonth
            .bind(this)
        this.nextMonth = this
            .nextMonth
            .bind(this)
    }

    previousMonth(e) {
        e.preventDefault()
        if (this.state.month <= 0) 
            this.setState({month: 11})
        else 
            this.setState({
                month: this.state.month - 1
            })
    }

    nextMonth(e) {
        e.preventDefault()
        if (this.state.month >= 11) 
            this.setState({month: 0})
        else 
            this.setState({
                month: this.state.month + 1
            })
    }

    displayMonthName() {
        let month = ""
        switch (this.state.month) {
            case 0:
                month = "January"
                break
            case 1:
                month = "February"
                break
            case 2:
                month = "March"
                break
            case 3:
                month = "April"
                break
            case 4:
                month = "May"
                break
            case 5:
                month = "June"
                break
            case 6:
                month = "July"
                break
            case 7:
                month = "August"
                break
            case 8:
                month = "September"
                break
            case 9:
                month = "October"
                break
            case 10:
                month = "November"
                break
            case 11:
                month = "December"
                break
            default:
                month = "You broke time!"

        }
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--1-col" onClick={this.previousMonth}>
                    <i className="material-icons">chevron_left</i>
                </div>

                <div className="mdl-cell mdl-cell--4-col">
                    <h2>{month}</h2>
                </div>

                <div className="mdl-cell mdl-cell--1-col" onClick={this.nextMonth}>
                    <i className="material-icons">chevron_right</i>
                </div>

            </div>
        )
    }

    getDaysInMonth() {
        const date = new Date(this.state.year, this.state.month, 1)
        const days = []
        while (date.getMonth() === this.state.month) {
            days.push(new Date(date))
            date.setDate(date.getDate() + 1)
        }
        return days
    }

    displayMonth() {
        const daysInMonth = this.getDaysInMonth()
        let month = []

        let week = 0
        let currentWeek = [
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ]

        daysInMonth.forEach(today => {
            const dayOfWeek = today.getDay()
            const todaysDate = today.getDate()
            const isSaturday = () => today.getDay() == 6
            const lastDayOfMonth = () => daysInMonth.length == todaysDate

            currentWeek[dayOfWeek] = today

            if (isSaturday()) {
                month[week] = currentWeek
                currentWeek = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
                week += 1
            }

            if (lastDayOfMonth()) {
                month[week] = currentWeek
            }

        })

        const renderDay = (day, i) => day !== null
            ? <td key={"day" + i}>{day.getDate()}</td>
            : <td key={"empty" + i}>empty</td>

        const renderWeek = (week, i) => <tr key={"week" + i}>{week.map((day, i) => renderDay(day, i))}</tr>
        

        month = month.map((week, i) => renderWeek(week, i))
        return month
    }

    render() {
        return (
            <div>
                <div>{this.displayMonthName()}</div>
                <table
                    style={{
                    border: "1px solid black"
                }}>
                    <tbody>
                        <tr>
                            {this
                                .state
                                .daysOfWeek
                                .map((day, i) => <th key={i}>{day}</th>)}
                        </tr>
                        {this.displayMonth()}
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = Calendar