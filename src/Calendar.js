import React from 'react'
import CalendarHeader from  './CalendarHeader'
import CalendarInput from './CalendarInput'
import './Calendar.css'
import { getDays } from './moment'

export default class Calendar extends React.Component{
    constructor(props) {
        super(props)
        const date = new Date()
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: getDays(date.getFullYear(), date.getMonth() + 1)
        }
    }
    nextYear() {
        console.log(this.state.year)
        this.setState({
            year: ++ this.state.year
        })
    }
    prevYear() {
        this.setState({
            year: -- this.state.year
        })
    }
    nextMonth() {
        this.setState({
            month: ++ this.state.month
        })
    }
    prevMonth() {
        this.setState({
            month: -- this.state.month
        })
    }
    render() {
        let props = this.state;
        return (
            <div className="calendar">
                <CalendarInput />
                <CalendarHeader
                    {...props}
                    onPrevYearClick={this.prevYear.bind(this)}
                    onPrevMonthClick={this.prevMonth.bind(this)}
                    onNextYearClick={this.nextYear.bind(this)}
                    onNextMonthClick={this.nextMonth.bind(this)}
                />
            </div>
        )
    }
}