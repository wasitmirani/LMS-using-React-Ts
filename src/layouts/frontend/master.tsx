import React, { useEffect } from "react";
import NavBarMenu from "./components/navbar";
import NotFound from "../../frontend/pages/error/404";

import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import Footer from "./components/footer";
import Home from "../../frontend/pages/home/home";




const lazyLoadFromCDN = (callback: () => void) => {
    const mathJax = document.createElement('script');
    mathJax.setAttribute('src', 'assets/js/main.js');
    mathJax.addEventListener('load', callback);
    document.head.appendChild(mathJax);


};

const Master: React.FC = () => {


    useEffect(() => {
        lazyLoadFromCDN(() => {

            console.log("loaded");
        });
    }, []);
    return (

        <>
            <Router>

                <main className="main-wrapper">

                    <div className="header-section header-sticky">
                        <div className="header-top d-none d-sm-block">
                            <div className="container">


                                <div className="header-top-bar-wrap">
                                    <div className="header-top-bar-wrap__text text-center">
                                        <p>Keep learning with free resources during <strong>COVID-19.</strong> <a href="#">Learn more</a></p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        {/*  Header Main Stater*/}
                        <NavBarMenu></NavBarMenu>
                        {/*  Header Main End*/}

                    </div>
                    {/* Header End*/}


                    <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/about" element={<About />} /> */}
                    <Route path="*" element={<NotFound />} />

                  </Routes>

                    {/* Footer Component */}
                    <Footer></Footer>
                    {/*Back To Start  */}
                    <button id="backBtn" className="back-to-top backBtn">
                        <i className="arrow-top fas fa-arrow-up"></i>
                        <i className="arrow-bottom fas fa-arrow-up"></i>
                    </button>
                    {/*Back To End */}


                </main>

                {/* Log In Modal Start*/}
                <div className="modal fade" id="loginModal">
                    <div className="modal-dialog modal-dialog-centered modal-login">

                        {/*  Modal Wrapper Start*/}
                        <div className="modal-wrapper">
                            <button className="modal-close" data-bs-dismiss="modal"><i className="fas fa-times"></i></button>

                            {/*  Modal Content Start*/}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Login</h5>
                                    <p className="modal-description">Don't have an account yet? <button data-bs-toggle="modal" data-bs-target="#registerModal">Sign up for free</button></p>
                                </div>
                                <div className="modal-body">
                                    <form action="#">
                                        <div className="modal-form">
                                            <label className="form-label">Username or email</label>
                                            <input type="text" className="form-control" placeholder="Your username or email" />
                                        </div>
                                        <div className="modal-form">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="modal-form d-flex justify-content-between flex-wrap gap-2">
                                            <div className="form-check">
                                                <input type="checkbox" id="rememberme" />
                                                <label htmlFor="rememberme">Remember me</label>
                                            </div>
                                            <div className="text-end">
                                                <a className="modal-form__link" href="#">Forgot your password?</a>
                                            </div>
                                        </div>
                                        <div className="modal-form">
                                            <button className="btn btn-primary btn-hover-secondary w-100">Log In</button>
                                        </div>
                                    </form>

                                    <div className="modal-social-option">
                                        <p>or Log-in with</p>

                                        <ul className="modal-social-btn">
                                            <li><a href="#" className="btn facebook"><i className="fab fa-facebook-square"></i> Gacebook</a></li>
                                            <li><a href="#" className="btn google"><i className="fab fa-google"></i> Google</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*  Modal Content End*/}

                        </div>
                        {/*  Modal Wrapper End*/}

                    </div>
                </div>
                {/* Log In Modal End*/}

                {/* Log In Modal Start*/}
                <div className="modal fade" id="registerModal">
                    <div className="modal-dialog modal-dialog-centered modal-register">

                        {/*  Modal Wrapper Start*/}
                        <div className="modal-wrapper">
                            <button className="modal-close" data-bs-dismiss="modal"><i className="fas fa-times"></i></button>

                            {/*  Modal Content Start*/}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Sign Up</h5>
                                    <p className="modal-description">Already have an account? <button data-bs-toggle="modal" data-bs-target="#loginModal">Log in</button></p>
                                </div>
                                <div className="modal-body">

                                    <form action="#">
                                        <div className="row gy-5">
                                            <div className="col-md-6">
                                                <div className="modal-form">
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" className="form-control" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="modal-form">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="modal-form">
                                                    <label className="form-label">Username</label>
                                                    <input type="text" className="form-control" placeholder="username" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="modal-form">
                                                    <label className="form-label">Email</label>
                                                    <input type="text" className="form-control" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="modal-form">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="modal-form">
                                                    <label className="form-label">Re-Enter Password</label>
                                                    <input type="password" className="form-control" placeholder="Re-Enter Password" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="modal-form form-check">
                                                    <input type="checkbox" id="privacy" />
                                                    <label >Accept the Terms and Privacy Policy</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="modal-form">
                                                    <button className="btn btn-primary btn-hover-secondary w-100">Register</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            {/*  Modal Content End*/}

                        </div>
                        {/*  Modal Wrapper End*/}

                    </div>
                </div>
                {/* Log In Modal End*/}

                {/* Edumall Demo Option Start*/}
                <div className="edumall-demo-option">

                    <div className="edumall-demo-option__toolbar">
                        <button className="toolbar-action demo-open" data-bs-tooltip="tooltip" data-bs-placement="left" title="Select Demo"><i className="fas fa-pencil-ruler"></i></button>
                        <a className="toolbar-action" href="https://hasthemes.com/contact-us/" data-bs-tooltip="tooltip" data-bs-placement="left" title="Support Channel"><i className="far fa-life-ring"></i></a>
                        <a className="toolbar-action" href="https://1.envato.market/qnL5nL" data-bs-tooltip="tooltip" data-bs-placement="left" title="Purchase EduMall"><i className="fas fa-shopping-basket"></i></a>
                    </div>

                    <div className="edumall-demo-option__panel">

                        <div className="edumall-demo-option__header">
                            <h5 className="edumall-demo-option__title">EduMall - Professional LMS Education Center HTML Template</h5>
                            <a className="edumall-demo-option__btn btn btn-primary btn-hover-secondary" href="https://1.envato.market/qnL5nL"><i className="fas fa-shopping-basket"></i> Buy Now</a>
                        </div>

                        <div className="edumall-demo-option__body">
                            <div className="edumall-demo-option-item">
                                <a href="" data-bs-tooltip="tooltip" data-bs-placement="top" title="Landing Page">
                                    <img src="assets/images/demo/landing.jpg" alt="" />
                                </a>
                            </div>
                            <div className="edumall-demo-option-item">
                                <a href="index.html" data-bs-tooltip="tooltip" data-bs-placement="top" title="Main Demo">
                                    <img src="assets/images/demo/home-01.jpg" alt="Home" width="130" height="158" />
                                </a>
                            </div>
                            <div className="edumall-demo-option-item">
                                <a href="index-course-hub.html" data-bs-tooltip="tooltip" data-bs-placement="top" title="Course Hub">
                                    <img src="assets/images/demo/home-02.jpg" alt="Home" width="130" height="158" />
                                </a>
                            </div>
                            <div className="edumall-demo-option-item">
                                <a href="index-online-academy.html" data-bs-tooltip="tooltip" data-bs-placement="top" title="Online Academy">
                                    <img src="assets/images/demo/home-03.jpg" alt="Home" width="130" height="158" />
                                </a>
                            </div>
                            <div className="edumall-demo-option-item">
                                <a href="index-education-center.html" data-bs-tooltip="tooltip" data-bs-placement="top" title="Education Center">
                                    <img src="assets/images/demo/home-04.jpg" alt="Home" width="130" height="158" />
                                </a>
                            </div>
                            <div className="edumall-demo-option-item">
                                <a href="index-university.html" data-bs-tooltip="tooltip" data-bs-placement="top" title="University">
                                    <img src="assets/images/demo/home-05.jpg" alt="Home" width="130" height="158" />
                                </a>
                            </div>
                            <div className="edumall-demo-option-item">
                                <a href="index-language-academic.html" data-bs-tooltip="tooltip" data-bs-placement="top" title="Language Academic">
                                    <img src="assets/images/demo/home-06.jpg" alt="Home" width="130" height="158" />
                                </a>
                            </div>
                            <div className="edumall-demo-option-item">
                                <a href="index-single-instructor.html" data-bs-tooltip="tooltip" data-bs-placement="top" title="Single Instructor">
                                    <img src="assets/images/demo/home-07.jpg" alt="Home" width="130" height="158" />
                                </a>
                            </div>
                            <div className="edumall-demo-option-item">
                                <a href="index-dev.html" data-bs-tooltip="tooltip" data-bs-placement="top" title="Dev">
                                    <img src="assets/images/demo/home-08.jpg" alt="Home" width="130" height="158" />
                                </a>
                            </div>
                            <div className="edumall-demo-option-item">
                                <a href="index-online-art.html" data-bs-tooltip="tooltip" data-bs-placement="top" title="Online Art">
                                    <img src="assets/images/demo/home-09.jpg" alt="Home" width="130" height="158" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            
            </Router>
        </>

    );
}
export default Master;