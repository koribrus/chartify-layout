import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4'>
      <div className='container-fluid px-0'>
        <a
          className='navbar-brand font-weight-bolder ms-sm-3  d-none d-md-block'
          href=' https://demos.creative-tim.com/material-kit-pro/index '
          rel='tooltip'
          title='Designed and Coded by Creative Tim'
          data-placement='bottom'
          target='_blank'
        >
          Material Kit 2 PRO
        </a>
        <a
          className='navbar-brand font-weight-bolder ms-sm-3  d-block d-md-none'
          href=' https://demos.creative-tim.com/material-kit-pro/index '
          rel='tooltip'
          title='Designed and Coded by Creative Tim'
          data-placement='bottom'
          target='_blank'
        >
          Material Design
        </a>
        <a
          href='https://www.creative-tim.com/product/material-kit-pro#pricingCard'
          className='btn btn-sm  bg-gradient-primary  mb-0 ms-auto d-lg-none d-block'
        >
          Buy Now
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
          <span className='navbar-toggler-icon mt-2'>
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </span>
        </button>
        <div
          className='collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0'
          id='navigation'
        >
          <ul className='navbar-nav navbar-nav-hover ms-auto'>
            <li className='nav-item dropdown dropdown-hover mx-2'>
              <a
                role='button'
                className='nav-link ps-2 d-flex cursor-pointer align-items-center'
                id='dropdownMenuPages'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='material-icons opacity-6 me-2 text-md'>
                  dashboard
                </i>
                Pages
                <img
                  src=' ./assets/img/down-arrow-dark.svg  '
                  alt='down-arrow'
                  className='arrow ms-2 d-lg-block d-none'
                />
                <img
                  src='./assets/img/down-arrow-dark.svg'
                  alt='down-arrow'
                  className='arrow ms-1 d-lg-none d-block ms-auto'
                />
              </a>
              <div
                className='dropdown-menu dropdown-menu-animation ms-n3 dropdown-xl p-3 border-radius-xl mt-0 mt-lg-3'
                aria-labelledby='dropdownMenuPages'
              >
                <div className='row d-none d-lg-block'>
                  <div className='col-12 px-4 py-2'>
                    <div className='row'>
                      <div className='col-4 position-relative'>
                        <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1'>
                          Landing Pages
                        </div>
                        <a
                          href='./pages/coworking.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Coworking</span>
                        </a>
                        <a
                          href='./pages/rental.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Rental</span>
                        </a>
                        <a
                          href='./pages/case-study.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Case Study</span>
                        </a>
                        <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3'>
                          Company
                        </div>
                        <a
                          href='./pages/about-us.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>About Us</span>
                        </a>
                        <a
                          href='./pages/pricing.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Pricing</span>
                        </a>
                        <a
                          href='./pages/career.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Career</span>
                        </a>
                        <a
                          href='./pages/work-with-us.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Work with us</span>
                        </a>
                        <a
                          href='./pages/terms.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Terms &amp; Conditions</span>
                        </a>
                        <hr className='vertical dark' />
                      </div>
                      <div className='col-4 position-relative'>
                        <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1'>
                          Support
                        </div>
                        <a
                          href='./pages/help-center.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Help Center</span>
                        </a>
                        <a
                          href='./pages/help-center-basic.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Help Center Basic</span>
                        </a>
                        <a
                          href='./pages/contact-us.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Contact Us</span>
                        </a>
                        <a
                          href='./pages/contact-us-simple.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Contact Us Basic</span>
                        </a>
                        <a
                          href='./pages/faq.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>FAQ</span>
                        </a>
                        <a
                          href='./pages/privacy.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Privacy</span>
                        </a>
                        <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center mt-3 px-1'>
                          Apps
                        </div>
                        <a
                          href='./pages/mobile-app.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Mobile App</span>
                        </a>
                        <a
                          href='./pages/desktop-app.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Desktop App</span>
                        </a>
                        <hr className='vertical dark' />
                      </div>
                      <div className='col-4'>
                        <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1'>
                          Blogs
                        </div>
                        <a
                          href='./pages/blog/single-article.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Single Article</span>
                        </a>
                        <a
                          href='./pages/blog/blog-posts.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Blog Posts</span>
                        </a>
                        <a
                          href='./pages/blog/categories.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Categories</span>
                        </a>
                        <a
                          href='./pages/blog/author.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Author</span>
                        </a>
                        <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center mt-3 px-1'>
                          Extra
                        </div>
                        <a
                          href='./pages/automotive.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Automotive</span>
                        </a>
                        <a
                          href='./pages/virtual-reality.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Virtual Reality</span>
                        </a>
                        <a
                          href='./pages/smart-home.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Smart Home</span>
                        </a>
                        <a
                          href='./pages/chat.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Chat</span>
                        </a>
                        <a
                          href='./pages/product-page.html'
                          className='dropdown-item border-radius-md'
                        >
                          <span>Product Page</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-lg-none'>
                  <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0'>
                    Landing Pages
                  </div>
                  <a
                    href='./pages/coworking.html'
                    className='dropdown-item border-radius-md'
                  >
                    Coworking
                  </a>
                  <a
                    href='./pages/rental.html'
                    className='dropdown-item border-radius-md'
                  >
                    Rental
                  </a>
                  <a
                    href='./pages/case-study.html'
                    className='dropdown-item border-radius-md'
                  >
                    Case Study
                  </a>
                  <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3'>
                    Company
                  </div>
                  <a
                    href='./pages/about-us.html'
                    className='dropdown-item border-radius-md'
                  >
                    About Us
                  </a>
                  <a
                    href='./pages/pricing.html'
                    className='dropdown-item border-radius-md'
                  >
                    Pricing
                  </a>
                  <a
                    href='./pages/career.html'
                    className='dropdown-item border-radius-md'
                  >
                    Career
                  </a>
                  <a
                    href='./pages/work-with-us.html'
                    className='dropdown-item border-radius-md'
                  >
                    Work with us
                  </a>
                  <a
                    href='./pages/terms.html'
                    className='dropdown-item border-radius-md'
                  >
                    Terms &amp; Conditions
                  </a>
                  <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3'>
                    Support
                  </div>
                  <a
                    href='./pages/help-center.html'
                    className='dropdown-item border-radius-md'
                  >
                    Help Center
                  </a>
                  <a
                    href='./pages/help-center-basic.html'
                    className='dropdown-item border-radius-md'
                  >
                    Help Center Basic
                  </a>
                  <a
                    href='./pages/contact-us.html'
                    className='dropdown-item border-radius-md'
                  >
                    Contact Us
                  </a>
                  <a
                    href='./pages/contact-us-simple.html'
                    className='dropdown-item border-radius-md'
                  >
                    Contact Us Basic
                  </a>
                  <a
                    href='./pages/faq.html'
                    className='dropdown-item border-radius-md'
                  >
                    FAQ
                  </a>
                  <a
                    href='./pages/privacy.html'
                    className='dropdown-item border-radius-md'
                  >
                    Privacy
                  </a>
                  <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center mt-3 px-0'>
                    Apps
                  </div>
                  <a
                    href='./pages/mobile-app.html'
                    className='dropdown-item border-radius-md'
                  >
                    Mobile App
                  </a>
                  <a
                    href='./pages/desktop-app.html'
                    className='dropdown-item border-radius-md'
                  >
                    Desktop App
                  </a>
                  <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center mt-3 px-0'>
                    Blogs
                  </div>
                  <a
                    href='./pages/blog/single-article.html'
                    className='dropdown-item border-radius-md'
                  >
                    Single Article
                  </a>
                  <a
                    href='./pages/blog/blog-posts.html'
                    className='dropdown-item border-radius-md'
                  >
                    Blog Posts
                  </a>
                  <a
                    href='./pages/blog/categories.html'
                    className='dropdown-item border-radius-md'
                  >
                    Categories
                  </a>
                  <a
                    href='./pages/blog/author.html'
                    className='dropdown-item border-radius-md'
                  >
                    Author
                  </a>
                  <div className='dropdown-header text-dark font-weight-bolder d-flex align-items-center mt-3 px-0'>
                    Extra
                  </div>
                  <a
                    href='./pages/automotive.html'
                    className='dropdown-item border-radius-md'
                  >
                    Automotive
                  </a>
                  <a
                    href='./pages/virtual-reality.html'
                    className='dropdown-item border-radius-md'
                  >
                    Virtual Reality
                  </a>
                  <a
                    href='./pages/smart-home.html'
                    className='dropdown-item border-radius-md'
                  >
                    Smart Home
                  </a>
                  <a
                    href='./pages/chat.html'
                    className='dropdown-item border-radius-md'
                  >
                    Chat
                  </a>
                  <a
                    href='./pages/product-page.html'
                    className='dropdown-item border-radius-md'
                  >
                    Product Page
                  </a>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown dropdown-hover mx-2'>
              <a
                role='button'
                className='nav-link ps-2 d-flex cursor-pointer align-items-center'
                id='dropdownMenuAccount'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='material-icons opacity-6 me-2 text-md'>
                  contacts
                </i>
                Account
                <img
                  src=' ./assets/img/down-arrow-dark.svg  '
                  alt='down-arrow'
                  className='arrow ms-2 d-lg-block d-none'
                />
                <img
                  src='./assets/img/down-arrow-dark.svg'
                  alt='down-arrow'
                  className='arrow ms-1 d-lg-none d-block ms-auto'
                />
              </a>
              <div
                className='dropdown-menu dropdown-menu-animation dropdown-md border-radius-xl p-3 mt-0 mt-lg-3'
                aria-labelledby='dropdownMenuAccount'
              >
                <div className='d-none d-lg-flex'>
                  <ul className='list-group w-100'>
                    <li className='nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1'
                        id='dropdownSignIn'
                      >
                        <span>Sign In</span>
                        <img
                          src='./assets/img/down-arrow.svg'
                          alt='down-arrow'
                          className='arrow ms-auto'
                        />
                      </a>
                      <div
                        className='dropdown-menu mt-0 py-3 px-2'
                        aria-labelledby='dropdownSignIn'
                      >
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/sign-in/sign-in-cover.html'
                        >
                          <span>Cover</span>
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/sign-in/sign-in-illustration.html'
                        >
                          <span>Illustration</span>
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/sign-in/sign-in-basic.html'
                        >
                          <span>Basic</span>
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md'
                          href='./pages/sign-in/sign-in-simple.html'
                        >
                          <span>Simple</span>
                        </a>
                      </div>
                    </li>
                    <li className='nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1'
                        id='dropdownSignUp'
                      >
                        <span>Sign Up</span>
                        <img
                          src='./assets/img/down-arrow.svg'
                          alt='down-arrow'
                          className='arrow ms-auto'
                        />
                      </a>
                      <div
                        className='dropdown-menu mt-0 py-3 px-2'
                        aria-labelledby='dropdownSignUp'
                      >
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/sign-up/sign-up-cover.html'
                        >
                          <span>Cover</span>
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/sign-up/sign-up-illustration.html'
                        >
                          <span>Illustration</span>
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/sign-up/sign-up-basic.html'
                        >
                          <span>Basic</span>
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/sign-up/sign-up-simple.html'
                        >
                          <span>Simple</span>
                        </a>
                      </div>
                    </li>
                    <li className='nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1'
                        id='dropdownPasswordReset'
                      >
                        <span>Password Reset</span>
                        <img
                          src='./assets/img/down-arrow.svg'
                          alt='down-arrow'
                          className='arrow ms-auto'
                        />
                      </a>
                      <div
                        className='dropdown-menu mt-0 py-3 px-2'
                        aria-labelledby='dropdownPasswordReset'
                      >
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/reset/reset-cover.html'
                        >
                          <span>Cover</span>
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/reset/reset-illustration.html'
                        >
                          <span>Illustration</span>
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/reset/reset-basic.html'
                        >
                          <span>Basic</span>
                        </a>
                      </div>
                    </li>
                    <li className='nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1'
                        id='dropdownError'
                      >
                        <span>Error Pages</span>
                        <img
                          src='./assets/img/down-arrow.svg'
                          alt='down-arrow'
                          className='arrow ms-auto'
                        />
                      </a>
                      <div
                        className='dropdown-menu mt-0 py-3 px-2'
                        aria-labelledby='dropdownError'
                      >
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/error-404.html'
                        >
                          <span>404</span>
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./pages/error-500.html'
                        >
                          <span>500</span>
                        </a>
                      </div>
                    </li>
                    <li className='nav-item list-group-item border-0 p-0'>
                      <a
                        href='./pages/coming-soon.html'
                        className='dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1'
                      >
                        <span>Coming Soon</span>
                      </a>
                    </li>
                    <li className='nav-item list-group-item border-0 p-0'>
                      <a
                        href='./pages/2fa-security.html'
                        className='dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1'
                      >
                        <span>2FA Security</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='row d-lg-none'>
                  <div className='col-12 d-flex justify-content-center flex-column'>
                    <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0'>
                      Sign In
                    </h6>
                    <a
                      href='./pages/sign-in/sign-in-cover.html'
                      className='dropdown-item border-radius-md'
                    >
                      Cover
                    </a>
                    <a
                      href='./pages/sign-in/sign-in-illustration.html'
                      className='dropdown-item border-radius-md'
                    >
                      Illustration
                    </a>
                    <a
                      href='./pages/sign-in/sign-in-basic.html'
                      className='dropdown-item border-radius-md'
                    >
                      Basic
                    </a>
                    <a
                      href='./pages/sign-in/sign-in-simple.html'
                      className='dropdown-item border-radius-md'
                    >
                      Simple
                    </a>
                    <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center mt-3 px-0'>
                      Sign Up
                    </h6>
                    <a
                      href='./pages/sign-up/sign-up-cover.html'
                      className='dropdown-item border-radius-md'
                    >
                      Cover
                    </a>
                    <a
                      href='./pages/sign-up/sign-up-illustration.html'
                      className='dropdown-item border-radius-md'
                    >
                      Illustration
                    </a>
                    <a
                      href='./pages/sign-up/sign-up-basic.html'
                      className='dropdown-item border-radius-md'
                    >
                      Basic
                    </a>
                    <a
                      href='./pages/sign-up/sign-up-simple.html'
                      className='dropdown-item border-radius-md'
                    >
                      Simple
                    </a>
                    <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center mt-3 px-0'>
                      Password Reset
                    </h6>
                    <a
                      href='./pages/reset/reset-cover.html'
                      className='dropdown-item border-radius-md'
                    >
                      Cover
                    </a>
                    <a
                      href='./pages/reset/reset-illustration.html'
                      className='dropdown-item border-radius-md'
                    >
                      Illustration
                    </a>
                    <a
                      href='./pages/reset/reset-basic.html'
                      className='dropdown-item border-radius-md'
                    >
                      Basic
                    </a>
                    <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center mt-3 px-0'>
                      Error Pages
                    </h6>
                    <a
                      href='./pages/error-404.html'
                      className='dropdown-item border-radius-md'
                    >
                      404
                    </a>
                    <a
                      href='./pages/error-500.html'
                      className='dropdown-item border-radius-md'
                    >
                      500
                    </a>
                    <hr className='horizontal dark' />
                    <a
                      href='./pages/coming-soon.html'
                      className='dropdown-item border-radius-md'
                    >
                      Coming Soon
                    </a>
                    <a
                      href='./pages/2fa-security.html'
                      className='dropdown-item border-radius-md'
                    >
                      2FA Security
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown dropdown-hover mx-2'>
              <a
                role='button'
                className='nav-link ps-2 d-flex cursor-pointer align-items-center'
                id='dropdownMenuBlocks'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='material-icons opacity-6 me-2 text-md'>
                  view_day
                </i>
                Sections
                <img
                  src=' ./assets/img/down-arrow-dark.svg  '
                  alt='down-arrow'
                  className='arrow ms-2 d-lg-block d-none'
                />
                <img
                  src='./assets/img/down-arrow-dark.svg'
                  alt='down-arrow'
                  className='arrow ms-1 d-lg-none d-block ms-auto'
                />
              </a>
              <div
                className='dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3'
                aria-labelledby='dropdownMenuBlocks'
              >
                <div className='d-none d-lg-block'>
                  <ul className='list-group'>
                    <li className='nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href='./index.html'
                      >
                        <div className='d-flex'>
                          <div className='w-100 d-flex align-items-center justify-content-between'>
                            <div>
                              <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                Page Sections
                              </h6>
                              <span className='text-sm'>
                                See all 109 sections
                              </span>
                            </div>
                            <img
                              src='./assets/img/down-arrow.svg'
                              alt='down-arrow'
                              className='arrow'
                            />
                          </div>
                        </div>
                      </a>
                      <div className='dropdown-menu mt-0 py-3 px-2 mt-3'>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/hero-sections.html'
                        >
                          Page Headers
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/features.html'
                        >
                          Features
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/pricing.html'
                        >
                          Pricing
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/faq.html'
                        >
                          FAQ
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/blog-posts.html'
                        >
                          Blog Posts
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/testimonials.html'
                        >
                          Testimonials
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/teams.html'
                        >
                          Teams
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/stats.html'
                        >
                          Stats
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/call-to-actions.html'
                        >
                          Call to Actions
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/applications.html'
                        >
                          Applications
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/logo-areas.html'
                        >
                          Logo Areas
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/footers.html'
                        >
                          Footers
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/general-cards.html'
                        >
                          General Cards
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/page-sections/content-sections.html'
                        >
                          Content Sections
                        </a>
                      </div>
                    </li>
                    <li className='nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href='./index.html'
                      >
                        <div className='d-flex'>
                          <div className='w-100 d-flex align-items-center justify-content-between'>
                            <div>
                              <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                Navigation
                              </h6>
                              <span className='text-sm'>
                                See all 9 navigations
                              </span>
                            </div>
                            <img
                              src='./assets/img/down-arrow.svg'
                              alt='down-arrow'
                              className='arrow'
                            />
                          </div>
                        </div>
                      </a>
                      <div className='dropdown-menu mt-0 py-3 px-2 mt-3'>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/navigation/navbars.html'
                        >
                          Navbars
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/navigation/nav-tabs.html'
                        >
                          Nav Tabs
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/navigation/pagination.html'
                        >
                          Pagination
                        </a>
                      </div>
                    </li>
                    <li className='nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href='./index.html'
                      >
                        <div className='d-flex'>
                          <div className='w-100 d-flex align-items-center justify-content-between'>
                            <div>
                              <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                Input Areas
                              </h6>
                              <span className='text-sm'>
                                See all 19 input areas
                              </span>
                            </div>
                            <img
                              src='./assets/img/down-arrow.svg'
                              alt='down-arrow'
                              className='arrow'
                            />
                          </div>
                        </div>
                      </a>
                      <div className='dropdown-menu mt-0 py-3 px-2 mt-3'>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/input-areas/newsletters.html'
                        >
                          Newsletter
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/input-areas/contact-sections.html'
                        >
                          Contact Sections
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/input-areas/inputs.html'
                        >
                          Inputs
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/input-areas/forms.html'
                        >
                          Forms
                        </a>
                      </div>
                    </li>
                    <li className='nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href='./index.html'
                      >
                        <div className='d-flex'>
                          <div className='w-100 d-flex align-items-center justify-content-between'>
                            <div>
                              <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                Attention Catchers
                              </h6>
                              <span className='text-sm'>
                                See all 14 examples
                              </span>
                            </div>
                            <img
                              src='./assets/img/down-arrow.svg'
                              alt='down-arrow'
                              className='arrow'
                            />
                          </div>
                        </div>
                      </a>
                      <div className='dropdown-menu mt-0 py-3 px-2 mt-3'>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/attention-catchers/alerts.html'
                        >
                          Alerts
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/attention-catchers/notifications.html'
                        >
                          Notifications
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/attention-catchers/modals.html'
                        >
                          Modals
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/attention-catchers/tooltips-popovers.html'
                        >
                          Tooltips &amp; Popovers
                        </a>
                      </div>
                    </li>
                    <li className='nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href='./index.html'
                      >
                        <div className='d-flex'>
                          <div className='w-100 d-flex align-items-center justify-content-between'>
                            <div>
                              <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                                Elements
                              </h6>
                              <span className='text-sm'>
                                See all 32 elements
                              </span>
                            </div>
                            <img
                              src='./assets/img/down-arrow.svg'
                              alt='down-arrow'
                              className='arrow'
                            />
                          </div>
                        </div>
                      </a>
                      <div className='dropdown-menu mt-0 py-3 px-2 mt-3'>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/avatars.html'
                        >
                          Avatars
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/badges.html'
                        >
                          Badges
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/breadcrumbs.html'
                        >
                          Breadcrumbs
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/buttons.html'
                        >
                          Buttons
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/button-groups.html'
                        >
                          Button Groups
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/dropdowns.html'
                        >
                          Dropdowns
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/progress-bars.html'
                        >
                          Progress Bars
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/social-buttons.html'
                        >
                          Social Buttons
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/tables.html'
                        >
                          Tables
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/toggles.html'
                        >
                          Toggles
                        </a>
                        <a
                          className='dropdown-item ps-3 border-radius-md mb-1'
                          href='./sections/elements/typography.html'
                        >
                          Typography
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='row d-lg-none'>
                  <div className='col-md-12'>
                    <div className='d-flex mb-2'>
                      <div className='w-100 d-flex align-items-center justify-content-between'>
                        <div>
                          <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                            Page Sections
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/hero-sections.html'
                    >
                      Page Headers
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/features.html'
                    >
                      Features
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/pricing.html'
                    >
                      Pricing
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/faq.html'
                    >
                      FAQ
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/blog-posts.html'
                    >
                      Blog Posts
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/testimonials.html'
                    >
                      Testimonials
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/teams.html'
                    >
                      Teams
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/stats.html'
                    >
                      Stats
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/call-to-actions.html'
                    >
                      Call to Actions
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/applications.html'
                    >
                      Applications
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/logo-areas.html'
                    >
                      Logo Areas
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/footers.html'
                    >
                      Footers
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/general-cards.html'
                    >
                      General Cards
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/page-sections/content-sections.html'
                    >
                      Content Sections
                    </a>
                    <div className='d-flex mb-2 mt-3'>
                      <div className='w-100 d-flex align-items-center justify-content-between'>
                        <div>
                          <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                            Navigation
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/navigation/navbars.html'
                    >
                      Navbars
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/navigation/nav-tabs.html'
                    >
                      Nav Tabs
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/navigation/pagination.html'
                    >
                      Pagination
                    </a>
                    <div className='d-flex mb-2 mt-3'>
                      <div className='w-100 d-flex align-items-center justify-content-between'>
                        <div>
                          <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                            Input Areas
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/input-areas/newsletters.html'
                    >
                      Newsletter
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/input-areas/contact-sections.html'
                    >
                      Contact Sections
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/input-areas/inputs.html'
                    >
                      Inputs
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/input-areas/forms.html'
                    >
                      Forms
                    </a>
                    <div className='d-flex mb-2 mt-3'>
                      <div className='w-100 d-flex align-items-center justify-content-between'>
                        <div>
                          <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                            Attention Catchers
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/attention-catchers/alerts.html'
                    >
                      Alerts
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/attention-catchers/notifications.html'
                    >
                      Notifications
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/attention-catchers/modals.html'
                    >
                      Modals
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/attention-catchers/tooltips-popovers.html'
                    >
                      Tooltips &amp; Popovers
                    </a>
                    <div className='d-flex mb-2 mt-3'>
                      <div className='w-100 d-flex align-items-center justify-content-between'>
                        <div>
                          <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                            Elements
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/avatars.html'
                    >
                      Avatars
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/badges.html'
                    >
                      Badges
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/breadcrumbs.html'
                    >
                      Breadcrumbs
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/buttons.html'
                    >
                      Buttons
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/button-groups.html'
                    >
                      Button Groups
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/dropdowns.html'
                    >
                      Dropdowns
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/progress-bars.html'
                    >
                      Progress Bars
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/social-buttons.html'
                    >
                      Social Buttons
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/tables.html'
                    >
                      Tables
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/toggles.html'
                    >
                      Toggles
                    </a>
                    <a
                      className='dropdown-item ps-3 border-radius-md mb-1'
                      href='./sections/elements/typography.html'
                    >
                      Typography
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown dropdown-hover mx-2'>
              <a
                role='button'
                className='nav-link ps-2 d-flex cursor-pointer align-items-center'
                id='dropdownMenuDocs'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='material-icons opacity-6 me-2 text-md'>article</i>
                Docs
                <img
                  src=' ./assets/img/down-arrow-dark.svg  '
                  alt='down-arrow'
                  className='arrow ms-2 d-lg-block d-none'
                />
                <img
                  src='./assets/img/down-arrow-dark.svg'
                  alt='down-arrow'
                  className='arrow ms-1 d-lg-none d-block ms-auto'
                />
              </a>
              <div
                className='dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg'
                aria-labelledby='dropdownMenuDocs'
              >
                <div className='d-none d-lg-block'>
                  <ul className='list-group'>
                    <li className='nav-item list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href=' https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit '
                      >
                        <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                          Getting Started
                        </h6>
                        <span className='text-sm'>
                          All about overview, quick start, license and contents
                        </span>
                      </a>
                    </li>
                    <li className='nav-item list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href=' https://www.creative-tim.com/learning-lab/bootstrap/colors/material-kit '
                      >
                        <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                          Foundation
                        </h6>
                        <span className='text-sm'>
                          See our colors, icons and typography
                        </span>
                      </a>
                    </li>
                    <li className='nav-item list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href=' https://www.creative-tim.com/learning-lab/bootstrap/alerts/material-kit '
                      >
                        <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                          Components
                        </h6>
                        <span className='text-sm'>
                          Explore our collection of fully designed components
                        </span>
                      </a>
                    </li>
                    <li className='nav-item list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href=' https://www.creative-tim.com/learning-lab/bootstrap/datepicker/material-kit '
                      >
                        <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                          Plugins
                        </h6>
                        <span className='text-sm'>
                          Check how you can integrate our plugins
                        </span>
                      </a>
                    </li>
                    <li className='nav-item list-group-item border-0 p-0'>
                      <a
                        className='dropdown-item py-2 ps-3 border-radius-md'
                        href=' https://www.creative-tim.com/learning-lab/bootstrap/utilities/material-kit '
                      >
                        <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                          Utility Classes
                        </h6>
                        <span className='text-sm'>
                          For those who want flexibility, use our utility
                          classes
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='row d-lg-none'>
                  <div className='col-md-12 g-0'>
                    <a
                      className='dropdown-item py-2 ps-3 border-radius-md'
                      href='./pages/about-us.html'
                    >
                      <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                        Getting Started
                      </h6>
                      <span className='text-sm'>
                        All about overview, quick start, license and contents
                      </span>
                    </a>
                    <a
                      className='dropdown-item py-2 ps-3 border-radius-md'
                      href='./pages/about-us.html'
                    >
                      <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                        Foundation
                      </h6>
                      <span className='text-sm'>
                        See our colors, icons and typography
                      </span>
                    </a>
                    <a
                      className='dropdown-item py-2 ps-3 border-radius-md'
                      href='./pages/about-us.html'
                    >
                      <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                        Components
                      </h6>
                      <span className='text-sm'>
                        Explore our collection of fully designed components
                      </span>
                    </a>
                    <a
                      className='dropdown-item py-2 ps-3 border-radius-md'
                      href='./pages/about-us.html'
                    >
                      <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                        Plugins
                      </h6>
                      <span className='text-sm'>
                        Check how you can integrate our plugins
                      </span>
                    </a>
                    <a
                      className='dropdown-item py-2 ps-3 border-radius-md'
                      href='./pages/about-us.html'
                    >
                      <h6 className='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
                        Utility Classes
                      </h6>
                      <span className='text-sm'>
                        For those who want flexibility, use our utility classes
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className='navbar-nav d-lg-block d-none'>
            <li className='nav-item'>
              <a className='btn btn-sm  bg-gradient-primary  mb-0'>Buy Now</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
