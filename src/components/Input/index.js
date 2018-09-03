import React from 'react'

import './Input.scss'

export default function ({ onChange, value }) {
  return (
    <input className='challenge-input' onChange={onChange} value={value} />
  )
}
