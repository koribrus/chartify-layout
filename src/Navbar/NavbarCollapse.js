import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarCollapse = () => {
  return (
    <div className='container'>
      <a className='navbar-brand fs-5' href='#'>
        Chartify
      </a>
      <button
        className='navbar-toggler shadow-none ms-md-2'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navigation'
        aria-controls='navigation'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <a className='d-flex my-auto' href='#'>
          <i className='material-icons opacity-6 me-1 my-auto'>close</i>
        </a>
      </button>
      <div
        className='collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 justify-content-end'
        id='navigation'
      >
        <ul
          className='navbar-nav navbar-nav-hover ms-auto nav justify-content-end'
          style={{ height: '100%' }}
        >
          <li className='nav-item d-flex'>
            <a
              className='nav-link active d-flex my-auto'
              aria-current='page'
              href='#'
            >
              <i className='material-icons opacity-6 me-1 text-md my-auto'>
                play_circle
              </i>
              Playlists
            </a>
          </li>
          <li className='nav-item d-flex'>
            <a className='nav-link d-flex my-auto' href='#'>
              <i className='material-icons opacity-6 me-1 text-md my-auto'>
                article
              </i>
              Blog
            </a>
          </li>
          <li className='nav-item d-flex'>
            <a className='nav-link d-flex my-auto' href='#'>
              <i className='material-icons opacity-6 me-1 text-md my-auto'>
                article
              </i>
              About
            </a>
          </li>
          <li className='nav-item d-flex'>
            <button className='btn btn-primary btn-round my-auto'>
              <i className='material-icons'>favorite</i> Spotify Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarCollapse;
