const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {


        return (
            <Default>
                <h1>Add a new pet</h1>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <form action="/lostones/pets" method="POST">
                            Name: <input type="text" name="name"/>
                            Bio: <input type="text" name="description"/>
                            Type: <select name="type">
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                </select>
                            Photo: <input type="text" name="photos"/>
                            Breed: <input type="text" name="breeds"/>
                            Color: <input type="text" name="colors"/>
                            Age: <input type="number" max="25" min="1" name="age"/>
                            Sex: <select name="sex">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="prefer not to say">Prefer Not To Say</option>
                                </select>
                            Size: <select name="size" id="">
                                    <option value="small">Small (5-25lbs)</option>
                                    <option value="medium">Medium (26-40lbs)</option>
                                    <option value="extra-medium">Extra-Medium (41-55lbs)</option>
                                    <option value="large">Large (56-85lbs)</option>
                                    <option value="extra-large">Extra-Large (86-150lbs)</option>
                                </select>
                            Spayed or Neutered: <fieldset name="spayedOrNeutered">
                                                    <input name="spayedOrNeutered" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="spayedOrNeutered" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                            House-trained: <fieldset name="house_trained">
                                                    <input name="house_trained" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="house_trained" type="radio" value="no"/><label htmlFor="no">No</label>
                                            </fieldset>
                            Special Needs: <fieldset name="special_needs">
                                                    <input name="special_needs" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="special_needs" type="radio" value="no"/><label htmlFor="no">No</label>
                                            </fieldset>
                            Shots up-to-date: <fieldset name="shots_current">
                                                    <input name="shots_current" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="shots_current" type="radio" value="no"/><label htmlFor="no">No</label>
                                            </fieldset>
                            Does well with children: <fieldset name="children">
                                                    <input name="children" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="children" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                            Does well with dogs: <fieldset name="dogs">
                                                    <input name="dogs" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="dogs" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                            Does well with cats: <fieldset name="cats">
                                                    <input name="cats" type="radio" value="yes"/><label htmlFor="yes">Yes</label>
                                                    <input name="cats" type="radio" value="no"/><label htmlFor="no">No</label>
                                                </fieldset>
                            <input className="button" type="submit" value="Add Pet"/>
                        </form>
                    </div>
                </div>
            </Default>
        )
    }
}
 

module.exports = New;