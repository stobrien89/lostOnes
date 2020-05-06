const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const {_id, name, description, type, photos, breeds, colors, age, sex, size, spayedOrNeutered, house_trained, special_needs, shots_current, children, dogs, cats} = this.props.pet;

        return ( 
            <Default>
                <h1>Edit Heading</h1>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <form action={`/lostones/pets/${_id}?_method=PUT`} method="POST">
                            Name: <input type="text" name="name" defaultValue={name}/>
                            Bio: <input type="text" name="description" defaultValue={description}/>
                            Type: <select name="type" defaultValue={type}>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                </select>
                            Photo: <input type="text" name="photos" defaultValue={photos}/>
                            Breed: <input type="text" name="breeds" defaultValue={breeds}/>
                            Color: <input type="text" name="colors" defaultValue={colors}/>
                            Age: <input type="number" max="25" min="1" name="age" defaultValue={age}/>
                            Sex: <select name="sex" defaultValue={sex}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="prefer not to say">Prefer Not To Say</option>
                                </select>
                            Size: <select name="size" defaultValue={size}>
                                    <option value="small">Small (5-25lbs)</option>
                                    <option value="medium">Medium (26-40lbs)</option>
                                    <option value="extra-medium">Extra-Medium (41-55lbs)</option>
                                    <option value="large">Large (56-85lbs)</option>
                                    <option value="extra-large">Extra-Large (86-150lbs)</option>
                                </select>
                            Spayed or Neutered: <fieldset name="spayedOrNeutered" defaultChecked={spayedOrNeutered}>
                                                    <input name="spayedOrNeutered" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="spayedOrNeutered" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                            House-trained: <fieldset name="house_trained" defaultChecked={house_trained}>
                                                    <input name="house_trained" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="house_trained" type="radio" value="no"/><label htmlFor="no">No</label>
                                            </fieldset>
                            Special Needs: <fieldset name="special_needs" defaultChecked={special_needs}>
                                                    <input name="special_needs" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="special_needs" type="radio" value="no"/><label htmlFor="no">No</label>
                                            </fieldset>
                            Shots up-to-date: <fieldset name="shots_current" defaultChecked={shots_current}>
                                                    <input name="shots_current" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="shots_current" type="radio" value="no"/><label htmlFor="no">No</label>
                                            </fieldset>
                            Does well with children: <fieldset name="children" defaultChecked={children}>
                                                    <input name="children" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="children" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                            Does well with dogs: <fieldset name="dogs" defaultChecked={dogs}>
                                                    <input name="dogs" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="dogs" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                            Does well with cats: <fieldset name="cats" defaultChecked={cats}>
                                                    <input name="cats" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="cats" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                            <input className="button" type="submit" value="Update Pet"/>
                        </form>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Edit;