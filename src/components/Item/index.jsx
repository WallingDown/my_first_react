import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	state = {
		bgColor:'white',
		showDelBtn:'none'
	}
	/**
	 * 查看todo项是否被选中
	 * @param {*} id 
	 */
	handleChange = (id) =>{
		return (event) =>{
			// 获取勾选状态
			const {target:{checked}} = event
			// 获得App逐层传递过来的checkTodo
			const {checkTodo} = this.props
			// 调用checkTodo去勾选
			checkTodo(id,checked)
		}
	}

	//鼠标移入或移除的回调
	handleMousemove = (isMouseEnter)=>{
		return ()=>{
			this.setState({
				bgColor:isMouseEnter ? '#ddd' : 'white',
				showDelBtn:isMouseEnter ? 'block' : 'none'
			})
		}
	}
	// 删除按钮
	handleDelete = (id,title) =>{
		// 获取App逐层传递过来的deleteTodo
		const {deleteTodo} = this.props
		// 如果确定删除
		if (confirm(`确定删除【${title}】吗？`)) {
			deleteTodo(id)
		}
	}
	
	render() {
		const {id, title, completed } = this.props
		const {bgColor,showDelBtn} = this.state
		return (
			<li onMouseEnter={this.handleMousemove(true)}
				onMouseLeave={this.handleMousemove(false)}
				style={{backgroundColor:bgColor}}
			>
				<label>
					<input type="checkbox" checked={completed} onChange={this.handleChange(id)} />
					<span>{title}</span>
				</label>
				<button onClick={() => this.handleDelete(id,title)} className="btn btn-danger" style={{ display: showDelBtn}}>删除</button>
			</li>
		)
	}
}

