const React = require('react');
const Default = require('./Default');

class FavoriteIndex extends React.Component {
    render() {

        const {favoritePets} = this.props;
        const elements = favoritePets.map((pet, index) => {
            return (
                <div className="cell medium-4">
                    <div className="callout text-center" data-equalizer-watch>
                        <p><img src={pet.photos} alt="Picture of pet" className="thumbnail"/></p>
                        <p className="lead">{pet.name}</p>
                        <p className="subheader">About: {pet.description}</p>
                        <p className="subheader">Age: {pet.age} years old</p>
                        <div className="grid-x">
                            <div className="cell large-6 medium-6 align-center"><a className="button primary" href={`http://localhost:3000/lostones/pets/${pet._id}`}>More Info</a></div>
                            <form className="cell large-6 medium-6 align-center" action={`/lostones/favorites/${pet._id}`} method="POST"><input type="submit" className="button warning" value="Remove"/></form>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <Default user={this.props.loggedIn}>
                <div className="callout large primary white">
                    <div className="text-center">
                        <h1>Check out your favorites<br/>
                        <em>But don't just sit there!</em></h1>
                        <br/>
                        <a href="/lostones/pets" className="button large primary learn-more align-left">Adopt Now</a>
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

module.exports = FavoriteIndex;

