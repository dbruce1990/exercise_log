import React, {Component} from 'react'

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            days: [],
            weeks: [],
            monthInput: new Date().getMonth(),
            yearInput: new Date().getFullYear(),
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        }

        this.getDaysInMonth = this
            .getDaysInMonth
            .bind(this);
        this.displayDay = this
            .displayDay
            .bind(this);
        this.getWeeks = this
            .getWeeks
            .bind(this);
        this.displayWeek = this
            .displayWeek
            .bind(this);
        this.monthInputOnChange = this
            .monthInputOnChange
            .bind(this);
        this.yearInputOnChange = this
            .yearInputOnChange
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

    monthInputOnChange(e) {
        this.setState({
            month: e.target.value - 1
        })
    }

    yearInputOnChange(e) {
        this.setState({year: e.target.value})
    }

    componentWillMount() {
        this.setState({
            days: this.getDaysInMonth()
        }, () => this.setState({
            weeks: this.getWeeks(this.state.days)
        }))
    }

    displayDay(day) {
        return (
            <div className="calendar__day--highlight mdl-cell mdl-cell--1-col">{day.getDate()}</div>
        )
    }

    displayWeek(week) {
        return (
            <div className="mdl-grid">
                {week.map(day => this.displayDay(day))}
            </div>
        )
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
        return <h2>{month}</h2>
    }

    getWeeks(days) {
        const divStyle = {
            border: "1px solid black"
        }

        const weeks = [
            [], [], [], [], []
        ]
        days.forEach(day => {
            if (day.getDate() <= 7) {
                weeks[0].push(day)
            } else if (day.getDate() <= 14) {
                weeks[1].push(day)
            } else if (day.getDate() <= 21) {
                weeks[2].push(day)
            } else if (day.getDate() <= 28) {
                weeks[3].push(day)
            } else {
                weeks[4].push(day)
            }
        })
        return weeks
    }

    getDaysInMonth() {
        const date = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), 1)
        const days = []
        while (date.getMonth() === this.state.date.getMonth()) {
            days.push(new Date(date))
            date.setDate(date.getDate() + 1)
        }
        return days
    }

    render() {
        return (
            <div>
                <h1>Calendar</h1>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <label htmlFor="calendar_month" className="mdl-textfield__label">Month</label>
                    <input
                        className="mdl-textfield__input"
                        type="number"
                        id="calendar_month"
                        onChange={this.monthInputOnChange}/>
                    <span className="mdl-textfield__error">Enter a number between 1-12.</span>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <label htmlFor="calendar_year" className="mdl-textfield__label">Year</label>
                    <input
                        className="mdl-textfield__input"
                        type="number"
                        id="calendar_year"
                        onChange={this.yearInputOnChange}/>
                </div>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--1-col">
                        <button
                            className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect"
                            onClick={this.previousMonth}>
                            <i className="material-icons">remove</i>
                        </button>
                    </div>
                    <div className="mdl-cell mdl-cell--1-col">{this.displayMonthName()}</div>
                    <div className="mdl-cell mdl-cell--1-col">
                        <button
                            className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect"
                            onClick={this.nextMonth}>
                            <i className="material-icons">add</i>
                        </button>
                    </div>
                </div>
                <div>
                    <p>{this.state.month}</p>
                    <p>{this.state.year}</p>
                </div>
                {this
                    .state
                    .weeks
                    .map(week => this.displayWeek(week))}
            </div>
        )
    }
}

module.exports = Calendar