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
                    <footer className="callout large primary footer">
                        <div className="grid-container">
                            <div className="grid-x">
                                <div className="cell medium-4">
                                    <h5>LostOnes</h5>
                                    <p>We do put stuff</p>    
                                </div>                        
                                <nav className="cell medium-4">
                                    <h5>Links</h5>
                                </nav>
                                <nav className="cell medium-4">
                                    <h5>Contact</h5>
                                </nav>
                            </div>
                        </div>
                    </footer>
                    <script src="/js/vendor/jquery.js"></script>
                    <script src="/js/vendor/what-input.js"></script>
                    <script src="/js/vendor/foundation.min.js"></script>
                    <script src="js/foundation/foundation.orbit.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/js/plugins/foundation.equalizer.min.js"></script>
                    <script src="/js/app.js"></script>
                </body>
            </html>
        )
    }
}

module.exports = Default;