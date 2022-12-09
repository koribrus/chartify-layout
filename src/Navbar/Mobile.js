import React from 'react';

const Mobile = ({ whiteTxt, hamburgerColor }) => {
  return (
    <div className='container side-nav'>
      <a className={`navbar-brand fs-5 ${whiteTxt}`} href='#'>
        Chartify
      </a>
      <input type='checkbox' className='toggler' autoComplete='off' />
      <div className='hamburger'>
        <div className={`${hamburgerColor}`}></div>
      </div>
      <div className='menu-wrap d-flex'>
        <div className='menu bg-light px-3 py-5' title='sidenav'>
          <div>
            <div className='menu-hamburger '>
              <ul
                className='navbar-nav navbar-nav-hover ms-auto nav'
                style={{ height: '100%' }}
              >
                <li className='nav-item d-flex py-3 nav-hr'>
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
                <li className='nav-item d-flex py-3 nav-hr'>
                  <a className='nav-link active d-flex my-auto' href='#'>
                    <i className='material-icons opacity-6 me-1 text-md my-auto'>
                      article
                    </i>
                    Blog
                  </a>
                </li>
                <li className='nav-item d-flex py-3 nav-hr'>
                  <a className='nav-link active d-flex my-auto' href='#'>
                    <i className='material-icons opacity-6 me-1 text-md my-auto'>
                      article
                    </i>
                    About
                  </a>
                </li>
                <li className='nav-item d-flex py-3'>
                  <button className='btn btn-primary btn-round my-3'>
                    <i className='material-icons'>favorite</i> Spotify Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
