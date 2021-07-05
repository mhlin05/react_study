import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/List/List'
export default class App extends Component {
  // 数据在哪里 更新数据的方法就在哪里

  // 初始化状态
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        isDone: false
      },
      {
        id: '002',
        name: '睡觉',
        isDone: false
      },
      {
        id: '003',
        name: '喝水',
        isDone: true
      },
      {
        id: '004',
        name: '打代码',
        isDone: true
      }
    ]
  }
  // 添加一个todo
  addToDoItem = (todoItem) => {
    // 生成新数组
    const newTodos = [todoItem, ...this.state.todos]
    // 更新state状态
    this.setState({ todos: newTodos })
  }
  // 删除一个todo
  deleteToDoItem = (id) => {
    // 获取要删除的位置
    const pos = this.state.todos.findIndex((item) => item.id === id)
    // 这里可以直接使用filter返回一个新数组
    // 过滤掉id相等的就行
    const newTodos = this.state.todos.slice()
    newTodos.splice(pos, 1)
    // console.log(newTodos)
    this.setState({ todos: newTodos })
  }
  // 修改checkbox选中状态
  statusChange = (id, isDone) => {
    // 解构出 todos
    const { todos } = this.state

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: isDone }
      } else return todo
    })
    this.setState({ todos: newTodos })
  }
  // 全选checkbox
  checkAll = (done) => {
    const { todos } = this.state
    const newToDos = todos.map((todo) => {
      return { ...todo, isDone: done }
    })
    this.setState({ todos: newToDos })
  }
  // 清除已完成任务
  deleteDonedTasks = () => {
    // 统计已完成的任务
    const { todos } = this.state
    // 过滤出未完成的任务
    const newTodos = todos.filter((todo) => todo.isDone === false)
    // 更新状态
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDoItem={this.addToDoItem}></Header>
          <List
            todos={this.state.todos}
            statusChange={this.statusChange}
            deleteToDoItem={this.deleteToDoItem}
          ></List>
          <Footer
            todos={this.state.todos}
            checkAll={this.checkAll}
            deleteDonedTasks={this.deleteDonedTasks}
          ></Footer>
        </div>
      </div>
    )
  }
}
