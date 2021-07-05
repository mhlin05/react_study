import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  // 复选框全选的回调函数
  handleCheckAll = (event) => {
    const { checkAll } = this.props
    checkAll(event.target.checked)
  }
  render() {
    const { todos } = this.props

    // 已完成
    const doneToDos = todos.reduce((total, todo) => {
      if (todo.isDone === true) {
        total += 1
      }
      return total
    }, 0)
    // 总数
    const totalToDos = todos.length
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input
              type="checkbox"
              onChange={this.handleCheckAll}
              checked={
                doneToDos === totalToDos && totalToDos !== 0 ? true : false
              }
            />
          </label>
          <span>
            <span>已完成{doneToDos}</span> / 全部{totalToDos}
          </span>
          <button
            className="btn btn-danger"
            onClick={this.props.deleteDonedTasks}
          >
            清除已完成任务
          </button>
        </div>
      </div>
    )
  }
}
