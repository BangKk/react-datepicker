import React from 'react'
import './Calendar.css'
import { getDays } from '../util/moment'

export default class CalendarBody extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            week: ['一', '二', '三', '四', '五', '六', '日'],
        }
    }
    componentWillReceiveProps(nextProps) {
        const { year, month, day, date} = nextProps;
        this.setState({
            year,
            month,
            day,
            date
        }) 
    }
    renderWeek() {
        let { week } = this.state
         return week.map(item => {
            return (
                <th className="cal-table-head-th" key={item}>
                    <span className="cal-table-head-span">{item}</span>
                </th>
            )
        })
    }
    getRenderData() {
        let { year, month } = this.state
        const full = 42
        const currentMonthDays = getDays(year, month)
        const lastMonthDays = getDays(year, month - 1)
        let firstDay = new Date(year, month - 1).getDay()
        firstDay === 0 ? firstDay = 7 : null
        const overDay = full - currentMonthDays - firstDay
        const dayArr = []

        for (let i = firstDay - 1; i > 0; i--) {
            dayArr.push(lastMonthDays - i)
        }

        for (let i = 1; i <= currentMonthDays; i++) {
            dayArr.push(i)
        }

        for (let i = 1; i <= overDay + 1; i++) {
            dayArr.push(i)
        }

        return {
            dayArr,
            firstDay,
            overDay
        }
    }
    renderBody() {
        let { dayArr, firstDay, overDay } = this.getRenderData()
        
        dayArr = dayArr.map((item, index) => {
            let style = ''
            let { month, day, date } = this.state
            if (index < firstDay - 1) {
                style = 'prev'
                month = -- month
            } else if (index > (dayArr.length - overDay - 2)) {
                style = 'next'
                month = ++ month
            } else {
                style = 'curr '
                if (date instanceof Date && +item === date.getDate() && +month === date.getMonth() + 1) {
                    style += 'selected'
                }
            }
            return (
                <td 
                    className={'cal-table-body-cell ' + style} key={item}
                    onClick={this.props.handleDateSelected.bind(this, month, item)}>
                    <span>{item}</span>
                </td>
            )
        })

        let cData = []

        for (let i = 0; i < 6; i++) {
            cData.push(dayArr.slice(i * 7, (i + 1) * 7))
        }

        return cData.map((item, index) => {
            return (
                <tr key={index}>
                    {item}
                </tr>
            )
            
        })
    }
    handleDateSelected(day) {
        this.setState({
            day
        })
    }
    render() {
        return (
            <div className="cal-body">
                <table className="cal-table">
                    <thead>
                        <tr>{this.renderWeek.bind(this)()}</tr>
                    </thead>
                    <tbody>
                        {this.renderBody.bind(this)()}
                    </tbody>
                </table>
            </div>
        )
    }
}