const React = require('react');
const Default = require('./Default');

class NewUser extends React.Component {
    render() {

        const {message} = this.props;

        return (
            <Default user={this.props.loggedIn}>
                <div className="callout large primary">
                    <div className="text-center">
                        <h1>Featured pets</h1>
                        <h2 className="subheader">blah blah blah</h2>
                    </div>
                </div>
                <div className="grid-container">
                    <form action="/lostones/register" method="POST">
                        <h1>Register</h1>
                    {message ? <p data-alert className="alert-box alert radius" style={{color: 'rgb(138, 64, 151)'}}><strong>{message}</strong></p> : null}
                    <p>Please fill out the fields below to create a new account</p>

                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter Email" name="email" required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" required/>

                    <label htmlFor="password-repeat">Repeat Password</label>
                    <input type="password" placeholder="Repeat Password" required/>

                    <hr/>

                    <p>By creating an account, you agree to our Terms & Privacy</p>
                    <input class="button large primary" type="submit" value="Create New Account"/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = NewUser;