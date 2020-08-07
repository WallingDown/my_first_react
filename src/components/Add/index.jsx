import React, { Component } from 'react'
import './index.css'

export default class Add extends Component {
	handleKeyUp = (event) =>{
		const {addTodo} = this.props
		const {target:{value:userinput}} = event
		if (event.keyCode === 13) {
			if (!userinput.trim()) {
				alert('不能为空！')
				return
			}
			addTodo(userinput.trim())
			event.target.value = ''
		}
	}
	render() {
		return (
			<div className="todo-header">
				<input 
				onKeyUp={this.handleKeyUp}
				type="text" 
				placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}
}

