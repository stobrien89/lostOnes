const React = require('react');
const Default = require('./Default');

class NewUser extends React.Component {
    render() {

        const {message} = this.props;

        return (
            <Default user={this.props.loggedIn}>
                <div className="callout large primary white">
                    <div className="text-center">
                        <h1><em>Welcome</em></h1>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="grid-container" style={{height: 45 + 'vh'}}>
                    <form className="log-in-form" action="/lostones/register" method="POST">
                        <h5 className="text-center" style={{color: 'rgb(138, 64, 151)'}}>Please fill out the fields below to create an account</h5>
                        {message ? <p data-alert className="alert-box alert radius" style={{color: 'rgb(138, 64, 151)'}}><strong>{message}</strong></p> : null}

                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email" required/>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" required/>

                        <label htmlFor="password-repeat">Repeat Password</label>
                        <input type="password" placeholder="Re-enter your Password" required/>

                        <hr/>

                        <p>By creating an account, you agree to our Terms & Privacy Policy</p>
                        <input class="button expanded primary" type="submit" value="Create New Account"/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = NewUser;