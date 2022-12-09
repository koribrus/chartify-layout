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
    <>
      <Desktop whiteTxt={whiteTxt} whiteBg={whiteBg} />
      <Mobile
        whiteTxt={whiteTxt}
        whiteBg={whiteBg}
        hamburgerColor={hamburgerColor}
      />
    </>
  );
};

export default NavbarFinal;
