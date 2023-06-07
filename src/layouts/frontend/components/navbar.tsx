import { Link } from "react-router-dom";

{/* <Router>
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
</nav>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
</Router> */}


const navbarmenu: React.FC=()=>{

  return (
    <>
     <div className="header-main">
                        <div className="container">

                            <div className="header-main-wrapper">

                                {/*  {/*  Header Logo Start*/}
                                <div className="header-logo">
                                    <a className="header-logo__logo" href="index.html">
                                        <img src="assets/images/dark-logo.png" width="296" height="64" alt="Logo" />

                                    </a>
                                </div>
                                {/*  Header Logo End*/}

                                {/*  Header Category Menu Start*/}
                                <div className="header-category-menu d-none d-xl-block">
                                    <a href="#" className="header-category-toggle">
                                        <div className="header-category-toggle__icon">
                                            {/* svg */}
                                        </div>
                                        <div className="header-category-toggle__text">Category</div>
                                    </a>

                                    <div className="header-category-dropdown-wrap">
                                        <ul className="header-category-dropdown">
                                            <li>
                                                <a href="shop-left-sidebar.html"> Design <span className="toggle-sub-menu"></span></a>

                                                <ul className="sub-categories children">
                                                    <li><a href="shop-left-sidebar.html">All Business</a></li>
                                                    <li>
                                                        <a href="#">Communications<span className="toggle-sub-menu"></span></a>

                                                        <ul className="course-list children">
                                                            <li>
                                                                <a className="categories-course" href="shop-single-list-left-sidebar.html">
                                                                    <div className="categories-course__thumbnail">
                                                                        <img src="assets/images/courses/courses-1.jpg" alt="Course" width="62" height="50" />
                                                                    </div>
                                                                    <div className="categories-course__caption">
                                                                        <h5 className="categories-course__title">Illustrator 2020 MasterclassName</h5>
                                                                        <div className="categories-course__price">
                                                                            <span className="categories-course__sale-price">$22.00</span>
                                                                            <span className="categories-course__regular-price">$30.00</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="categories-course" href="shop-single-list-left-sidebar.html">
                                                                    <div className="categories-course__thumbnail">
                                                                        <img src="assets/images/courses/courses-2.jpg" alt="Course" width="62" height="50" />
                                                                    </div>
                                                                    <div className="categories-course__caption">
                                                                        <h5 className="categories-course__title">Illustrator 2020 MasterclassName</h5>
                                                                        <div className="categories-course__price">
                                                                            <span className="categories-course__sale-price">$22.00</span>
                                                                            <span className="categories-course__regular-price">$30.00</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="categories-course" href="shop-single-list-left-sidebar.html">
                                                                    <div className="categories-course__thumbnail">
                                                                        <img src="assets/images/courses/courses-3.jpg" alt="Course" width="62" height="50" />
                                                                    </div>
                                                                    <div className="categories-course__caption">
                                                                        <h5 className="categories-course__title">Illustrator 2020 MasterclassName</h5>
                                                                        <div className="categories-course__price">
                                                                            <span className="categories-course__sale-price">$22.00</span>
                                                                            <span className="categories-course__regular-price">$30.00</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="shop-left-sidebar.html">Entrepreneurship</a></li>
                                                    <li><a href="shop-left-sidebar.html">Finance</a></li>
                                                    <li><a href="shop-left-sidebar.html">Management</a></li>
                                                    <li><a href="shop-left-sidebar.html">Sales</a></li>
                                                    <li><a href="shop-left-sidebar.html">Strategy &amp; Analytics</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop-left-sidebar.html">Business</a></li>
                                            <li><a href="shop-left-sidebar.html">Data Science</a></li>
                                            <li><a href="shop-left-sidebar.html">Development</a></li>
                                            <li><a href="shop-left-sidebar.html">Finance</a></li>
                                            <li><a href="shop-left-sidebar.html">Health &amp; Fitness</a></li>
                                            <li><a href="shop-left-sidebar.html">Lifestyle</a></li>
                                            <li><a href="shop-left-sidebar.html">Marketing</a></li>
                                            <li><a href="shop-left-sidebar.html">Music</a></li>
                                            <li><a href="shop-left-sidebar.html">Personal Development</a></li>
                                            <li><a href="shop-left-sidebar.html">Photography</a></li>
                                            <li><a href="shop-left-sidebar.html">Teaching &amp; Academics</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*  Header Category Menu End*/}

                                {/*  Header Inner Start*/}
                                <div className="header-inner">

                                    {/*  Header Search Start*/}
                                    <div className="header-serach">
                                        <form action="#">
                                            <input type="text" className="header-serach__input" placeholder="Search..." />
                                            <button className="header-serach__btn"><i className="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                    {/*  Header Search End*/}

                                    {/*  Header Navigation Start*/}
                                    <div className="header-navigation d-none d-xl-block">
                                        <nav className="menu-primary">
                                            <ul className="menu-primary__container">
                                                <li><Link to="/listings">Listings</Link></li>
                                                <li><Link to="/become-an-instructor"><span>Become an Instructor</span></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/*  Header Navigation End*/}

                                    {/*  Header Mini Cart Start*/}
                                    <div className="header-action">
                                        <a href="#" className="header-action__btn">
                                            <i className="fas fa-shopping-basket"></i>
                                            <span className="header-action__number">3</span>
                                        </a>

                                        {/*  Header Mini Cart Start*/}
                                        <div className="header-mini-cart">

                                            {/*  Header Mini Cart Product List Start*/}
                                            <ul className="header-mini-cart__product-list ">
                                                <li className="header-mini-cart__item">
                                                    <a href="#" className="header-mini-cart__close"></a>
                                                    <div className="header-mini-cart__thumbnail">
                                                        <a href="shop-single-list-left-sidebar.html">
                                                            <img src="assets/images/product/product-1.png" alt="Product" width="80" height="93" /></a>
                                                    </div>
                                                    <div className="header-mini-cart__caption">
                                                        <h3 className="header-mini-cart__name"><a href="shop-single-list-left-sidebar.html">Awesome for Websites</a></h3>
                                                        <span className="header-mini-cart__quantity">1 × <strong className="amount">$49</strong><span className="separator">.00</span></span>
                                                    </div>
                                                </li>
                                                <li className="header-mini-cart__item">
                                                    <a href="#" className="header-mini-cart__close"></a>
                                                    <div className="header-mini-cart__thumbnail">
                                                        <a href="shop-single-list-left-sidebar.html">
                                                            <img src="assets/images/product/product-2.png" alt="Product" width="80" height="93" /></a>
                                                    </div>
                                                    <div className="header-mini-cart__caption">
                                                        <h3 className="header-mini-cart__name"> <a href="shop-single-list-left-sidebar.html">Awesome for Websites</a></h3>
                                                        <span className="header-mini-cart__quantity">1 × <strong className="amount">$49</strong><span className="separator">.00</span></span>
                                                    </div>
                                                </li>
                                                <li className="header-mini-cart__item">
                                                    <a href="#" className="header-mini-cart__close"></a>
                                                    <div className="header-mini-cart__thumbnail">
                                                        <a href="shop-single-list-left-sidebar.html">
                                                            <img src="assets/images/product/product-3.png" alt="Product" width="80" height="93" /></a>
                                                    </div>
                                                    <div className="header-mini-cart__caption">
                                                        <h3 className="header-mini-cart__name"> <a href="shop-single-list-left-sidebar.html">Awesome for Websites</a></h3>
                                                        <span className="header-mini-cart__quantity">1 × <strong className="amount">$49</strong><span className="separator">.00</span></span>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/*  Header Mini Cart Product List End*/}

                                            <div className="header-mini-cart__footer">
                                                <div className="header-mini-cart__total">
                                                    <p className="header-mini-cart__label">Total:</p>
                                                    <p className="header-mini-cart__value">$445<span className="separator">.99</span></p>
                                                </div>
                                                <div className="header-mini-cart__btn">
                                                    <a href="cart.html" className="btn btn-primary btn-hover-secondary">View cart</a>
                                                    <a href="checkout.html" className="btn btn-primary btn-hover-secondary">Checkout</a>
                                                </div>
                                            </div>

                                        </div>
                                        {/*  Header Mini Cart End*/}

                                    </div>
                                    {/*  Header Mini Cart End*/}

                                    {/*  Header User Button Start*/}
                                    <div className="header-user d-none d-lg-flex">
                                        <div className="header-user__button">
                                            <button className="header-user__login" data-bs-toggle="modal" data-bs-target="#loginModal">Log In</button>
                                        </div>
                                        <div className="header-user__button">
                                            <button className="header-user__signup btn btn-primary btn-hover-primary" data-bs-toggle="modal" data-bs-target="#registerModal">Sign Up</button>
                                        </div>
                                    </div>
                                    {/*  Header User Button End*/}

                                    {/*  Header Mobile Toggle Start*/}
                                    <div className="header-toggle">
                                        <button className="header-toggle__btn d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobileMenu">
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </button>
                                        <button className="header-toggle__btn search-open d-flex d-md-none">
                                            <span className="dots"></span>
                                            <span className="dots"></span>
                                            <span className="dots"></span>
                                        </button>
                                    </div>
                                    {/*  Header Mobile Toggle End*/}

                                </div>
                                {/*  Header Inner End*/}

                            </div>
                            {/*  Header Main Wrapper End*/}
                        </div>
                    </div>
                    <div>
    
    </div>
    </>
      
  );

}


export default navbarmenu;