import React from 'react';
import './Experience.scss';
// *** Materail-UI ***
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// *** Fontawesome ***
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Experience extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     //console.log(this.typeRef)
    // }

    render() {
        return (
            <div className="experience-wrap">
                <div className="experience">                    
                    <h1 className="tlt">&nbsp;Experience&nbsp;</h1>
                    <Grid container>
                        {/* Start - Website */}
                        <Grid item md={6} xs={12} className="dec-block dec-block-website">
                            <div className="dec-box">
                                <FontAwesomeIcon icon="sitemap" className="m-icon" />
                                <p>Website</p>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} className="txt-block">
                            <div className="txt-box">
                                <p>
                                    <FontAwesomeIcon icon="check-square" className="i-dot i-check" />
                                    HTML Semantic Elements
                            </p>
                                <p>
                                    <FontAwesomeIcon icon="check-square" className="i-dot i-check" />
                                    front-end architect design
                            </p>
                                <p>
                                    <FontAwesomeIcon icon="check-square" className="i-dot i-check" />
                                    SEO
                            </p>
                                <p>
                                    <FontAwesomeIcon icon="check-square" className="i-dot i-check" />
                                    Web Design Effects
                            </p>
                            </div>
                        </Grid>
                    </Grid>
                    {/* End - website */}
                    {/* Start - Tool */}
                    <Grid container className="tool-block">
                        <Grid item md={6} xs={12} className="dec-block dec-block-tool">
                            <div className="dec-box">
                                <FontAwesomeIcon icon="toolbox" className="m-icon" />
                                <p>Tool</p>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} className="txt-block">
                            <div className="txt-box">
                                <p>
                                    <FontAwesomeIcon icon="angle-right" className="i-dot i-arrow" />
                                    <b>Drag &amp; Drop Editor for build website</b>
                                </p>
                                <div className="txt-cont">
                                    <ul>
                                        <li>Drag &amp; Drop operation</li>
                                        <li>Various kinds of effects and function(ex. Forms, popup, navigation, menu, tabs, grid, expansion panel, carousel, community-sharing)</li>
                                        <li>Website traffic analysis - Data Visualization</li>
                                    </ul>
                                </div>
                                <p>
                                    <FontAwesomeIcon icon="angle-right" className="i-dot i-arrow" />
                                    <b>EDM</b>
                                </p>
                                <div className="txt-cont">
                                    <ul>
                                        <li>Drag &amp; Drop operation</li>
                                        <li>RWD EDM</li>
                                        <li>Mailchimp to export API Endpoint</li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    {/* End - Tool */}
                    {/* Start - System */}
                    <Grid container className="system-block">
                        <Grid item md={6} xs={12} className="dec-block dec-block-system">
                            <div className="dec-box">
                                <FontAwesomeIcon icon="user-cog" className="m-icon" />
                                <p>System</p>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} className="txt-block">
                            <div className="txt-box">
                                <p>
                                    <FontAwesomeIcon icon="angle-right" className="i-dot i-arrow-b" />
                                    Legal review system
                            </p>
                                <div className="txt-cont">
                                    <ul>
                                        <li>React - front-end architecture</li>
                                        <li>Multiple API connection and handle error status</li>
                                        <li>Company internal UI framework</li>
                                    </ul>
                                </div>
                                <p>
                                    <FontAwesomeIcon icon="angle-right" className="i-dot i-arrow-b" />
                                    Purchasing system refurbishment
                            </p>
                                <div className="txt-cont">
                                    <ul>
                                        <li>Angular - front-end architecture</li>
                                        <li>SSO</li>
                                    </ul>
                                </div>
                                <p>
                                    <FontAwesomeIcon icon="angle-right" className="i-dot i-arrow-b" />
                                    Material management system
                            </p>
                                <div className="txt-cont">
                                    <ul>
                                        <li>Shopping mall Design</li>
                                        <li>Dynamic multiple selection filtering</li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        {/* End - System */}
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Experience;
