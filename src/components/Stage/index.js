import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TypingChallengeService from '../../services/TypingChallengeService'

import './Stage.scss'
import Input from '../Input'

class Stage extends Component {
  static propTypes = {
    typingChallenge: PropTypes.string.isRequired,
    onChallengeComplete: PropTypes.func.isRequired,
  }

  state = {
    currentInput: '',
    correctCharacters: 0,
    incorrectCharacters: 0,
    challengeService: new TypingChallengeService()
  }

  static getDerivedStateFromProps(props, state) {
    state.challengeService.setChallenge(props.typingChallenge)
    return null
  }

  updatedInput = (event) => {
    const { challengeService } = this.state 
    const value = event.target.value

    const isWordComplete = challengeService.updateProgress(value)
    if (!isWordComplete) {
      this.setState({ currentInput: value })
    } else {
      this.setState({ currentInput: '' })
    }
  }

  resetChallenge = () => {
    this.setState({ currentInput: '' })
    this.props.onChallengeComplete()
  }

  render () {
    const { challengeService } = this.state

    return (
      <div className='typing-stage'>
        <h2>Enter the text below as fast as you can.</h2>
        <p className='challenge-text'>
          <span className='correct-input'>{ challengeService.getCorrectInput() }</span>
          <span className='incorrect-input'>{ challengeService.getIncorrectInput() }</span>
          <span>{ challengeService.getRemainingInput() }</span>
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
