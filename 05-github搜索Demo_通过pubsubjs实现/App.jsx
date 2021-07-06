import React, { Component } from 'react'
import List from './components/List/List'
import Search from './components/Search/Search'

export default class App extends Component {
  render() {
    // 解构出state中的属性
    return (
      <div className="container">
        <Search></Search>
        <List></List>
      </div>
    )
  }
}
