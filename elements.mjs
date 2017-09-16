import React from 'react'

export const element = type =>
  React.createElement.bind(null, type)

export const html = element('html')
export const head = element('head')
export const meta = element('meta')
export const body = element('body')
export const title = element('title')
export const div = element('div')
export const h1 = element('h1')
export const p = element('p')
export const script = element('script')
export const button = element('button')
