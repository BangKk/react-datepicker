import React from 'react'
import './Calendar.css'

export default class CalendarHeader extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }
    renderDate() {
        const { year, month, day } = this.state
        return `${year}年${month}月`
    }
    render() {
        let props = this.state
        console.log(props)
        return (
            <div className="cal-header">
                <a className="prev-year" onClick={props.onPrevYearClick}>«</a>
                <a className="prev-month" onClick={props.onPrevMonthClick}>‹</a>
                <span>
                    {this.renderDate.bind(this)()}
                </span>
                <a className="next-year" onClick={props.onNextYearClick}>›</a>
                <a className="next-month" onClick={props.onnextMonthClick}>»</a>
            </div>
        )
    }
}