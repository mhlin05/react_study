import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  // props 验证
  static propTypes = {
    addToDoItem: PropTypes.func.isRequired
  }
  // 处理键盘事件
  // enter后添加一个新todo
  handleKeyUp = (event) => {
    // 获得按键和目标
    const { keyCode, target } = event
    // 如果不是回车 则return
    if (keyCode !== 13) return
    // 输入不能为空
    if (target.value.trim() === '') {
      // 加入trim可以防止输入空格情况
      alert('输入不能为空')
      return
    }
    // 按下回车情况下
    // 准备新的todo对象
    const todoItem = { id: nanoid(), name: target.value, isDone: false }
    // 更新父组件值
    this.props.addToDoItem(todoItem)
    // 清空输入框
    target.value = ''
    // console.log(target.value)
  }
  render() {
    return (
      <div>
        <div className="todo-header">
          <input
            onKeyUp={this.handleKeyUp}
            type="text"
            placeholder="请输入你的任务名称，按回车键确认"
          />
        </div>
      </div>
    )
  }
}
