import React from 'react'
import robot from '../assets/images/robot.png';
import portfolio from '../assets/images/portfolio.png';
function Portfolio() {
  return (
    <>
      <section className="pt-5 primary-bg">
          <div className="container section-1 bg-2 pt-5 position-relative">
              <div className="row g-5 pt-5">
                  <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5 p-r">
                      <div className="about-us">
                          <h1 className="text-white mb-4 animated slideInRight">Our Projects</h1>
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                  <li className="breadcrumb-item active text-white" aria-current="page">Our Projects</li>
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
          <div className="container section-4 py-5">
              <div className="row py-5  justify-content-center">
                  <div className="col-lg-4">
                      <div className="section-title text-center">
                          <a href="#" className="btn btn-sm border rounded-pill px-3 mb-3">Case Study</a>
                          <h2>Explore Our Recent AI Case Studies</h2>
                      </div>
                  </div>
              </div>
              <div className="row g-4">
                  <div className="col-lg-4">
                      <div className="case-item position-relative overflow-hidden rounded mb-2" id="overlay">
                          <img className="img-fluid" src={portfolio} alt="project-1" />
                          <a href="#" className="case-overlay text-decoration-none">
                              <small>Robotic Automation</small>
                              <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita</h5>
                              <button className="btn btn-primary">
                                  Next
                                  <i></i>
                              </button>
                          </a>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="case-item position-relative overflow-hidden rounded mb-2" id="overlay">
                          <img className="img-fluid" src={portfolio} alt="project-2" />
                              <a href="#" className="case-overlay text-decoration-none">
                                  <small>Machine learning</small>
                                  <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita</h5>
                                  <button className="btn btn-primary">
                                      Next
                                      <i></i>
                                  </button>
                              </a>
                          </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="case-item position-relative overflow-hidden rounded mb-2" id="overlay">
                          <img className="img-fluid" src={portfolio} alt="project-3" />
                              <a href="#" className="case-overlay text-decoration-none">
                                  <small>Predictive Analysis</small>
                                  <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita</h5>
                                  <button className="btn btn-primary">
                                      Next
                                      <i></i>
                                  </button>
                              </a>
                          </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Portfolio
