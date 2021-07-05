import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Item extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    statusChange: PropTypes.func.isRequired,
    deleteToDoItem: PropTypes.func.isRequired
  }

  state = {
    // 鼠标是否移入
    mouse: false
  }
  // 鼠标移入移出处理函数
  // 注释掉的代码的执行顺序不太懂
  handleMouseMove = (flag) => {
    // console.log('this is flag', flag)
    return () => {
      // console.log(this.state.mouse)
      this.setState({ mouse: flag })
      // console.log(this.state.mouse)
    }
  }
  // 处理复选框勾选
  handleCheck = (event) => {
    const { data } = this.props
    // 更新父组件状态
    this.props.statusChange(data.id, event.target.checked)
  }
  // 点击删除todo
  handleClick = () => {
    const { data } = this.props
    if (window.confirm('确定删除吗？')) {
      this.props.deleteToDoItem(data.id)
    }
  }
  render() {
    // 传入的一个todo
    const { data } = this.props

    return (
      <div>
        <li
          onMouseEnter={this.handleMouseMove(true)}
          onMouseLeave={this.handleMouseMove(false)}
        >
          <label>
            <input
              type="checkbox"
              checked={data.isDone}
              onChange={this.handleCheck}
            />
            <span>{data.name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{ display: this.state.mouse ? 'block' : 'none' }}
            onClick={this.handleClick}
          >
            删除
          </button>
        </li>
      </div>
    )
  }
}
