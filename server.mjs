import http from 'http'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import layout from './layout.mjs'
import template from './template.mjs'

const port = 3000

const responseHandler = (request, response) => {
  switch (request.url) {
    case '/':
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')

      const data = {
        title: 'Hello server side rendering'
      }

      const app = ReactDOMServer.renderToString(
        React.createElement(template, data)
      )

      const html = ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          layout,
          {
            data,
            pageTitle: data.title,
            markup: app
          }
        )
      )

      response.end('<!doctype html>' + html)
      return
    case '/bundle.js':
      fs.readFile('./bundle.js', (error, data) => {
        if (error) {
          response.statusCode = 404
          response.setHeader('Content-Type', 'text/plain')
          response.end('Page not found')
        }
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript')
        response.end(data)
      })
      return
  }

  response.statusCode = 404
  response.setHeader('Content-Type', 'text/plain')
  response.end('Page not found')
}

const server = http.createServer(responseHandler)

server.listen(port, () => {
  console.log(`Server started: localhost:${port}`)
})
