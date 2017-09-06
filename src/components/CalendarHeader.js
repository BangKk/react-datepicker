import React from 'react'
import './Calendar.css'

export default class CalendarHeader extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }
    componentWillReceiveProps(nextProps) {
        const { year, month } = nextProps;
        this.setState({
            year,
            month
        }) 
    }
    renderDate() {
        const { year, month } = this.state
        return `${year}年${month}月`
    }
    render() {
        let props = this.state
        return (
            <div className="cal-header">
                <a className="prev-year" onClick={props.onPrevYearClick}>«</a>
                <a className="prev-month" onClick={props.onPrevMonthClick}>‹</a>
                <span>
                    {this.renderDate.bind(this)()}
                </span>
                <a className="next-year" onClick={props.onNextMonthClick}>›</a>
                <a className="next-month" onClick={props.onNextYearClick}>»</a>
            </div>
        )
    }
}