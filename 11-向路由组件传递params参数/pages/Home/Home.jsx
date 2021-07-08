import React, { Component } from 'react'
import News from './News/News'
import Message from './Message/Message'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            {/* <a className="list-group-item" href="./home-news.html">
              News
            </a> */}
            <NavLink className="list-group-item" to="/home/news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="/home/message">
              Message
            </NavLink>
          </li>
        </ul>
        {/* 因为switch只匹配第一个 所以可以增强效率 */}
        <Switch>
          <Route path="/home/message" component={Message}></Route>
          <Route path="/home/news" component={News}></Route>
          <Redirect to="home/news"></Redirect>
        </Switch>
      </div>
    )
  }
}
