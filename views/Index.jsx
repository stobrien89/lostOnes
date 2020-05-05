const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {

        const {pets} = this.props;
        const elements = pets.map((pet, index) => {
            return (
                <h2><a href={`http://localhost:3000/lostones/pets/${pet._id}`}>{pet.name}</a></h2>
                
            )
        })


        return (
            <Default>
                <h1>Index heading</h1>
                {elements}
            </Default>

        )
    }
}

module.exports = Index;