import {div, h1, button} from './elements.mjs'

const handleClick = event =>
  console.log('Hello click event')

export default ({title}) =>
  div(
    null,
    h1(null, title),
    button({onClick: handleClick}, 'click me')
  )
