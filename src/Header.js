import React from 'react';

const Header = () => {
  return (
    <header className='header-2'>
      <div
        className='page-header min-vh-75'
        style={{ backgroundImage: 'url("./assets/img/bg0.jpg")' }}
        loading='lazy'
      >
        <span className='mask bg-gradient-primary opacity-4' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 text-center mx-auto'>
              <h1 className='text-white pt-3 mt-n5'>Material Kit 2 PRO</h1>
              <p className='lead text-white mt-3 px-5'>
                Start the Development With A Bootstrap 5 Design System inspired
                by Material Design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
