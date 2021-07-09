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

  replaceShow = (id, title) => {
    return () => {
      // replace跳转+params参数
      // this.props.history.replace(`/home/message/detail/${id}/${title}`)
      // replace跳转+search参数
      // this.props.history.replace(
      //   `/home/message/detail/?id=${id}&title=${title}`
      // )
      // replace跳转+state参数
      this.props.history.replace(`/home/message/detail/`, { id, title })
    }
  }

  pushShow = (id, title) => {
    return () => {
      // push跳转+params参数
      // this.props.history.push(`/home/message/detail/${id}/${title}`)
      // push跳转+search参数
      // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
      // push跳转+state参数
      this.props.history.push(`/home/message/detail/`, { id, title })
    }
  }
  render() {
    const { msgArr } = this.state
    return (
      <div>
        <ul>
          {msgArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                <ul>消息{msgObj.id}</ul>

                <button onClick={this.pushShow(msgObj.id, msgObj.title)}>
                  push
                </button>
                <button onClick={this.replaceShow(msgObj.id, msgObj.title)}>
                  replace
                </button>
              </li>
            )
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route> */}
        {/* 声明接收search参数 */}
        {/* search参数无需声明接收 正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        {/* state参数无需声明接收 正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}
