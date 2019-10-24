import React from 'react';
import './About.scss';
// *** Materail-UI ***
import Grid from '@material-ui/core/Grid';
// // *** Fontawesome ***
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     //console.log(this.typeRef)
    // }
    render() {
        return (
            <div className="about">
                <Grid container className="m-grid-wrapper" direction="row-reverse" justify="center" alignItems="center">
                    <Grid item md={6} xs={12} className="block-l">
                            <h1>About Me</h1>
                            <p className="sub-tlt">I have a simple dream that enjoy coding and believe program could create some interesting things!</p>
                            <p>I like to program, try new things and research challenges to find the most direct and effective way.
                                <br />
                                Hope my performance can be perfect, bring more contributions to the company and grow together.</p>
                            <h3 className="tlt-third">Interest</h3>
                            <div className="block-box-wrapper">
                                <div className="block-box block-sports">
                                    <FontAwesomeIcon icon="dumbbell" className="i-interest" />
                                    <p>Sports</p>
                                </div>
                                <div className="block-box block-reading">
                                    <FontAwesomeIcon icon="book-reader" className="i-interest" />
                                    <p>Reading</p>
                                </div>
                                <div className="block-box block-animals">
                                    <FontAwesomeIcon icon="paw" className="i-interest" />
                                    <p>Animals</p>
                                </div>
                                <div className="block-box block-outdoor">
                                    <FontAwesomeIcon icon="mountain" className="i-interest" />
                                    <p>Outdoor</p>
                                </div>
                                <div className="block-box block-game">
                                    <FontAwesomeIcon icon="gamepad" className="i-interest" />
                                    <p>Game</p>
                                </div>
                            </div>
                            <h3 className="tlt-third">Contact me</h3>
                            <p>E-mail: isabellaapple111@gmail.com</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default About;
