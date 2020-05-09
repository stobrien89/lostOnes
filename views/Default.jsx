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
                    <link rel="shortcut icon" href="/assets/images/favicon.png"/>
                    <link rel="stylesheet" href="/css/foundation.css" />
                    <link rel="stylesheet" href="/css/override.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.min.css"/>
                </head>
                <body>
                    <header className="top-bar large white">
                        <img src="/assets/images/logo.png" alt=""/>
                        <nav className="top-bar-left">
                            <ul className="menu">
                                <li><a href="/lostones">Home</a></li>
                                <li><a href="/lostones/pets">Pets</a></li>
                                <li><a href="/lostones/pets/new">Add Pet</a></li>
                            </ul>
                        </nav>
                        <nav className="top-bar-right">
                            <ul className="menu">
                                {this.props.user ? <li><a href="/lostones/favorites">Favorites</a></li> : null}
                                {this.props.user ? <li><a href="/lostones/logout">Log Out</a></li> : <li href="#"><a href="/lostones/login">Log In</a></li>}
                                <li><a href="/lostones/register">Create A New Account</a></li>
                            </ul>
                        </nav>
                    </header>
                        {this.props.children}
                    <footer className="callout large primary footer white" style={{height: 20 + '%'}}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="cell medium-4 text-center">
                                    <h4>LostOnes</h4>
                                    <hr/>
                                    <p>Our mission is to build a community where people value animals and treat them with respect and kindness. 
                                        Since 1883, our mission has remained the same – to promote the humane treatment of people and animals through education, advocacy and services.
                                    </p>    
                                </div>                        
                                <nav className="cell medium-4 text-center">
                                    <h4>Links</h4>
                                    <ul className="vertical menu">
                                        <li><a className="footer-link" href="/lostones/pets"><i className="fi-guide-dog"></i>&nbsp;&nbsp;Pets</a></li>
                                        <li><a className="footer-link" href="#"><i className="fi-calendar"></i>&nbsp;&nbsp;Events</a></li> 
                                        <li><a className="footer-link" href="#"><i className="fi-info"></i>&nbsp;&nbsp;About Us</a></li> 
                                        <li><a className="footer-link" href="/lostones/login"><i className="fi-book-bookmark"></i>&nbsp;&nbsp;Log In</a></li> 
                                        <li><a className="footer-link" href="/lostones/register"><i className="fi-checkbox"></i>&nbsp;&nbsp;Sign Up</a></li>
                                    </ul>
                                </nav>
                                <nav className="cell medium-4 text-center">
                                    <h4>Contact</h4>
                                    <ul className="vertical menu">
                                        <li><a className="footer-link" href="/lostones/pets"><i className="fi-social-facebook"></i>&nbsp;&nbsp;Facebook</a></li>
                                        <li><a className="footer-link" href="#"><i className="fi-social-twitter"></i>&nbsp;&nbsp;Twitter</a></li> 
                                        <li><a className="footer-link" href="#"><i className="fi-social-instagram"></i>&nbsp;&nbsp;Instagram</a></li> 
                                        <li><a className="footer-link" href="/lostones/login"><i className="fi-social-linkedin"></i>&nbsp;&nbsp;LinkedIn</a></li> 
                                        <li><a className="footer-link" href="/lostones/register"><i className="fi-social-github"></i>&nbsp;&nbsp;GitHub</a></li>
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