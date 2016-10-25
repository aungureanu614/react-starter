var Person = require('./person');
var React = require('react');

var PersonList = React.createClass({
    render: function() {
        var people = [];
        for (var i=0; i<5; i++) {
            people.push(<Person />);
        }
        return (
            <div className="person-list">
                {people}
            </div>
        );
    }
});

module.exports = PersonList;