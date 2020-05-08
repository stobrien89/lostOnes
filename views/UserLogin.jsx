const React = require('react');
const Default = require('./Default');

class UserLogin extends React.Component {
    render() {
        const {errorMessage} = this.props;
        
        return (
            <Default>
                <div className="grid-container">
                    <form action="/lostones/login" method="POST">
                        <h1>Log In</h1>
                    
                    <p id="login-status" className="invisible">{errorMessage}</p>
                    
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter Email" name="email" required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" required/>

                    <input className="button large primary" type="submit" value="Log In"/>

                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = UserLogin;