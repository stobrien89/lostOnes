const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        let {_id, name, description, type, photos, breeds, colors, age, sex, size, spayedOrNeutered, house_trained, special_needs, shots_current, children, dogs, cats} = this.props.pet;

        return ( 
            <Default user={this.props.loggedIn}>
                
                <div className="callout large primary">
                    <div className="text-center">
                        <h1>Featured pets</h1>
                        <h2 className="subheader">blah blah blah</h2>
                    </div>
                </div>
                <h1>Edit Heading</h1>
                <div className="grid-container">
                            <h1>Edit Heading</h1>
                            <form className="grid-x grid-padding-x grid-margin-x" action={`/pets/${_id}?_method=PUT`} method="POST">
                                  <div className="cell small-4">Name: <input type="text" name="name" defaultValue={name}/></div>
                                  <div className="cell small-4">Type: <select className="cell small-4" name="type" defaultValue={type}>
                                            <option value="dog">Dog</option>
                                            <option value="cat">Cat</option>
                                        </select>
                                    </div>
                                   <div className="cell small-4">Breed: <input className="cell small-4" type="text" name="breeds" defaultValue={breeds}/></div> 
                                <div className="cell large-12">Bio:<textarea name="description" id="" cols="30" rows="5" defaultValue={description}></textarea></div>
                                <div className="cell small-4">Photo: <input type="text" name="photos" defaultValue={photos}/></div>
                                <div className="cell small-4">Color: <input type="text" name="colors" defaultValue={colors}/></div>
                                <div className="cell small-4">Age: <input type="number" max="25" min="1" name="age" defaultValue={age}/></div>
                                <div className="cell small-6">
                                    Sex: <select name="sex" defaultValue={sex}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="prefer not to say">Prefer Not To Say</option>
                                    </select>
                                </div>
                                <div className="cell small-6">
                                    Size: <select name="size" defaultValue={size}>
                                        <option value="small">Small (5-25lbs)</option>
                                        <option value="medium">Medium (26-40lbs)</option>
                                        <option value="extra-medium">Extra-Medium (41-55lbs)</option>
                                        <option value="large">Large (56-85lbs)</option>
                                        <option value="extra-large">Extra-Large (86-150lbs)</option>
                                    </select>
                                    </div>
                                <div className="cell medium-3">Spayed or Neutered: <fieldset name="spayedOrNeutered">
                                                        <input name="spayedOrNeutered" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                        <input name="spayedOrNeutered" type="radio" value="no"/><label htmlFor="no">No</label>
                                                    </fieldset>
                                </div>
                                <div className="cell medium-3">House-trained: <fieldset name="house_trained">
                                                        <input name="house_trained" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                        <input name="house_trained" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                                </div>
                                <div className="cell medium-3">Special Needs: <fieldset name="special_needs">
                                                        <input name="special_needs" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                        <input name="special_needs" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                                </div>
                                <div className="cell medium-3">Shots up-to-date: <fieldset name="shots_current">
                                                        <input name="shots_current" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                        <input name="shots_current" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                                </div>
                                <div className="cell medium-4 medium-text-center">Does well with children: <fieldset name="children">
                                                        <input name="children" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                        <input name="children" type="radio" value="no"/><label htmlFor="no">No</label>
                                                    </fieldset>
                                </div>
                                <div className="cell medium-4 medium-text-center">Does well with dogs: <fieldset name="dogs">
                                                        <input name="dogs" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                        <input name="dogs" type="radio" value="no"/><label htmlFor="no">No</label>
                                                    </fieldset>
                                </div>
                                <div className="cell medium-4 medium-text-center">Does well with cats: <fieldset name="cats">
                                                        <input name="cats" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                        <input name="cats" type="radio" value="no"/><label htmlFor="no">No</label>
                                                    </fieldset>
                                </div>
                                <div className="cell large-6 medium-text-right">
                                    <input className="button large primary" type="submit" value="Add Pet"/>
                                </div>
                                <div className="cell large-6 text-left">
                                    <a href={`/lostones/pets/${_id}`} className="button large warning">Cancel</a>
                                </div>
                            </form>
                    </div>
            </Default>
        )
    }
}

module.exports = Edit;