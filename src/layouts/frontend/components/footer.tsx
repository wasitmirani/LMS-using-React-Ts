
const Footer: React.FC = () => {
    return (
        <>

            <div className="footer-section footer-bg-1">

                {/*  Footer Widget Area Start*/}
                <div className="footer-widget-area section-padding-01">
                    <div className="container">
                        <div className="row gy-6">
                            <div className="col-lg-8">
                                <div className="row gy-6">

                                    <div className="col-sm-4">
                                        {/*  Footer Widget Start*/}
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">About</h4>

                                            <ul className="footer-widget__link">
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="course-grid-left-sidebar.html">Courses</a></li>
                                                <li><a href="instructors.html">Instructor</a></li>
                                                <li><a href="event-grid-sidebar.html">Events</a></li>
                                                <li><a href="become-an-instructor.html">Become A Teacher</a></li>
                                            </ul>
                                        </div>
                                        {/*  Footer Widget End*/}
                                    </div>
                                    <div className="col-sm-4">
                                        {/*  Footer Widget Start*/}
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">Links</h4>

                                            <ul className="footer-widget__link">
                                                <li><a href="blog-grid-left-sidebar.html">News & Blogs</a></li>
                                                <li><a href="#">Library</a></li>
                                                <li><a href="#">Gallery</a></li>
                                                <li><a href="#">Partners</a></li>
                                                <li><a href="#">Career</a></li>
                                            </ul>
                                        </div>
                                        {/*  Footer Widget End*/}
                                    </div>
                                    <div className="col-sm-4">
                                        {/*  Footer Widget Start*/}
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">Support</h4>

                                            <ul className="footer-widget__link">
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="faqs.html">FAQs</a></li>
                                                <li><a href="#">Forum</a></li>
                                                <li><a href="#">Sitemap</a></li>
                                            </ul>
                                        </div>
                                        {/*  Footer Widget End*/}
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                {/*  Footer Widget Start*/}
                                <div className="footer-widget text-center">
                                    <a href="#" className="footer-widget__logo"><img src="assets/images/dark-logo.png" alt="Logo" width="150" height="32" /></a>
                                    <div className="footer-widget__social">
                                        <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                                    </div>
                                    <p className="footer-widget__copyright">&copy; 2023 <span> EduMall </span> Made with <i className="fa fa-heart"></i> by <a href="https://1.envato.market/c/417168/275988/4415?subId1=hastheme&subId2=demo&subId3=https%3A%2F%2Fthemeforest.net%2Fuser%2Fbootxperts%2Fportfolio&u=https%3A%2F%2Fthemeforest.net%2Fuser%2Fbootxperts%2Fportfolio">BootXperts</a></p>
                                    <ul className="footer-widget__link flex-row gap-8 justify-content-center">
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                {/*  Footer Widget End*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Footer Widget Area End*/}

            </div>
            {/* Footer End*/}
        </>
    );

}

export default Footer