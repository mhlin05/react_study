import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../Item/Item'
export default class List extends Component {
  // props验证
  static propTypes = {
    todos: PropTypes.array.isRequired,
    statusChange: PropTypes.func.isRequired,
    deleteToDoItem: PropTypes.func.isRequired
  }

  render() {
    const { todos, statusChange, deleteToDoItem } = this.props
    return (
      <div>
        <ul className="todo-main">
          {todos.map((todo) => {
            return (
              <Item
                key={todo.id}
                data={todo}
                statusChange={statusChange}
                deleteToDoItem={deleteToDoItem}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
