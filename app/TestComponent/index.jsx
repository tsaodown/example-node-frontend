// @flow

import React from 'react'

import classnames from 'classnames'
import './index.scss'

type Props = {
  start: number,
  increment: number
}

class TestComponent extends React.Component {
  props: Props
  static defaultProps: {
    start: number,
    increment: number
  }

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
    let classes = classnames({
      'odd': this.state.likesCount % 2 === 1,
      'even': this.state.likesCount % 2 === 0,
      'ten': this.state.likesCount % 10 === 0,
      'fives': this.state.likesCount % 5 === 0 && this.state.likesCount % 10 !== 0
    })

    return (
      <div>
        Likes : <span className={classes}>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    )
  }
}

TestComponent.defaultProps = {
  start: 0,
  increment: 1
}

export default TestComponent
