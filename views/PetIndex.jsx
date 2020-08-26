const React = require("react");
const Default = require("./Default");

class petIndex extends React.Component {
  render() {
    const { pets } = this.props;
    const elements = pets.map((pet, index) => {
      return (
        <div className="cell medium-4">
          <div className="callout text-center" data-equalizer-watch>
            <div style={{ overflow: "hidden" }}>
              <p>
                <img
                  src={pet.photos}
                  alt="Picture of pet"
                  className="thumbnail"
                />
              </p>
            </div>
            <p className="lead">{pet.name}</p>
            <p className="subheader">
              <strong>Breed:</strong> {pet.breeds}
            </p>
            <p className="subheader">
              <strong>Age:</strong> {pet.age} years old
            </p>
            <a className="button primary" href={`/lostones/pets/${pet._id}`}>
              More Info
            </a>
          </div>
        </div>
      );
    });

    return (
      <Default user={this.props.loggedIn}>
        <div className="callout large primary white">
          <div className="text-center">
            <h2>
              Log in or sign up to save your favorites!
              <br />
              <em>Don't have an account? </em>
            </h2>
            <br />
            <a
              href="/lostones/pets"
              className="button large primary learn-more align-left"
            >
              Sign up now
            </a>
          </div>
        </div>
        <article className="grid-container" data-equalizer>
          <div className="grid-x grid-margin-x grid-margin-y small-up-1 medium-up-2 large-up-3">
            {elements}
          </div>
        </article>
      </Default>
    );
  }
}

module.exports = petIndex;
