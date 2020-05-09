const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {

        const {pet} = this.props;

        return (
            <Default user={this.props.loggedIn}>
                <div className="callout large primary white">
                    <div className="text-center">
                        <h1><em>Thinking about adopting yet?</em></h1>
                        <br/>
                        <a href="#" className="button large primary learn-more align-left">Contact us. No, Seriously.</a>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-x align-center grid-padding-x">
                        <div className="cell medium-8">
                        {this.props.message ? <div className="grid-x align-center" style={{color: 'rgb(33, 185, 155)'}}><h5>{this.props.message}</h5></div> : null}
                            <div className="grid-x align-center">
                                <h2 style={{color: 'rgb(138, 64, 151)'}}><strong>{pet.name}</strong></h2>
                            </div>
                            <hr/>
                            <br/>
                            <img src={pet.photos} alt="picture of pet" className="thumbnail"/>
                            <div className="grid-x align-center">
                                <div className="large-12 medium-12 cell"><p><strong>Bio:</strong> {pet.description}</p></div>
                                    <div className="cell large-4 medium-4">
                                        <p><strong>Breed(s):</strong> {pet.breeds}</p>
                                        <p><strong>Age:</strong> {pet.age} year(s) old</p>
                                    </div>
                                    <div className="cell large-4 medium-4">
                                        <p><strong>Color(s):</strong> {pet.colors}</p>
                                        <p><strong>Sex:</strong> {pet.sex}</p>
                                        <p><strong>Added on:</strong> {pet.createdAt.toLocaleDateString('en-US')}</p>
                                    </div>
                            </div>   
                            <div className="grid-container">
                                <div className="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3 callout secondary">
                                    <div className="cell medium-4">
                                        <p><strong>Spayed or Neutered:</strong> {pet.spayedOrNeutered ? 'Yes' : 'No'}</p>
                                    </div>
                                    <div className="cell medium-4">
                                        <p><strong>House-trained:</strong> House-trained: {pet.house_trained ? 'Yes' : 'No'}</p>
                                    </div>
                                    <div className="cell medium-4">
                                        <p><strong>Special Needs:</strong> {pet.special_needs ? 'Yes' : 'No'}</p>
                                    </div>
                                    <div className="cell medium-4">
                                        <p><strong>Shots Current:</strong> {pet.shots_current ? 'Yes' : 'No'}</p>
                                    </div>
                                    <div className="cell medium-4">
                                        <p><strong>Good With Children:</strong> {pet.children ? 'Yes' : 'No'}</p>
                                    </div>
                                    <div className="cell medium-4">
                                        <p><strong>Good With Dogs:</strong> {pet.dogs ? 'Yes' : 'No'}</p>
                                    </div>
                                    <div className="cell medium-4">
                                        <p><strong>Good With Cats:</strong> {pet.cats ? 'Yes' : 'No'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-x grid-padding-x align-center">
                                <div className="large-2 medium-2 cell">
                                    <form action={`/lostones/pets/${pet._id}?_method=DELETE`} method="POST"><input className="button alert" type="submit" value="Delete"/></form>
                                </div>
                                <div className="large-2 medium-2 cell">
                                    <form action={`/lostones/pets/${pet._id}/edit`}><input type="submit" className="button primary" value="Update"/></form>
                                </div>
                                {this.props.loggedIn ? <div className="large-2 medium-2 cell">
                                    <form action={`/lostones/pets/${pet._id}/favorite`} method="POST"><input type="submit" className="button warning" value="Add to Favorites"/></form>
                                </div> : null}
                            </div>   
                        </div>
                    </div>
                </div>
                <br/>
            </Default>

        )
    }
}

module.exports = Show;