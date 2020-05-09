const React = require('react');
const Default = require('./Default');

class Home extends React.Component {
    render() {
        return(
            <Default user={this.props.loggedIn}>
                    <div className="callout large primary white">
                        <div className="text-center">
                            <h1><strong>Adopt a pet.</strong><br/><em>Save a life.</em></h1>
                            <br/>
                            <a href="/lostones/pets" className="button large primary learn-more align-left">Find your new best friend.</a>
                        </div>
                    </div>
                    <div className="grid-container">
                    <div className="orbit" role="region" aria-label="Sample pet images" data-orbit data-resize="lv5p5y-orbit" id="lv5p5y-orbit" data-e="eabujr-e" data-events="resize">
                        <div className="orbit-wrapper">
                            <div className="orbit-controls">
                                <button className="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                                <button className="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                            </div>
                            <ul className="orbit-container">
                                <li className="is-active orbit-slide">
                                    <figure className="orbit-figure">
                                    <img className="orbit-image" src="/assets//images/orbit1.jpg" alt="Space"/>
                                    </figure>
                                </li>
                                <li className="orbit-slide">
                                    <figure className="orbit-figure">
                                    <img className="orbit-image" src="/assets/images/orbit4.jpg" alt="Space"/>
                                </figure>
                                </li>
                                <li className="orbit-slide">
                                    <figure className="orbit-figure">
                                    <img className="orbit-image" src="/assets/images/orbit3.jpg" alt="Space"/>
                                    </figure>
                                </li>
                                <li className="orbit-slide">
                                    <figure className="orbit-figure">
                                    <img className="orbit-image" src="/assets/images/orbit2.jpg" alt="Space"/>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                        <nav class="orbit-bullets">
                            <button class="is-active" data-slide="0">
                            <span class="show-for-sr">Adopt a Dog</span>
                            <span class="show-for-sr" data-slide-active-label>Current Slide</span>
                            </button>
                            <button data-slide="1"><span class="show-for-sr">Adopt a Cat.</span></button>
                            <button data-slide="2"><span class="show-for-sr">So Funny.</span></button>
                            <button data-slide="3"><span class="show-for-sr">Cats are better.</span></button>
                        </nav>
                        </div>
                    </div>
            </Default>
        )
    }
}

module.exports = Home;