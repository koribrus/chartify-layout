import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarTrial = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light py-3'>
      <div className='container'>
        <a className='navbar-brand fs-5' href='#'>
          Chartify
        </a>
        {/* <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button> */}
        <button
          className='navbar-toggler shadow-none ms-md-2'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navigation'
          aria-controls='navigation'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon mt-2'>
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </span>
        </button>

        <div
          className='collapse navbar-collapse justify-content-end offcanvas offcanvas-end'
          id='navbarNav'
          tabindex='-1'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          {/* <div class='offcanvas-header'>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div> */}
          <ul id='navigation' className='navbar-nav' style={{ height: '100%' }}>
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
      </div>
    </nav>
  );
};

export default NavbarTrial;

const originalUL = {
  /* <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled'>Disabled</a>
            </li>
          </ul> */
};

// * no close button
const offcanvas1 = (
  <nav className='navbar navbar-expand-lg bg-light fixed-top py-3'>
    <div className='container'>
      <a className='navbar-brand fs-5' href='#'>
        Chartify
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div
        className='collapse navbar-collapse justify-content-end offcanvas offcanvas-end'
        id='navbarNav'
        tabindex='-1'
        aria-labelledby='offcanvasNavbarLabel'
      >
        <div class='offcanvas-header'>
          <h5 class='offcanvas-title' id='offcanvasNavbarLabel'>
            Offcanvas
          </h5>
          <button
            type='button'
            class='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <ul id='navigation' className='navbar-nav' style={{ height: '100%' }}>
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
    </div>
  </nav>
);
