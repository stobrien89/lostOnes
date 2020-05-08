const React = require('react');

class Default extends React.Component {
    render() {


        return (
            <html className="no-js" lang="en">
                <head>
                    <meta charSet="UTF-8"/>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>LostOnes</title>
                    <link rel="stylesheet" href="/css/foundation.css" />
                    <link rel="stylesheet" href="/css/override.css"/>
                </head>
                <body>
                    <header className="top-bar large white">
                        <img src="/assets/images/logo.png" alt=""/>
                        <nav className="top-bar-left">
                            <ul className="menu">
                                <li><a href="/lostones">Home</a></li>
                                <li><a href="/lostones/pets">Pets</a></li>
                            </ul>
                        </nav>
                        <nav className="top-bar-right">
                            <ul className="menu">
                                <li href="#"><a href="/lostones/login">Log In</a></li>
                                <li><a href="/lostones/register">Create A New Account</a></li>
                                <li><a href="/lostones/logout">Log Out</a></li>
                            </ul>
                        </nav>
                    </header>
                        {this.props.children}
                    <footer className="callout large primary footer" style={{height: 20 + '%'}}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="cell medium-4 text-center">
                                    <h4>LostOnes</h4>
                                    <hr/>
                                    <p>We try to make pet adoption an easy process. buzzword buzzword buzzword. branding. buzzword.</p>    
                                </div>                        
                                <nav className="cell medium-4 text-center">
                                    <h4>Links</h4>
                                    <ul className="vertical menu">
                                        <li><a className="footer-link" href="/lostones/pets">Pets</a></li>
                                        <li><a className="footer-link" href="#">Events</a></li> 
                                        <li><a className="footer-link" href="#">About Us</a></li> 
                                        <li><a className="footer-link" href="/lostones/login">Log In</a></li> 
                                        <li><a className="footer-link" href="/lostones/register">Sign Up</a></li>
                                    </ul>
                                </nav>
                                <nav className="cell medium-4 text-center">
                                    <h4>Contact</h4>
                                    <ul className="vertical menu">
                                        <li><a className="footer-link" href="/lostones/pets">Pets</a></li>
                                        <li><a className="footer-link" href="#">Events</a></li> 
                                        <li><a className="footer-link" href="#">About Us</a></li> 
                                        <li><a className="footer-link" href="/lostones/login">Log In</a></li> 
                                        <li><a className="footer-link" href="/lostones/register">Sign Up</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </footer>
                    <script src="/js/vendor/jquery.js"></script>
                    <script src="/js/vendor/what-input.js"></script>
                    <script src="/js/vendor/foundation.min.js"></script>
                    <script src="/js/app.js"></script>
                </body>
            </html>
        )
    }
}

module.exports = Default;