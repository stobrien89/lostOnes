const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {

        const {pets} = this.props;
        const elements = pets.map((pet, index) => {
            return (
                <div className="cell medium-4">
                    <div className="callout" data-equalizer-watch>
                        <p><img src={pet.photos} alt="Picture of pet" className="thumbnail"/></p>
                        <p className="lead">{pet.name}</p>
                        <p className="subheader">Age: {pet.description} years</p>
                        <p className="subheader">Age: {pet.age} years old</p>
                        <a className="button primary" href={`http://localhost:3000/lostones/pets/${pet._id}`}>More Info</a>
                    </div>
                </div>
            )
        })


        return (
            <Default>
                <div className="callout large primary" data-equalizer>
                    <div className="text-center">
                        <h1>Featured pets</h1>
                        <h2 className="subheader">blah blah blah</h2>
                    </div>
                </div>
                <article className="grid-container">
                    <div className="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3">
                        {elements}
                    </div>
                </article>
            </Default>

        )
    }
}

module.exports = Index;