import React from 'react';

const Main = () => {
  return (
    <div
      className='card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 rellax'
      data-rellax-speed='7'
    >
      <section className='pt-3 pb-4' id='count-stats'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 z-index-2 border-radius-xl mx-auto py-3'>
              <div className='row'>
                <div className='col-md-4 position-relative'>
                  <div className='p-3 text-center'>
                    <h1 className='text-gradient text-primary'>
                      <span id='state1' countto={300}>
                        0
                      </span>
                      +
                    </h1>
                    <h5 className='mt-3'>Coded Elements</h5>
                    <p className='text-sm font-weight-normal'>
                      From buttons, to inputs, navbars, alerts or cards, you are
                      covered
                    </p>
                  </div>
                  <hr className='vertical dark' />
                </div>
                <div className='col-md-4 position-relative'>
                  <div className='p-3 text-center'>
                    <h1 className='text-gradient text-primary'>
                      {' '}
                      <span id='state2' countto={100}>
                        0
                      </span>
                      +
                    </h1>
                    <h5 className='mt-3'>Design Blocks</h5>
                    <p className='text-sm font-weight-normal'>
                      Mix the sections, change the colors and unleash your
                      creativity
                    </p>
                  </div>
                  <hr className='vertical dark' />
                </div>
                <div className='col-md-4'>
                  <div className='p-3 text-center'>
                    <h1
                      className='text-gradient text-primary'
                      id='state3'
                      countto={41}
                    >
                      0
                    </h1>
                    <h5 className='mt-3'>Pages</h5>
                    <p className='text-sm font-weight-normal'>
                      Save 3-4 weeks of work when you use our pre-made pages for
                      your website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='my-5 py-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4'>
              <div className='rotating-card-container'>
                <div className='card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-5'>
                  <div
                    className='front front-background'
                    style={{
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className='card-body py-7 text-center'>
                      <i className='material-icons text-white text-4xl my-3'>
                        touch_app
                      </i>
                      <h3 className='text-white'>
                        Feel the <br /> Material Kit
                      </h3>
                      <p className='text-white opacity-8'>
                        All the Bootstrap components that you need in a
                        development have been re-design with the new look.
                      </p>
                    </div>
                  </div>
                  <div
                    className='back back-background'
                    style={{
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className='card-body pt-7 text-center'>
                      <h3 className='text-white'>Discover More</h3>
                      <p className='text-white opacity-8'>
                        {' '}
                        You will save a lot of time going from prototyping to
                        full-functional code because all elements are
                        implemented.
                      </p>
                      <a
                        href='.//sections/page-sections/hero-sections.html'
                        target='_blank'
                        className='btn btn-white btn-sm w-50 mx-auto mt-3'
                      >
                        Start with Headers
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 ms-auto'>
              <div className='row justify-content-start'>
                <div className='col-md-6'>
                  <div className='info'>
                    <i className='material-icons text-gradient text-primary text-3xl'>
                      content_copy
                    </i>
                    <h5 className='font-weight-bolder mt-3'>
                      Full Documentation
                    </h5>
                    <p className='pe-5'>
                      Built by developers for developers. Check the foundation
                      and you will find everything inside our documentation.
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info'>
                    <i className='material-icons text-gradient text-primary text-3xl'>
                      flip_to_front
                    </i>
                    <h5 className='font-weight-bolder mt-3'>
                      Bootstrap 5 Ready
                    </h5>
                    <p className='pe-3'>
                      The world’s most popular front-end open source toolkit,
                      featuring Sass variables and mixins.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row justify-content-start mt-5'>
                <div className='col-md-6 mt-3'>
                  <i className='material-icons text-gradient text-primary text-3xl'>
                    price_change
                  </i>
                  <h5 className='font-weight-bolder mt-3'>
                    Save Time &amp; Money
                  </h5>
                  <p className='pe-5'>
                    Creating your design from scratch with dedicated designers
                    can be very expensive. Start with our Design System.
                  </p>
                </div>
                <div className='col-md-6 mt-3'>
                  <div className='info'>
                    <i className='material-icons text-gradient text-primary text-3xl'>
                      devices
                    </i>
                    <h5 className='font-weight-bolder mt-3'>
                      Fully Responsive
                    </h5>
                    <p className='pe-3'>
                      Regardless of the screen size, the website content will
                      naturally fit the given resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='my-5 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='row justify-content-center text-center my-sm-5'>
              <div className='col-lg-6'>
                <span className='badge badge-primary mb-3'>
                  Infinite combinations
                </span>
                <h2 className='text-dark mb-0'>Huge collection of sections</h2>
                <p className='lead'>
                  We have created multiple options for you to put together and
                  customise into pixel perfect pages.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <section></section>
      </section>
    </div>
  );
};

export default Main;
