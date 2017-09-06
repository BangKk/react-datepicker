import React from 'react'
import CalendarHeader from  './CalendarHeader'
import CalendarInput from './CalendarInput'
import CalendarBody from './CalendarBody'
import { format } from '../util/moment'
import './Calendar.css'

export default class Calendar extends React.Component{
    constructor(props) {
        super(props)
        const date = new Date()
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            date,
            show: false,
            content: '请选择日期',
        }
    }
    nextYear() {
        this.setState({
            year: ++ this.state.year,
            day: null
        })
    }
    prevYear() {
        let { year } = this.state;
        +year === 1 ? this.setState({year, day: null}) : this.setState({ year: -- year, day: null})
    }
    nextMonth() {
        let { month, year } = this.state
        if (+month === 12) {
            month = 1
            year = year + 1
        } else {
            month = month + 1
        }

        this.setState({
            month,
            year,
            day: null
        })
    }
    prevMonth() {
        let { month, year } = this.state
        if (+month === 1) {
            month = 12
            if (+year !== 1) {
                year = year - 1
            }
        } else {
            month = month - 1
        }

        this.setState({
            month,
            year,
            day: null
        })
    }
    handleDateSelected(month, day) {
        const { year } = this.state
        day   = +day
        month = +month
        this.setState({
            day,
            month,
            date: new Date(year, month - 1, day),
            show: false
        })
    }
    onInputChange(content) {
        console.log(content)
    }
    onDelClick() {
        this.setState({
            day: null,
            date: null
        })
    }
    setShow(show) {
        this.setState({
            show
        })
    }
    render() {
        console.log(this.state)
        let props = this.state
        let { content, year, month, day } = props
        if (year && month && day) {
            content = format(year, month, day)
        }
        return (
            <div className="date-picker">
                <div className="date-picker-input-wrap">
                    <input 
                        type="text" 
                        className="date-picker-input"
                        placeholder={content}
                        onFocus={(e) => this.setShow(true)}
                    />
                </div>
                { this.state.show ? (
                    <div className="calendar">
                        <CalendarInput 
                            {...props}
                            onInputChange={this.onInputChange.bind(this)}
                            onDelClick={this.onDelClick.bind(this)}
                        />
                        <CalendarHeader
                            {...props}
                            onPrevYearClick={this.prevYear.bind(this)}
                            onPrevMonthClick={this.prevMonth.bind(this)}
                            onNextYearClick={this.nextYear.bind(this)}
                            onNextMonthClick={this.nextMonth.bind(this)}
                        />
                        <CalendarBody 
                            {...props}
                            handleDateSelected={this.handleDateSelected.bind(this)}
                        />
                    </div>) : null}
            </div>
        )
    }
}