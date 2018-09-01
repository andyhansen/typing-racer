import React, { Component } from 'react';

import './TypingRacer.scss';

import Header from '../Header'
import Stage from '../Stage'

class TypingRacer extends Component {
  render() {
    return (
      <div id="typing-racer">
        <Header />
        <Stage />
      </div>
    );
  }
}

export default TypingRacer;
