import React, { useEffect, useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const NavbarFinal = () => {
  const [transparentHeader, setTransparentHeader] = useState(true);

  // * handles styling classes for navbar
  useEffect(() => {
    const handleScroll = (event) => {
      console.log('window.scrollY', window.scrollY);
      if (window.scrollY > 350) {
        setTransparentHeader(false);
      } else {
        setTransparentHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // * toggled classes navbar (background color, box-shadow & text color)
  const whiteBg = transparentHeader ? 'top' : 'bg-light';
  const whiteTxt = transparentHeader ? 'text-white' : '';
  const hamburgerColor = transparentHeader ? 'ham-light' : 'ham-dark';

  return (
    <nav className={`navbar fixed-top navbar-expand-lg py-3 ${whiteBg}`}>
      <Mobile whiteTxt={whiteTxt} hamburgerColor={hamburgerColor} />
      {/* <div className='container'>
        <a className={`navbar-brand fs-5 ${whiteTxt}`} href='#'>
          Chartify
        </a>
 
        <Mobile />
      </div> */}
    </nav>
  );
};

export default NavbarFinal;
