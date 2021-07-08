import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail/Detail'
export default class Message extends Component {
  state = {
    msgArr: [
      { id: '1', title: '消息1' },
      { id: '2', title: '消息2' },
      { id: '3', title: '消息3' },
      { id: '4', title: '消息4' }
    ]
  }
  render() {
    const { msgArr } = this.state
    return (
      <div>
        <ul>
          {msgArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route>
      </div>
    )
  }
}
