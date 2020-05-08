const React = require('react');
const Default = require('./Default');

class petIndex extends React.Component {
    render() {

        const {pets} = this.props;
        const elements = pets.map((pet, index) => {
            return (
                <div className="cell medium-4">
                    <div className="callout text-center" data-equalizer-watch>
                        <p><img src={pet.photos} alt="Picture of pet" className="thumbnail"/></p>
                        <p className="lead">{pet.name}</p>
                        <p className="subheader">About: {pet.description}</p>
                        <p className="subheader">Age: {pet.age} years old</p>
                        <a className="button primary" href={`http://localhost:3000/lostones/pets/${pet._id}`}>More Info</a>
                    </div>
                </div>
            )
        })


        return (
            <Default user={this.props.loggedIn}>
                <div className="callout large primary">
                    <div className="text-center">
                        <h1>Featured pets</h1>
                        <h2 className="subheader">blah blah blah</h2>
                    </div>
                </div>
                <article className="grid-container" data-equalizer>
                    <div className="grid-x grid-margin-x grid-margin-y small-up-1 medium-up-2 large-up-3">
                        {elements}
                    </div>
                </article>
            </Default>

        )
    }
}

module.exports = petIndex;