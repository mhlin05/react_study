import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {
  state = {
    // 用户信息
    userInfo: [],
    // 是否为第一次打开页面
    isFirst: true,
    // 标识是否处于加载中
    isLoading: false,
    // 存储请求相关的错误信息
    err: ''
  }
  componentDidMount() {
    this.token = PubSub.subscribe('updateList', (msg, data) => {
      this.setState({ ...data })
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { userInfo, isFirst, isLoading, err } = this.state
    return (
      <div>
        <div className="row">
          <div className="card">
            {isFirst ? (
              <h2>欢迎</h2>
            ) : isLoading ? (
              <h2>加载中</h2>
            ) : err ? (
              <h2>{err}</h2>
            ) : (
              userInfo.map((user) => {
                return (
                  <Item
                    avatar_url={user.avatar_url}
                    html_url={user.html_url}
                    login={user.login}
                    key={user.id}
                  />
                )
              })
            )}
          </div>
        </div>
      </div>
    )
  }
}
