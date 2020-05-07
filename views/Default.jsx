const React = require('react');

class Default extends React.Component {
    render() {


        return (
            <html class="no-js" lang="en">
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
                <img src="/assets/logo.png" alt=""/>
                <nav className="top-bar-left">
                    <ul className="menu">
                        <li><a href="#">Option1</a></li>
                        <li><a href="#">Option2</a></li>
                    </ul>
                </nav>
                <nav className="top-bar-right">
                    <ul className="menu">
                        <li href="#"><a href="#">Option3</a></li>
                        <li><a href="#">Option4</a></li>
                        <li><a href="#">Option5</a></li>
                    </ul>
                </nav>
            </header>
                {this.props.children}
            <footer className="callout large primary footer">
                <nav></nav>
            </footer>
            <script src="/js/vendor/jquery.js"></script>
            <script src="/js/vendor/what-input.js"></script>
            <script src="/js/vendor/foundation.min.js"></script>
            <script src="js/foundation/foundation.orbit.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/js/plugins/foundation.equalizer.min.js"></script>
            <script>
                $(document).foundation();
            </script>
            </body>
            </html>
        )
    }
}

module.exports = Default;