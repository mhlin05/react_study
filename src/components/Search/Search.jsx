import axios from 'axios'
import PubSub from 'pubsub-js'

import React, { Component } from 'react'

export default class Search extends Component {
  // 点击查询
  handleSearch = () => {
    // 解构出要查询的值
    const {
      input1: { value: searchContent }
    } = this
    // 点击查询后 更新状态 进入loading
    PubSub.publish('updateList', { isLoading: true, isFirst: false })

    axios
      .get(`http://localhost:3000/api1/search/users2?q=${searchContent}`)
      .then(
        (Response) => {
          // 获取数据成功 更新List

          PubSub.publish('updateList', {
            isLoading: false,
            userInfo: Response.data.items
          })
        },
        (error) => {
          // 获取数据失败 更新List
          PubSub.publish('updateList', {
            isLoading: false,
            err: error.message
          })
        }
      )
  }
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              ref={(c) => (this.input1 = c)}
              type="text"
              placeholder="enter the name you search"
            />
            &nbsp;<button onClick={this.handleSearch}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
