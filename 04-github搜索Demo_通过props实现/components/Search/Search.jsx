import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
  // 点击查询
  handleSearch = async () => {
    // 解构出要查询的值
    const {
      input1: { value: searchContent }
    } = this
    // 点击查询后 更新状态 进入loading
    this.props.updateAppState({ isLoading: true, isFirst: false })
    // 发送请求并解构出数据
    // const { data } = await axios.get(
    //   `http://localhost:3000/api1/search/users2?q=${searchContent}`
    // )
    // console.log(data)
    axios
      .get(`http://localhost:3000/api1/search/users2?q=${searchContent}`)
      .then(
        (Response) => {
          // console.log(Response)
          this.props.updateAppState({
            isLoading: false,
            userInfo: Response.data.items
          })
        },
        (error) => {
          this.props.updateAppState({ isLoading: false, err: error.message })
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
