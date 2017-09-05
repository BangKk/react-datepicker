import React from 'react'
import './Calendar.css'

export default class CalendarInput extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            placeHolder: '请输入日期',
            content: ''
        }
    }
    handleChange(e) {
        const { value } = e.target;
        this.setState({
            content: value
        })
    }
    handelDel() {
        this.setState({
            content: ''
        })
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