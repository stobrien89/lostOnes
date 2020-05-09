const React = require('react');
const Default = require('./Default');

class UserLogin extends React.Component {
    render() {
        const {message} = this.props;
        
        return (
            <Default>
                <div className="callout large primary white">
                    <div className="text-center">
                        <h2><em>Don't have an account?</em><br/>
                            We'd love to send you some marketing emails!
                        </h2>
                        <br/>
                        <a href="/lostones/register" className="button large primary learn-more">Sign up now</a>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="grid-container" style={{height: 45 + 'vh'}}>
                    <form class="log-in-form" action="/lostones/login" method="POST">
                            <h5 className="text-center" style={{color: 'rgb(138, 64, 151)'}}>Log in using the email associated with your account</h5>
                            {message ? <p data-alert className="alert-box alert radius" style={{color: 'rgb(138, 64, 151)'}}><strong>{message}</strong></p> : null}
                        
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Enter Email" name="email" required/>

                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password" name="password" required/>
                            <input type="checkbox" id="show-password"/><label htmlFor="show-password">Show password</label>
                            <br/>
                            <input className="button expanded primary" type="submit" value="Log In"/>
                            <p class="text-center"><a href="#">Forgot your password?</a></p>
                
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = UserLogin;