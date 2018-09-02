import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Stage.scss'

import Input from '../Input'

class Stage extends Component {
  static propTypes = {
    typingChallenge: PropTypes.string.isRequired,
  }

  state = {
    currentInput: '',
    correctCharacters: 0,
    incorrectCharacters: 0,
  }

  updatedInput = (event) => {
    const { typingChallenge } = this.props
    const value = event.target.value
    const minLength = Math.min(typingChallenge.length, value.length)

    let correctCharacters = 0
    let incorrectCharacters = 0
    let foundIncorrectCharacters = false
    for (let i = 0; i < minLength; i++) {
      if (
        value.charAt(i) === typingChallenge.charAt(i)
        && !foundIncorrectCharacters
      ) {
        correctCharacters++
      } else if (value.charAt(i) !== typingChallenge.charAt(i)) {
        incorrectCharacters++
        foundIncorrectCharacters = true
      }
    }

    this.setState({ currentInput: value, correctCharacters, incorrectCharacters })
  }

  getCorrectInput = () => {
    const { typingChallenge } = this.props
    const { correctCharacters } = this.state
    return typingChallenge.substr(0, correctCharacters)
  }

  getIncorrectInput = () => {
    const { typingChallenge } = this.props
    const { correctCharacters, incorrectCharacters } = this.state
    return typingChallenge.substr(correctCharacters, incorrectCharacters)
  }

  getRemainingInput = () => {
    const { typingChallenge } = this.props
    const { correctCharacters, incorrectCharacters } = this.state
    return typingChallenge.substr(correctCharacters + incorrectCharacters)
  }

  render() {

    return (
      <div className='typing-stage'>
        <h2>Enter the text below as fast as you can.</h2>
        <p className='challenge-text'>
          <span className='correct-input'>{ this.getCorrectInput() }</span>
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
