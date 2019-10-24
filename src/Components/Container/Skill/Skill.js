import React from 'react';
import './Skill.scss';
// *** Materail-UI ***
import Grid from '@material-ui/core/Grid';
// *** Fontawesome ***
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Skill extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     //console.log(this.typeRef)
    // }

    render() {
        return (
            <div className="skill">
                <h1 className="tlt">&nbsp;Skill&nbsp;</h1>
                <Grid container>
                    <Grid item md={3} xs={12}>
                        <div className="m-block">
                            <FontAwesomeIcon icon="file-code" className="m-icon" />
                            <h1 className="block-tlt">Basic</h1>
                            <div className="block-body">
                                <ul>
                                    <li>

                                        <div className="block-l"><FontAwesomeIcon icon={['fab', 'html5']} className="i-html" /></div>
                                        <div className="block-r">HTML</div>
                                    </li>
                                    <li>
                                        <div className="block-l"><FontAwesomeIcon icon={['fab', 'css3-alt']} className="i-css" /></div>
                                        <div className="block-r">CSS/SASS</div>
                                    </li>
                                    <li>
                                        <div className="block-l"><FontAwesomeIcon icon={['fab', 'js-square']} className="i-js" /></div>
                                        <div className="block-r">Javascript</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className="m-block">
                            <FontAwesomeIcon icon="book-open" className="m-icon" />
                            <h1 className="block-tlt">JS library</h1>
                            <div className="block-body">
                                <ul>
                                    <li>
                                        <div className="block-l"><i className="i-jq">jQ</i></div>
                                        <div className="block-r">jQuery</div>
                                    </li>
                                    <li>
                                        <div className="block-l"><FontAwesomeIcon icon={['fab', 'angular']} className="i-angular" /></div>
                                        <div className="block-r">Angular</div>
                                    </li>
                                    <li>
                                        <div className="block-l"><FontAwesomeIcon icon={['fab', 'react']} className="i-react" /></div>
                                        <div className="block-r">React</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className="m-block">
                            <FontAwesomeIcon icon="palette" className="m-icon" />
                            <h1 className="block-tlt">UI Framwork</h1>
                            <div className="block-body">
                                <ul>
                                    <li>
                                        <div className="block-l"><i className="i-material">M</i></div>
                                        <div className="block-r">material</div>
                                    </li>
                                    <li>
                                        <div className="block-l"><i className="i-bootstrap">B</i></div>
                                        <div className="block-r">bootstrap</div>
                                    </li>
                                    <li>
                                        <div className="block-l"><i className="i-zorro">nZ</i></div>
                                        <div className="block-r">ng-zorro</div>
                                    </li>
                                </ul>
                            </div>
                            <p className="block-footer">* Others(ex. company internal UI framework)</p>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className="m-block block-other">
                            <FontAwesomeIcon icon="kiwi-bird" className="m-icon" />
                            <h1 className="block-tlt">Others</h1>
                            <div className="block-body">
                                <ul>
                                    <li>
                                        <div>
                                            <b>Design software - </b>
                                        </div>
                                        <div>Photoshop, Illustrator, Fireworks, Dreamweaver</div>
                                    </li>
                                    <li>
                                        <div>
                                            <b>Version control - </b>
                                        </div>
                                        <div>Git, SVN</div>
                                    </li>
                                    <li>
                                        <div>
                                            <b>Experience - </b>
                                        </div>
                                        <div>Scrum development, Third-party APIs, RESTful API</div>
                                    </li>
                                    <li>
                                        <div>
                                            <b>App Development - </b>
                                        </div>
                                        <div>iOS mixed development(PhoneGap)</div>
                                    </li>
                                    <li>
                                        <div>
                                            <b>Python - </b>
                                        </div>
                                        <div>basic knowledge</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Skill;
