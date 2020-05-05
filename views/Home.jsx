const React = require('react');
const Default = require('./Default');

class Home extends React.Component {
    render() {

        return(
            <Default>
             <h1>landing page heading</h1>

            </Default>
        )
    }
}

module.exports = Home;