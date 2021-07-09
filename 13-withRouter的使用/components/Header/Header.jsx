import React, { Component } from 'react'
import { withRouter } from 'react-router'
class Header extends Component {
  back = () => {
    // console.log(this.props)
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
    this.props.history.go(-2)
  }
  render() {
    return (
      <div>
        <h2>
          React Router Demo
          <button onClick={this.back}>回退</button>
          <button onClick={this.forward}>前进</button>
          <button onClick={this.go}>go</button>
        </h2>
      </div>
    )
  }
}
// withRouter让一般组件 能使用路由组件的api
// withRouter组件的返回值是一个新组件
export default withRouter(Header)
