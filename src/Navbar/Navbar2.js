import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar2 = () => {
  return (
    <div className='container'>
      <a className='navbar-brand fs-5' href='#'>
        Chartify
      </a>
      <ul
        id='navigation'
        className='nav justify-content-end '
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
            <i className='material-icons'>favorite</i> Login w Spotify
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar2;
