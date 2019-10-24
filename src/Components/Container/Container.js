import React from 'react';
import './Container.scss';
import Skill from '../Container/Skill/Skill';
import Experience from '../Container/Experience/Experience';
import About from '../Container/About/About';

class Container extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     //console.log(this.typeRef)
    // }

    render() {
        return (
            <div className="container">
              <Skill />
              <Experience />
              <About />
            </div>
        );
    }
}

export default Container;
