import React from 'react'
import robot from '../assets/images/robot.png';
function Contact() {
  return (
    <>
        <section className="pt-5 primary-bg">
            <div className="container section-1 bg-2 pt-5 position-relative">
                <div className="row g-5 pt-5">
                    <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5 p-r">
                        <div className="about-us">
                            <h1 className="text-white mb-4 animated slideInRight">Contact Us</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Contact Us</li>
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
            <div className="container section-4 contact-page py-5">
                <div className="row py-5  justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title text-center">
                            <a href="#" className="btn btn-sm border rounded-pill px-3 mb-3">Contact us</a>
                            <h2 className="mb-4">If you require further information, please reach out to us.</h2>
                            <p className="mb-5">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                        <div className="contact-form">
                            <form action="">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="" id="" cols="25" rows="3" className="form-control"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-lg">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          
    </>
  )
}

export default Contact
