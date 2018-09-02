import React, { Component } from 'react';

import './TypingRacer.scss';

import Header from '../Header'
import Stage from '../Stage'

import Challenges from '../../challenges'

class TypingRacer extends Component {
  state = {
    currentChallenge: Challenges.getRandomChallenge(),
  }

  onChallengeComplete = () => {
    this.setState({
      currentChallenge: Challenges.getRandomChallenge()
    })
  }

  render() {
    return (
      <div id="typing-racer">
        <Header />
        <Stage 
          typingChallenge={this.state.currentChallenge}
          onChallengeComplete={this.onChallengeComplete}
        />
      </div>
    );
  }
}

export default TypingRacer;
