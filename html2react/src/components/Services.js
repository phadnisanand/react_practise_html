import React from 'react'
import robot from '../assets/images/robot.png';
function Services() {
  return (
    <>
      <section className="pt-5 primary-bg" >
          <div className="container  section-1 bg-2 pt-5 position-relative">
              <div className="row g-5 pt-5">
                  <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5 p-r">
                      <div className="about-us">
                          <h1 className="text-white mb-4 animated slideInRight">Our Services</h1>
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                  <li className="breadcrumb-item active text-white" aria-current="page">Services</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
                  <div className="col-lg-6 col-lg-6 align-self-end text-center text-lg-end">
                      <div className="hero-img">
                          <img src= {robot} alt="image" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section>
          <div className="container section-5 py-5">
              <div className="row g-5 align-items-center">
                  <div className="col-lg-5">
                      <div className="our-services">
                          <a href="#" className="btn btn-sm border rounded-pill px-3 mb-3" tittle="Our Services">Our Services</a>
                          <h2 className="mb-4">Cutting-Edge AI Solutions Tailored for Your Business</h2>
                          <p className="mb-4">
                          Our mission is to exceed your expectations by delivering innovative solutions and unparalleled customer satisfaction. Proin id orci vel felis sollicitudin consequat eu vel ipsum. Nam vestibulum tortor sit amet justo malesuada, vel suscipit lorem vestibulum. Nulla facilisi. Aliquam erat volutpat. Aenean volutpat mi vel nunc ultrices, vitae tempus magna gravida.

                          </p>
                          <p className="mb-4">"Welcome to our site! We're dedicated to providing top-quality services and products that cater to your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet elit vel accumsan posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed sapien vitae ligula efficitur ultrices. Ut tempor justo at quam vehicula, quis convallis massa lobortis.</p>
                          <a href="#" className="btn btn-primary rounded-pill px-4">Read More</a>
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="row g-4">
                          <div className="col-md-6">
                              <div className="card border-0 shadow">
                                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                      <div className="service-icon btn-square">
                                          <i className="icon-home"></i>
                                      </div>
                                      <h5 className="mb-3">Machine learning</h5>
                                      <p>
                                          Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                          diam sed stet lorem.
                                      </p>
                                      <a className="btn px-3 mt-auto mx-auto" href="" titlle="Read More">Read More</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="card border-0 shadow">
                                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                      <div className="service-icon btn-square">
                                          <i className="icon-home"></i>
                                      </div>
                                      <h5 className="mb-3">Information Analytics</h5>
                                      <p>
                                          Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                          diam sed stet lorem.
                                      </p>
                                      <a className="btn px-3 mt-auto mx-auto" href="" titlle="Read More">Read More</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="card border-0 shadow">
                                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                      <div className="service-icon btn-square">
                                          <i className="icon-home"></i>
                                      </div>
                                      <h5 className="mb-3">Forecasting Insights</h5>
                                      <p>
                                          Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                          diam sed stet lorem.
                                      </p>
                                      <a className="btn px-3 mt-auto mx-auto" href="" titlle="Read More">Read More</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                          <div className="card border-0 shadow">
                                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                      <div className="service-icon btn-square">
                                          <i className="icon-home"></i>
                                      </div>
                                      <h5 className="mb-3">Automated Robotics</h5>
                                      <p>
                                          Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                          diam sed stet lorem.
                                      </p>
                                      <a className="btn px-3 mt-auto mx-auto" href="" titlle="Read More">Read More</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Services
