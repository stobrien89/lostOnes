const React = require('react');
const Default = require('./Default');

class UserLogin extends React.Component {
    render() {
        const {message} = this.props;
        
        return (
            <Default>
                <div className="callout large primary">
                    <div className="text-center">
                        <h1>Featured pets</h1>
                        <h2 className="subheader">blah blah blah</h2>
                    </div>
                </div>
                <div className="grid-container">
                    <form action="/lostones/login" method="POST">
                        <h1>Log In</h1>
                    
                    {message ? <p data-alert className="alert-box alert radius" style={{color: 'rgb(138, 64, 151)'}}><strong>{message}</strong></p> : null}
                    
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