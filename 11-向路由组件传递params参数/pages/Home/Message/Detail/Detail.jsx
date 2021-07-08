import React, { Component } from 'react'

export default class Detail extends Component {
  content = [
    { id: '1', content: '你好01' },
    { id: '2', content: '你好02' },
    { id: '3', content: '你好03' },
    { id: '4', content: '你好04' }
  ]
  render() {
    // console.log(this.props)
    // 接收params参数
    const {
      params: { id, title }
    } = this.props.match
    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>
            content:
            {
              this.content.find((contentObj) => {
                return contentObj.id === id
              }).content
            }
          </li>
        </ul>
      </div>
    )
  }
}
