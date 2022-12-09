import React from 'react';

const Desktop = ({ whiteTxt, whiteBg }) => {
  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg py-3 ${whiteBg} d-none d-lg-block`}
    >
      <div className='container d-flex'>
        <a className={`navbar-brand fs-5 ${whiteTxt}`} href='#'>
          Chartify
        </a>
        <div className='w-100 pt-3 pb-2 py-lg-0  '>
          <ul
            className='navbar-nav navbar-nav-hover ms-auto nav justify-content-end'
            style={{ height: '100%' }}
          >
            <li className='nav-item d-flex '>
              <a
                className={`nav-link active d-flex my-auto ${whiteTxt}`}
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
              <a
                className={`nav-link active d-flex my-auto ${whiteTxt}`}
                href='#'
              >
                <i className='material-icons opacity-6 me-1 text-md my-auto'>
                  article
                </i>
                Blog
              </a>
            </li>
            <li className='nav-item d-flex'>
              <a
                className={`nav-link active d-flex my-auto ${whiteTxt}`}
                href='#'
              >
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
    </nav>
  );
};

export default Desktop;
