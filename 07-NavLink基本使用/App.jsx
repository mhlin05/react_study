import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
// 路由组件
import Home from './pages/Home/Home'
import About from './pages/About/About'
// 一般组件
import Header from './components/Header/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html 靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}

              {/* react中靠路由链接切换组件--编写路由链接 */}
              <NavLink
                activeClassName="demo"
                className="list-group-item"
                to="/about"
              >
                about
              </NavLink>
              <NavLink
                activeClassName="demo"
                className="list-group-item"
                to="/home"
              >
                home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
