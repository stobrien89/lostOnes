const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {

        const {pet} = this.props;

        // const attributes = Object.entries(pet).map((valArr, index, arr) => {
        //     if (typeof valArr[1] === Boolean) {
        //         return (

        //         )
        //     }
        // })

        return (
            <Default>
                
            

                <div className="grid-container">
                    <div className="grid-x align-center grid-padding-x">
                        <div className="cell medium-8">
                            <div className="grid-x grid-padding-x align-center">
                                <h4>{pet.name}</h4>
                            </div>
                            <img src={pet.photos} alt="picture of pet" className="thumbnail"/>
                            <div className="grid-x grid-padding-x align-center">
                                <div className="large-6 medium-4 cell">
                                    <h6>Bio:</h6>
                                        <p className="subheader">{pet.description}</p>
                                </div>
                            </div>   
                            <div className="grid-x grid-padding-x align-center">
                                <div className="large-2 medium-2 cell">
                                    <form action={`/lostones/pets/${pet._id}?_method=DELETE`} method="POST"><input className="button primary" type="submit" value="Delete"/></form>
                                </div>
                                <div className="large-2 medium-2 cell">
                                    <form action={`/lostones/pets/${pet._id}/edit`}><input type="submit" className="button primary" value="Update"/></form>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </Default>

        )
    }
}

module.exports = Show;