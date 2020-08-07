import React, { Component } from 'react'
import './App.css'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import { nanoid } from 'nanoid'

export default class App extends Component {
	state = {
		todos:[
			{id:'001',title:'学习',completed:true},
			{id:'002',title:'唱歌',completed:false},
			{id:'003',title:'提问',completed:true},
			{id:'004',title:'读书',completed:false},
		]
	}

	addTodo = (title) =>{
		const todo = {id:nanoid(),title:title,completed:false}
		this.setState({todos:[todo,...this.state.todos]})
	}
    render() {
		const {todos} = this.state
        return (
            <div className="todo-container">
				<div className="todo-wrap">
					<Add addTodo={this.addTodo}/>
					<List todos={todos}/>
					<Footer/>
				</div>
			</div>
        )
    }
}
