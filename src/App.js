import React, { useEffect } from 'react';
import NavbarFinal from './Navbar/NavbarFinal';
import Navbar from './Navbar';
import NavbarF from './Navbar/NavbarF';
import Offcanvas from './Navbar/Offcanvas';
import NavbarTrial from './Navbar/NavbarTrial';
// import OffcanvasReact from './Navbar/OffcanvasReact';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // * custom script for rellax.js init
  useEffect(() => {
    const body = document.querySelector('body');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = "let rellax = new Rellax('.rellax');";

    // script.setAttribute('src');

    body.appendChild(script);
  }, []);

  return (
    <>
      {/* <div className='container position-sticky z-index-sticky top-0'>
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex'>
              <Navbar />
            </div>
          </div>
        </div>
      </div> */}

      {/* <NavbarTrial /> */}
      {/* <Offcanvas /> */}
      {/* <NavbarF /> */}

      <NavbarFinal />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
