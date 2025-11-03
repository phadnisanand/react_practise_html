import React from 'react'
import robot from '../assets/images/robot.png';
import about from '../assets/images/about.jpg';
function About() {
  return (
    <>
      <section className="pt-5 primary-bg">
          <div className="container section-1 bg-2 pt-5 position-relative">
              <div className="row g-5 pt-5">
                  <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5 p-r">
                      <div className="about-us">
                          <h1 className="text-white mb-4 animated slideInRight">About Us</h1>
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                  <li className="breadcrumb-item active text-white" aria-current="page">About Us </li>
                              </ol>
                          </nav>
                      </div>
                  </div>
                  <div className="col-lg-6 col-lg-6 align-self-end text-center text-lg-end">
                      <div className="hero-img">
                          <img src={robot} alt="image" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section>
          <div className="container section-2 py-5">
              <div className="row g-5 align-items-center py-5">
                  <div className="col-lg-6">
                      <div className="about-img">
                          <img className="img-fluid" src={about}/>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="about-content">
                          <div>
                              <a href="#" className="btn btn-sm border rounded-pill link  px-3 mb-4">About Us</a>
                              <h2 className="mb-4">Enhancing Your Business with Intelligent AI Solutions</h2>
                              <p className="mb-4">
                                  Welcome to our site! We're dedicated to providing top-quality services and products that cater to your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet elit vel accumsan posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed sapien vitae ligula efficitur ultrices. Ut tempor justo at quam vehicula, quis convallis massa lobortis
                              </p>
                              <p className="mb-4">Our mission is to exceed your expectations by delivering innovative solutions and unparalleled customer satisfaction. Proin id orci vel felis sollicitudin consequat eu vel ipsum. Nam vestibulum tortor sit amet justo malesuada, vel suscipit lorem vestibulum. Nulla facilisi. Aliquam erat volutpat. Aenean volutpat mi vel nunc ultrices, vitae tempus magna gravida.
                              </p>
                          </div>
                          <div className="d-flex justify-content-between">
                              <div>
                                  <h6 className="mb-3">
                                      <i className=""></i>
                                      Award Winning
                                  </h6>
                                  <h6>
                                      <i className="mb-0"></i>
                                      Professional Staff
                                  </h6>
                              </div>
                              <div>
                                  <h6 className="mb-3">
                                      <i className="mb-3"></i>
                                      24/7 Support
                                  </h6>
                                  <h6 className="mb-0">
                                      <i className="mb-0"></i>
                                      Fair Prices
                                  </h6>
                              </div>
                          </div>
                          <div className="d-flex align-items-center mt-4 social-links">
                              <a href="#" className="btn btn-primary rounded-pill px-4 me-3">Read More</a>

                              <a href="#" className="btn btn-outline-primary btn-square me-3">
                                  <i className="icon-facebook"></i>
                              </a>
                              <a href="#" className="btn btn-outline-primary btn-square me-3">
                                  <i className="icon-instagram"></i>
                              </a>
                              <a href="#" className="btn btn-outline-primary btn-square me-3">
                                  <i className="icon-youtube-play"></i>
                              </a>
                              <a href="#" className="btn btn-outline-primary btn-square me-3">
                                  <i className="icon-linkedin"></i>
                              </a>
                            
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default About
