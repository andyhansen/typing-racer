import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import TypingRacer from './components/TypingRacer'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<TypingRacer />, document.getElementById('root'))
registerServiceWorker()
