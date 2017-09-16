import {html, meta, head, body, title, div, script} from './elements.mjs'

export default ({pageTitle, markup, data}) =>
  html(
    null,
    head(
      null,
      meta({charset: 'utf-8'}),
      title(null, pageTitle)
    ),
    body(
      null,
      div({
        className: 'app',
        dangerouslySetInnerHTML: {
          __html: markup
        }
      }),
      script({src: 'https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js'}),
      script({src: 'https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js'}),
      script({
        dangerouslySetInnerHTML: {
          __html: `window.state = ${JSON.stringify(data)}` // potential XSS here if you can't trust data
        }
      }),
      script({src: './bundle.js'})
    )
  )
