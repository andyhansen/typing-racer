import React, { Component } from 'react';

import './TypingRacer.scss';

import Header from '../Header'
import Stage from '../Stage'

import challenges from '../../challenges'

class TypingRacer extends Component {
  getRandomChallenge = () => {
    return challenges[Math.floor(Math.random()*challenges.length)]
  }

  render() {
    return (
      <div id="typing-racer">
        <Header />
        <Stage typingChallenge={this.getRandomChallenge()}/>
      </div>
    );
  }
}

export default TypingRacer;
