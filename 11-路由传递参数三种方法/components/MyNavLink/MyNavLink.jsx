import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // 原始写法
    // 但是其实 NavLink有children属性可以指定标签体内容
    // 可以简约写法
    // console.log(this.props)
    // const { destination } = this.props
    // return (
    //   <NavLink
    //     activeClassName="demo"
    //     className="list-group-item"
    //     to={destination}
    //   >
    //     {this.props.children}
    //   </NavLink>
    // )

    return (
      <NavLink
        activeClassName="demo"
        className="list-group-item"
        {...this.props}
      />
    )
  }
}
