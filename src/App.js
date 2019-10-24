import React from 'react';
// import logo from './logo.svg';
import './App.scss';
// *** Component ***
import Header from '../src/Components/Header/Header';
import Container from '../src/Components/Container/Container';
import Footer from '../src/Components/Footer/Footer';
// *** Fontawesome ***
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  fab, 
  faHtml5, 
  faCss3Alt, 
  faJsSquare, 
  faAngular, 
  faReact 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faFileCode, 
  faBookOpen, 
  faPalette, 
  faKiwiBird, 
  faAngleDoubleDown ,
  faSitemap,
  faCheckSquare,
  faAngleRight,
  faToolbox,
  faUserCog,
  faDumbbell,
  faBookReader,
  faPaw,
  faMountain,
  faGamepad
} from '@fortawesome/free-solid-svg-icons';
library.add(
  fab, 
  faHtml5, 
  faCss3Alt,
  faJsSquare, 
  faFileCode, 
  faBookOpen, 
  faAngular, 
  faReact, 
  faPalette, 
  faKiwiBird, 
  faAngleDoubleDown,
  faSitemap,
  faCheckSquare,
  faAngleRight,
  faToolbox,
  faUserCog,
  faDumbbell,
  faBookReader,
  faPaw,
  faMountain,
  faGamepad
  );

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
