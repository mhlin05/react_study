import React, { Component } from 'react'
import Axios from 'axios'
export default class App extends Component {
  getStudentData = () => {
    Axios.get('http://localhost:3000/api1/students').then(
      (Response) => {
        console.log('成功了', Response.data)
      },
      (error) => {
        console.log('失败了')
      }
    )
    // const { data } = await Axios.get('http://localhost:3000/students')
    // console.log(data)
  }
  getCarData = () => {
    Axios.get('http://localhost:3000/api2/cars').then(
      (Response) => {
        console.log('成功了', Response.data)
      },
      (error) => {
        console.log('失败了')
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我学生获取</button>
        <button onClick={this.getCarData}>点我汽车获取</button>
      </div>
    )
  }
}
