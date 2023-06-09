import React from "react";
import { Link } from "react-router-dom";
const Home: React.FC = () => { 
    return (
        <>
            
                    {/* Slider Section Start*/}
                    <div className="slider-section">
                        <div className="slider-wrapper scene">
                            <div className="container">
                                <div className="row align-items-center gy-10">
                                    <div className="col-md-6">

                                        {/*  Slider Widget Start*/}
                                        <div className="slider-widget" data-aos="fade-up" data-aos-duration="1000">

                                            {/*  Slider Caption Start*/}
                                            <div className="slider-caption">
                                                <h3 className="slider-caption__sub-title">Start to success</h3>
                                                <h2 className="slider-caption__main-title">Access To <mark>5500+</mark> Courses from <mark>480</mark> Instructors & Institutions</h2>
                                                <p>Take your learning organisation to the next level.</p>
                                            </div>
                                            {/*  Slider Caption End*/}

                                            {/*  Slider Search Start*/}
                                            <div className="slider-search">
                                                <form action="#">
                                                    <input className="slider-search__field" placeholder="What do you want to learn?" />
                                                    <button type="submit" className="slider-search__submit">
                                                        <i className="search-btn-icon fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                            {/*  Slider Search End*/}
                                        </div>
                                        {/*  Slider Widget End*/}

                                    </div>
                                    <div className="col-md-6">

                                        {/*  Slider Image Start*/}
                                        <div className="slider-image">
                                            <div className="slider-image__image text-center text-lg-end" data-aos="fade-up" data-aos-duration="1000">
                                                <img src="assets/images/home-01-hero-image.png" alt="Hero Image" width="599" height="480" />
                                            </div>

                                            <div className="slider-image-widget" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="1000">
                                                <div className="slider-image-widget__icon">
                                                    {/* SVG */}
                                                </div>
                                                <div className="slider-image-widget__caption">
                                                    <h4 className="slider-image-widget__title">Tomorrow is our <strong>"When I Grow Up" Spirit Day!</strong></h4>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Slider Image End*/}

                                    </div>
                                </div>
                            </div>

                            <img className="slider-section__shape-01" data-depth="0.8" src="assets/images/shape/edumall-shape-grid-dots.png" alt="Shape" width="417" height="371" />
                            <div className="slider-section__shape-02" data-depth="-1"></div>
                            <div className="slider-section__shape-03" data-depth="1.6"></div>
                            <img className="slider-section__shape-04" data-depth="-0.6" src="assets/images/shape/edumall-shape-01.png" alt="Shape" width="179" height="178" />

                        </div>
                    </div>
                    {/*  Slider Section End*/}

                

                    {/* Features Section Start*/}
                    <div className="features-section bg-color-primary">
                        <div className="container">
                            <div className="row g-6">
                                <div className="col-lg-3 col-sm-6">
                                    {/*  Features Item Start*/}
                                    <div className="features-item" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="features-item__icon">
                                            {/* Svg */}
                                        </div>
                                        <div className="features-item__caption">
                                            <h3 className="features-item__title">Learn The Essential Skills</h3>
                                        </div>
                                    </div>
                                    {/*  Features Item End*/}
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    {/*  Features Item Start*/}
                                    <div className="features-item" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="features-item__icon">
                                            {/* SVG */}
                                        </div>
                                        <div className="features-item__caption">
                                            <h3 className="features-item__title">Earn Certificates And Degrees</h3>
                                        </div>
                                    </div>
                                    {/*  Features Item End*/}
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    {/*  Features Item Start*/}
                                    <div className="features-item" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="features-item__icon">
                                            {/* Svg */}
                                        </div>
                                        <div className="features-item__caption">
                                            <h3 className="features-item__title">Get Ready for The Next Career</h3>
                                        </div>
                                    </div>
                                    {/*  Features Item End*/}
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    {/*  Features Item Start*/}
                                    <div className="features-item" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="features-item__icon">
                                            {/* Svg */}
                                        </div>
                                        <div className="features-item__caption">
                                            <h3 className="features-item__title">Master at Different Areas</h3>
                                        </div>
                                    </div>
                                    {/*  Features Item End*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Features Section End*/}

                    {/* Categories Section Start*/}
                    <div className="categories-section section-padding-02">
                        <div className="container">

                            {/*  Section Title Start*/}
                            <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                                <h2 className="section-title__title">Top <mark>Categories</mark> </h2>
                            </div>
                            {/*  Section Title End*/}

                            <div className="row g-6">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Art & Design</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Development</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Lifestyle</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Personal Development</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Business</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Finance</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Marketing</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Photography</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Data Science</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>

                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Health & Fitness</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Music</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    {/*  categories Item Start*/}
                                    <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                                        <a className="categories-item__link" href="course-category.html">
                                            <div className="categories-item__icon">
                                                {/* Svg */}
                                            </div>
                                            <div className="categories-item__info">
                                                <h3 className="categories-item__name">Teaching & Academics</h3>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  categories Item End*/}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Categories Section End*/}

                    {/* Course Section Start*/}
                    <div className="courses-section section-padding-02">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-6">

                                    {/*  Section Title Start*/}
                                    <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                                        <h2 className="section-title__title">Top <mark>Categories</mark> </h2>
                                    </div>
                                    {/*  Section Title End*/}

                                </div>
                                <div className="col-lg-6">
                                    <div className="courses-tab-menu" data-aos="fade-up" data-aos-duration="1000">
                                        <ul className="nav justify-content-lg-end">
                                            <li><button className="active" data-bs-toggle="tab" data-bs-target="#tab1">All</button></li>
                                            <li><button data-bs-toggle="tab" data-bs-target="#tab2">Trending</button></li>
                                            <li><button data-bs-toggle="tab" data-bs-target="#tab3">Popularity</button></li>
                                            <li><button data-bs-toggle="tab" data-bs-target="#tab4">Featured</button></li>
                                            <li><button data-bs-toggle="tab" data-bs-target="#tab5">Art & Design</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab1">

                                    <div className="row row-cols-xl-5 g-6">
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="/assets/images/courses/courses-1.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Successful Negotiation: Master Your Negotiating Skills</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$39.<small className="separator">00</small></span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-2.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Time Management Mastery: Do More, Stress Less</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$29.<small className="separator">99</small></span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-3.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Angular – The Complete Guide (2020 Edition)</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$49.<small className="separator">99</small></span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-4.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Consulting Approach to Problem Solving</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-5.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">The Business Intelligence Analyst Course 2020</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-6.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Become a Product Manager | Learn the Skills & Get the Job</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-25.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Mechanical Engineering and Electrical Engineering Explained</a></h3>
                                                    <a href="#" className="course-info__instructor">Oliver Porter</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$84.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-8.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Learn Algebra The Easy Way! Student Engagement</a></h3>
                                                    <a href="#" className="course-info__instructor">Oliver Porter</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$45.<small className="separator">00</small></span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-9.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Essential Digital Tools for Student Engagement</a></h3>
                                                    <a href="#" className="course-info__instructor">Donald Logan</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-10.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Adobe Lightroom For Beginners : Complete Photo/Image Editing</a></h3>
                                                    <a href="#" className="course-info__instructor">Alex Itzel</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="tab2">

                                    <div className="row row-cols-xl-5 g-6">
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-11.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                        <span className="onsale">-39%</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Mastering Data Modeling Fundamentals</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$46.<small className="separator">00</small></span>
                                                        <span className="regular-price">$76.<small className="separator">00</small></span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-12.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="onsale">-51%</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Fundamentals of Accounting Student Engagement</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$15.<small className="separator">00</small></span>
                                                        <span className="regular-price">$31.<small className="separator">00</small></span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-1.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Successful Negotiation: Master Your Negotiating Skills</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$39.<small className="separator">00</small></span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-2.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Time Management Mastery: Do More, Stress Less</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$29.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-13.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Adobe Illustrator CC – Essentials Training Course0</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-6.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Consulting Approach to Problem Solving</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-3.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Angular – The Complete Guide (2020 Edition)</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$84.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-5.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">The Business Intelligence Analyst Course 2020</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-6.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Become a Product Manager | Learn the Skills & Get the Job</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-25.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Mechanical Engineering and Electrical Engineering Explained</a></h3>
                                                    <a href="#" className="course-info__instructor">Oliver Porter</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$84.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="tab3">

                                    <div className="row row-cols-xl-5 g-6">
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-13.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Adobe Illustrator CC – Essentials Training Course</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-4.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Consulting Approach to Problem Solving</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-14.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Time Management for Professional Productivity</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-9.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Essential Digital Tools for Student Engagement</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-8.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">The Business Intelligence Analyst Course 2020</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-15.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-intermediate">Intermediate</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Become a Product Manager | Learn the Skills & Get the Job</a></h3>
                                                    <a href="#" className="course-info__instructor">Donald Logan</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-16.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Introduction to Web Development</a></h3>
                                                    <a href="#" className="course-info__instructor">Oliver Porter</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-17.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="onsale">-100%</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Analytic Techniques for Business Specialization</a></h3>
                                                    <a href="#" className="course-info__instructor">Oliver Porter</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$00.<small className="separator">00</small></span>
                                                        <span className="regular-price">$39.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-18.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">How To Sing #1: Complete Vocal Warm ups & Voice Physiology</a></h3>
                                                    <a href="#" className="course-info__instructor">Emilee Logan</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$19.<small className="separator">99</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-6.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Become a Product Manager | Learn the Skills & Get the Job</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="tab4">

                                    <div className="row row-cols-xl-5 g-6">
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-19.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">The Complete 2020 Web Development Bootcamp</a></h3>
                                                    <a href="#" className="course-info__instructor">Donald Logan</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$45.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-20.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-intermediate">Intermediate</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Sales Training: Practical Sales Techniques</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$36.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-21.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">The Business Intelligence Analyst Course 2020</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$39.<small className="separator">99</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-22.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-intermediate">Intermediate</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">The Complete Graphic Design Theory for Beginners Course</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$45.<small className="separator">99</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-23.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Graphic Design Bootcamp: Photoshop, Illustrator, InDesign</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$29.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-33.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Adobe Illustrator CC – Essentials Training Course</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-24.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                        <span className="onsale">-43%</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-intermediate">Intermediate</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Public Relations: Media Crisis Communications</a></h3>
                                                    <a href="#" className="course-info__instructor">Emilee Logan</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$45.<small className="separator">00</small></span>
                                                        <span className="regular-price">$79.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-25.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Learn Big Data: The Hadoop Ecosystem MasterclassName</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$21.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-26.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                        <span className="onsale">-39%</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Mastering Data Modeling Fundamentals</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$46.<small className="separator">00</small></span>
                                                        <span className="regular-price">$76.<small className="separator">00</small></span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-27.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-all">All Levels</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Communication Skills Machine: Master Persuasion</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$35.<small className="separator">00</small></span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}></div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="tab5">

                                    <div className="row row-cols-xl-5 g-6">
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-22.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-intermediate">Intermediate</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">The Complete Graphic Design Theory for Beginners Course</a></h3>
                                                    <a href="#" className="course-info__instructor">Donald Logan</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$45.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-9.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-intermediate">Intermediate</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">User Experience Design Fundamentals</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$42.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-23.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Graphic Design Bootcamp: Photoshop, Illustrator, InDesign</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$29.<small className="separator">99</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-28.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-intermediate">Intermediate</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Ultimate Photoshop Training: From Beginner to Pro</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-29.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Illustrator 2020 MasterclassName</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$22.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-13.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                        <span className="free">Free</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Adobe Illustrator CC – Essentials Training Course</a></h3>
                                                    <a href="#" className="course-info__instructor">parra</a>
                                                    <div className="course-info__price">
                                                        <span className="free">Free</span>
                                                    </div>
                                                    <div className="course-info__rating">

                                                        <div className="rating-star">
                                                            <div className="rating-label" style={{ width: '80%' }}>
                                                            </div>
                                                        </div>

                                                        <span>(2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-30.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="onsale">-50%</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-intermediate">Intermediate</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">The Complete UX & Web Design Master Course</a></h3>
                                                    <a href="#" className="course-info__instructor">Emilee Logan</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$45.<small className="separator">00</small></span>
                                                        <span className="regular-price">$79.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                        <div className="col-xl col-lg-3 col-md-4 col-sm-6">

                                            {/*  Course Start*/}
                                            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="course-header">
                                                    <div className="course-header__thumbnail ">
                                                        <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-31.jpg" alt="courses" width="258" height="173" /></a>
                                                    </div>
                                                    <div className="course-header__badge">
                                                        <span className="hot">Featured</span>
                                                    </div>
                                                </div>
                                                <div className="course-info">
                                                    <span className="course-info__badge-text badge-beginner">Beginner</span>
                                                    <h3 className="course-info__title"><a href="course-single-layout-01.html">Fundamentals of Graphic Design Bootcamp</a></h3>
                                                    <a href="#" className="course-info__instructor">Owen Christ</a>
                                                    <div className="course-info__price">
                                                        <span className="sale-price">$39.<small className="separator">00</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Course End*/}

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Course Section End*/}

                    {/* Call To Action Start*/}
                    <div className="call-to-action section-padding-02">
                        <div className="container">

                            {/*  Call To Action Wrapper Start*/}
                            <div className="call-to-action__wrapper">

                                {/*  Call To Action Icon Start*/}
                                <div className="call-to-action__icon" data-aos="zoom-in" data-aos-duration="1000">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                {/*  Call To Action Icon End*/}

                                {/*  Call To Action Content Start*/}
                                <div className="call-to-action__content">

                                    <div className="call-to-action__shape-01"></div>
                                    <div className="call-to-action__shape-02"></div>
                                    <div className="call-to-action__shape-03"></div>

                                    <div className="call-to-action__caption">
                                        <h3 className="call-to-action__sub-title">Let Us Help</h3>
                                        <h3 className="call-to-action__main-title">Finding Your Right Courses</h3>
                                    </div>
                                    <div className="call-to-action__btn">
                                        <a href="course-category.html" className="btn btn-secondary btn-hover-primary">Get started</a>
                                    </div>

                                </div>
                                {/*  Call To Action Content End*/}

                            </div>
                            {/*  Call To Action Wrapper End*/}

                        </div>
                    </div>
                    {/* Call To Action End*/}

                    {/* Testimonial Start*/}
                    <div className="testimonial-section section-padding-02">
                        <div className="container">
                            <div className="row gy-10">
                                <div className="col-lg-3 col-md-6">
                                    {/*  Section Title Start*/}
                                    <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                                        <h2 className="section-title__title">People Say  About <mark>EduMall</mark> </h2>
                                        <p>One-stop solution for any eLearning center, online courses. People love EduMall because they can create their sites with ease here.</p>
                                    </div>
                                    {/*  Section Title End*/}

                                    <div className="section-btn" data-aos="fade-up" data-aos-duration="1000">
                                        <a href="#" className="btn btn-light btn-hover-primary">View all</a>
                                    </div>
                                </div>
                                <div className="col-lg-9">

                                    <div className="testimonial-active swiper-dots-style" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="swiper">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">

                                                    {/*  Testimonial Item Start*/}
                                                    <div className="testimonial-item">
                                                        <div className="testimonial-quote-icon">
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="40px" viewbox="0 0 50 40">
                                                            <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"></path>
                                                            <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"></path>
                                                        </svg> */}
                                                        </div>
                                                        <div className="testimonial-main-content">
                                                            <div className="testimonial-caption">
                                                                <h3 className="testimonial-caption__title">Great quality!</h3>
                                                                <p>I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!</p>
                                                            </div>
                                                            <div className="testimonial-info">
                                                                <div className="testimonial-info__image">
                                                                    <img src="assets/images/avatar/avatar-01.jpg" alt="Avatar" width="60" height="60" />
                                                                </div>
                                                                <div className="testimonial-info__caption">
                                                                    <h5 className="testimonial-info__name">Oliver Beddows</h5>
                                                                    <p className="testimonial-info__designation">/ Designer, Manchester</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  Testimonial Item End*/}

                                                </div>
                                                <div className="swiper-slide">

                                                    {/*  Testimonial Item Start*/}
                                                    <div className="testimonial-item">
                                                        <div className="testimonial-quote-icon">
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="40px" viewbox="0 0 50 40">
                                                            <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"></path>
                                                            <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"></path>
                                                        </svg> */}
                                                        </div>
                                                        <div className="testimonial-main-content">
                                                            <div className="testimonial-caption">
                                                                <h3 className="testimonial-caption__title">Code Quality</h3>
                                                                <p>I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!</p>
                                                            </div>
                                                            <div className="testimonial-info">
                                                                <div className="testimonial-info__image">
                                                                    <img src="assets/images/avatar/avatar-02.jpg" alt="Avatar" width="60" height="60" />
                                                                </div>
                                                                <div className="testimonial-info__caption">
                                                                    <h5 className="testimonial-info__name">Madley Pondor</h5>
                                                                    <p className="testimonial-info__designation">/ Reporter, San Diego</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  Testimonial Item End*/}

                                                </div>
                                                <div className="swiper-slide">

                                                    {/*  Testimonial Item Start*/}
                                                    <div className="testimonial-item">
                                                        <div className="testimonial-quote-icon">
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="40px" viewbox="0 0 50 40">
                                                            <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"></path>
                                                            <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"></path>
                                                        </svg> */}
                                                        </div>
                                                        <div className="testimonial-main-content">
                                                            <div className="testimonial-caption">
                                                                <h3 className="testimonial-caption__title">Customer Support</h3>
                                                                <p>Very good and fast support during the week. They know what you need, exactly when you need it.</p>
                                                            </div>
                                                            <div className="testimonial-info">
                                                                <div className="testimonial-info__image">
                                                                    <img src="assets/images/avatar/avatar-03.jpg" alt="Avatar" width="60" height="60" />
                                                                </div>
                                                                <div className="testimonial-info__caption">
                                                                    <h5 className="testimonial-info__name">Mina Hollace</h5>
                                                                    <p className="testimonial-info__designation">/ Reporter, London</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  Testimonial Item End*/}

                                                </div>
                                                <div className="swiper-slide">

                                                    {/*  Testimonial Item Start*/}
                                                    <div className="testimonial-item">
                                                        <div className="testimonial-quote-icon">
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="40px" viewbox="0 0 50 40">
                                                            <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"></path>
                                                            <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"></path>
                                                        </svg> */}
                                                        </div>
                                                        <div className="testimonial-main-content">
                                                            <div className="testimonial-caption">
                                                                <h3 className="testimonial-caption__title">Great quality!</h3>
                                                                <p>I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!</p>
                                                            </div>
                                                            <div className="testimonial-info">
                                                                <div className="testimonial-info__image">
                                                                    <img src="assets/images/avatar/avatar-04.jpg" alt="Avatar" width="60" height="60" />
                                                                </div>
                                                                <div className="testimonial-info__caption">
                                                                    <h5 className="testimonial-info__name">Luvic Dubble</h5>
                                                                    <p className="testimonial-info__designation">/ Designer, Manchester</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  Testimonial Item End*/}

                                                </div>
                                            </div>
                                            <div className="swiper-pagination"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial End*/}

                    {/* Banner Start*/}
                    <div className="banner-section section-padding-02">
                        <div className="container">
                            <div className="row gy-8">
                                <div className="col-lg-6">

                                    {/*  Banner Box Start*/}
                                    <div className="banner-box banner-bg-1" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="row gy-4 gy-sm-0 align-items-end">
                                            <div className="col-xxl-6 col-md-7">
                                                <div className="banner-caption">
                                                    <h3 className="banner-caption__title">Become An Instructor</h3>
                                                    <p>Top instructors from around the world teach millions of students on EduMall.</p>
                                                    <a href="course-grid-left-sidebar.html" className="banner-caption__btn btn btn-primary btn-hover-secondary">Start teaching today</a>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-md-5">
                                                <div className="banner-image banner-position">
                                                    <img src="assets/images/banner-image-group-teachers.png" alt="Banner" width="350" height="201" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  Banner Box End*/}

                                </div>
                                <div className="col-lg-6">

                                    {/*  Banner Box Start*/}
                                    <div className="banner-box banner-bg-2" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="row gy-4 gy-sm-0 align-items-end">
                                            <div className="col-md-7">
                                                <div className="banner-caption">
                                                    <h3 className="banner-caption__title">Access To Education</h3>
                                                    <p>Create an account to receive our newsletter, course recommendations and promotions.</p>
                                                    <a href="course-grid-left-sidebar.html" className="banner-caption__btn btn btn-primary btn-hover-secondary">Register for free</a>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="banner-image banner-position-02">
                                                    <img src="assets/images/banner-image-laptop.png" alt="Banner" width="260" height="199" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  Banner Box End*/}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Banner End*/}

                    {/* Partners Start*/}
                    <div className="partners-seaction section-padding-01">
                        <div className="container">
                            <div className="row gy-8 align-items-center">
                                <div className="col-lg-3 col-md-6">
                                    {/*  Section Title Start*/}
                                    <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                                        <h2 className="section-title__title">Who Will You  Learn <mark>With?</mark> </h2>
                                        <p>You can list your partners or instructors's brands here to show off your site's reputation and students can trust you more.</p>
                                    </div>
                                    {/*  Section Title End*/}

                                    <div className="section-btn" data-aos="fade-up" data-aos-duration="1000">
                                        <a href="#" className="btn btn-light btn-hover-primary">View all Partners</a>
                                    </div>
                                </div>

                                <div className="col-lg-9">

                                    {/*  Partners Logo Wrapper Start*/}
                                    <div className="partner-logo-wrapper" data-aos="fade-up" data-aos-duration="1000">

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-01.jpg" alt="Brand Logo" width="68" height="92" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-02.jpg" alt="Brand Logo" width="122" height="70" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-03.jpg" alt="Brand Logo" width="105" height="108" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-04.jpg" alt="Brand Logo" width="78" height="91" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-05.jpg" alt="Brand Logo" width="76" height="91" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-06.jpg" alt="Brand Logo" width="99" height="71" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-07.jpg" alt="Brand Logo" width="93" height="72" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-08.jpg" alt="Brand Logo" width="77" height="72" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-09.jpg" alt="Brand Logo" width="75" height="92" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-10.jpg" alt="Brand Logo" width="87" height="75" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-11.jpg" alt="Brand Logo" width="87" height="78" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                        {/*  Partners Logo Start*/}
                                        <div className="partner-logo">
                                            <div className="partner-logo__logo">
                                                <img src="assets/images/partners-logo/client-logo-12.jpg" alt="Brand Logo" width="107" height="69" />
                                            </div>
                                        </div>
                                        {/*  Partners Logo End*/}

                                    </div>
                                    {/*  Partners Logo Wrapper End*/}

                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}  

export default Home;