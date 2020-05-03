const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {


        return (
            <Default>
                <h1>New Heading</h1>
            </Default>
        )
    }
}

module.exports = New;