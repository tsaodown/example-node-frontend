// @flow

import React from 'react'

type Props = {
  start: number,
  increment: number
}

export default class TestComponent extends React.Component {
  props: Props

  state: {
    likesCount: number
  }
  onLike: () => void

  constructor (props: Props) {
    super(props)
    this.state = {
      likesCount: props.start
    }
    this.onLike = this.onLike.bind(this)
  }

  onLike () {
    let newLikesCount = this.state.likesCount + this.props.increment
    this.setState({
      likesCount: newLikesCount
    })
  }

  render () {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    )
  }
}
