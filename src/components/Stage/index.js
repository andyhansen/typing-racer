import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Stage.scss'

import Input from '../Input'

class Stage extends Component {
  static propTypes = {
    typingChallenge: PropTypes.string.isRequired,
  }

  static defaultProps = {
    typingChallenge: "It's a bunch of text for you to start typing. How quickly can you do it!!",
  }

  state = {
    currentInput: '',
    successfulCharacters: 0,
    incorrectCharacters: 0,
  }

  updatedInput = (event) => {
    const { typingChallenge } = this.props
    const value = event.target.value
    const minLength = Math.min(typingChallenge.length, value.length)

    let successfulCharacters = 0
    let incorrectCharacters = 0
    let foundIncorrectCharacters = false
    for (let i = 0; i < minLength; i++) {
      if (
        value.charAt(i) === typingChallenge.charAt(i)
        && !foundIncorrectCharacters
      ) {
        successfulCharacters++
      } else if (value.charAt(i) !== typingChallenge.charAt(i)) {
        incorrectCharacters++
        foundIncorrectCharacters = true
      }
    }

    this.setState({ currentInput: value, successfulCharacters, incorrectCharacters })
  }

  getSuccessfulInput = () => {
    const { typingChallenge } = this.props
    const { successfulCharacters } = this.state
    return typingChallenge.substr(0, successfulCharacters)
  }

  getIncorrectInput = () => {
    const { typingChallenge } = this.props
    const { successfulCharacters, incorrectCharacters } = this.state
    return typingChallenge.substr(successfulCharacters, incorrectCharacters)
  }

  getRemainingInput = () => {
    const { typingChallenge } = this.props
    const { successfulCharacters, incorrectCharacters } = this.state
    return typingChallenge.substr(successfulCharacters + incorrectCharacters)
  }

  render() {

    return (
      <div className='typing-stage'>
        <h2>Enter the text below as fast as you can.</h2>
        <p className='challenge-text'>
          <span className='successful-input'>{ this.getSuccessfulInput() }</span>
          <span className='incorrect-input'>{ this.getIncorrectInput() }</span>
          <span>{ this.getRemainingInput() }</span>
        </p>
        <Input
          onChange={this.updatedInput}
          value={this.state.currentInput}
        />
      </div>
    )
  }
}

export default Stage
