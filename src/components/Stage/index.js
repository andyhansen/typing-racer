import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Stage.scss'

class Stage extends Component {
  static propTypes = {
    typingChallenge: PropTypes.string.isRequired,
  }

  static defaultProps = {
    typingChallenge: "It's a goopy bunch of text for you to start typing. How quickly can you do it!!",
  }

  render() {
    return (
      <div className='typing-stage'>
        <h2>Enter the text below as fast as you can.</h2>
        <p className='challenge-text'>{ this.props.typingChallenge }</p>
      </div>
    )
  }
}

export default Stage
