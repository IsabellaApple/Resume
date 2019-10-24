import React from 'react';
import './Header.scss';
import videox from '../../../src/Images/example.mp4';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: props.height
        };
        this.typeRef = React.createRef();
    }

    componentDidMount() {
        //console.log(this.typeRef)
    }

    scrollNext = () => {
        window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth' })
    }

    render() {
        return (
            <div className="header">
                <video autoPlay muted loop id="myVideo">
                    <source src={videox} type="video/mp4" />
                </video>
                <div className="header-overlay"></div>
                <div className="header-text" ref={this.typeRef}></div>
                <Typed
                    className="header-text"
                    strings={['HI! I\'m Isabella']}
                    typeSpeed={100}
                />
                <FontAwesomeIcon icon="angle-double-down" className="i-down"  onClick={this.scrollNext} />
            </div>
        );
    }
}

export default Header;