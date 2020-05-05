const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {

        const {pet} = this.props;

        return (
            <Default>
                <h1>Show Heading</h1>
                <form action={`/lostones/pets/${pet.id}?_method=DELETE`} method="POST"><input type="submit" value="Delete"/></form>
            </Default>

        )
    }
}

module.exports = Show;