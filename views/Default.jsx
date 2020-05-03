const React = require('react');

class Default extends React.Component {
    render() {


        return (
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>LostOnes</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css" integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous"></link>
            </head>
            <body>
                {this.props.children}
            </body>
            </html>
        )
    }
}

module.exports = Default;