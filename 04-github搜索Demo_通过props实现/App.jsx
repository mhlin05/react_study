import React, { Component } from 'react'
import List from './components/List/List'
import Search from './components/Search/Search'

export default class App extends Component {
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
  // 更新用户信息
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    // 解构出state中的属性
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}></Search>
        <List {...this.state}></List>
      </div>
    )
  }
}
