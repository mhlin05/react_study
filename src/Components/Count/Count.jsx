import React, { Component } from 'react'

export default class Count extends Component {
  increment = () => {}
  decrement = () => {}
  incrementIfOdd = () => {}
  incrementAsync = () => {}
  render() {
    return (
      <div>
        <h1>当前求和为：</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数的时候++++</button>
        <button onClick={this.incrementAsync}>异步++++++</button>
      </div>
    )
  }
}
