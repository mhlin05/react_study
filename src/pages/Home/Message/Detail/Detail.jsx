import React, { Component } from 'react'
import qs from 'querystring'

// name=tom&age=18 key=value&key=value
// 这个结构叫 urlencoded结构
// let obj = { name: 'tom', age: 18 }
// console.log(qs.stringify(obj)) //name=tom&age=18

// let str = 'carName=奔驰&price=199'
// console.log(qs.parse(str)) //{carName: "奔驰", price: "199"}
export default class Detail extends Component {
  content = [
    { id: '1', content: '你好01' },
    { id: '2', content: '你好02' },
    { id: '3', content: '你好03' },
    { id: '4', content: '你好04' }
  ]
  render() {
    // 接收params参数
    // const { id, title } = this.props.match.params

    // 接收search参数
    console.log(this.props)
    return (
      <div>
        <ul>
          {/* <li>id:{id}</li>
          <li>title:{title}</li>
          <li>
            content:
            {
              this.content.find((contentObj) => {
                return contentObj.id === id
              }).content
            }
          </li> */}
        </ul>
      </div>
    )
  }
}
