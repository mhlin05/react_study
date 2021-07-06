import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { avatar_url, html_url, login } = this.props
    return (
      <div style={{ width: '40%' }}>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img
            src={avatar_url}
            style={{ width: '100px' }}
            alt="es-lint want to get"
          />
        </a>
        <p className="card-text">{login}</p>
      </div>
    )
  }
}
