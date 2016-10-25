require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

var PersonList = require('./components/person-list');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<PersonList />, document.getElementById('app'));
});
