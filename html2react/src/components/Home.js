import React from 'react'
import robot from '../assets/images/robot.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <section className="pt-5 primary-bg">
            <div className="container section-1 pt-5 position-relative">
                <div className="row g-5 py-5">
                    <div className="col-lg-7 align-self-center text-center text-lg-start mb-lg-5 p-r">
                        <div className="pt-lg-5 pb-lg-5">
                             <Link className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight" aria-current="page" to="/">TechVibe</Link>
                            <h1 className="text-white mb-4 animated slideInRight">Implementing AI Solutions for Your Business</h1>
                            <p className="text-white mb-4 animated slideInRight">
                                Tempor rebum no at dolore lorem clita rebum rebum ipsum
                                rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit
                            </p>
                            <div className="d-flex banner-btn">
                                <a href="#" className="btn btn-primary py-sm-3 px-sm-5 me-3 rounded-pill" tittle="Read More">Read More</a>
                                <a href="/contact-us" className="btn btn-primary-outline py-sm-3 px-sm-5 rounded-pill" tittle="Contact Us">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-lg-5 align-self-end text-center text-lg-end">
                        <div className="hero-img">
                            <img src={robot} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
