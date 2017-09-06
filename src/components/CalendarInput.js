import React from 'react'
import { format } from '../util/moment'
import './Calendar.css'

export default class CalendarInput extends React.Component{
    constructor(props) {
        super(props)

        let content = ''
        if (props.year && props.month && props.day) {
            content = format(props.year, props.month, props.day)
        }
        this.state = {
            placeHolder: '请输入日期',
            content
        }
    }
    componentWillReceiveProps(nextProps) {
        const { year, month, day } = nextProps;
        this.setState({
            year,
            month,
            day
        })
        if (year && month && day) {
            const content = format(year, month, day)
            this.setState({
                content
            })
        }
    }
    handleChange(e) {
        const { value } = e.target;
        this.setState({
            content: value
        })
        this.props.onInputChange(value);
    }
    handelDel() {
        this.setState({
            content: ''
        })
        this.props.onDelClick()
    }
    render() {
        let props = this.state;
        return (
            <div className="cal-input-wrap">
                <input
                    className="cal-input"
                    placeholder={props.placeHolder}
                    value={props.content}
                    onChange={this.handleChange.bind(this)}
                />
                <a 
                    onClick={this.handelDel.bind(this)}
                    className="del">
                    x
                </a>
            </div>
        )
    }
}