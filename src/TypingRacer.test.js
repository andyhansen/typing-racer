import React from 'react';
import ReactDOM from 'react-dom';
import TypingRacer from './TypingRacer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypingRacer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
