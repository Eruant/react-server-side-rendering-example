import React from 'react'
import ReactDOM from 'react-dom'

import template from './template.mjs'

const setup = () => {
  window.document.removeEventListener('DOMContentLoaded', setup)

  ReactDOM.render(
    React.createElement(template, window.state),
    document.querySelector('.app')
  )
}

window.document.addEventListener('DOMContentLoaded', setup)
