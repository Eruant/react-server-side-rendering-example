(function (React,ReactDOM) {
'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

const element = type =>
  React.createElement.bind(null, type);

const html = element('html');
const head = element('head');
const meta = element('meta');
const body = element('body');
const title = element('title');
const div = element('div');
const h1 = element('h1');
const p = element('p');
const script = element('script');
const button = element('button');

const handleClick = event =>
  console.log('Hello click event');

var template = ({title: title$$1}) =>
  div(
    null,
    h1(null, title$$1),
    button({onClick: handleClick}, 'click me')
  );

const setup = () => {
  window.document.removeEventListener('DOMContentLoaded', setup);

  ReactDOM.render(
    React.createElement(template, window.state),
    document.querySelector('.app')
  );
};

window.document.addEventListener('DOMContentLoaded', setup);

}(React,ReactDOM));
