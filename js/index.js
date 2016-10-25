require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

var Person = require('./components/person');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Person />, document.getElementById('app'));
});
