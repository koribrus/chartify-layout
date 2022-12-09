import React from 'react';
import NavbarFinal from './NavbarFinal';
import NavbarCollapse from './NavbarCollapse';
import Navbar2 from './Navbar2';
import NavbarOffcanvas from './Offcanvas';

const NavbarF = () => {
  return (
    // <nav className='navbar fixed-top navbar-light navbar-expand-xl bg-primary py-3 px-10'>
    <nav className='navbar fixed-top navbar-expand-lg bg-light py-3'>
      <NavbarFinal />
      {/* <Navbar2 /> */}
      {/* <NavMobile /> */}
      {/* <NavbarOffcanvas /> */}
    </nav>
  );
};

export default NavbarF;
