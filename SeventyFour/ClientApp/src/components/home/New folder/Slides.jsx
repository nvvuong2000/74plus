import React from 'react'

export default function Slides() {
    return (
        <div className="hero-slider-section">
            {/* Slider main container */}
            <div className="hero-slider-active swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper" id="swiper-wrapper-e45537e9fbb2d918" aria-live="polite" style={{ transition: 'all 0ms ease 0s' }}>
                    <div className="hero-single-slider-item swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index={1} role="group" aria-label="1 / 4" style={{ width: 1920, opacity: 1, transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0ms ease 0s' }}>
                        {/* Hero Slider Image */}
                        <div className="hero-slider-bg">
                            <img src="assets/images/hero-slider/home-2/hero-slider-2.jpg" alt />
                        </div>
                        {/* Hero Slider Content */}
                        <div className="hero-slider-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="hero-slider-content">
                                            <h4 className="subtitle">Premium Facial Skincare</h4>
                                            <h1 className="title">Fresh Face <br /> Natural Skincare</h1>
                                            <a href="product-details-default.html" className="btn btn-lg btn-outline-green">shop
                                                now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Start Hero Single Slider Item */}
                    <div className="hero-single-slider-item swiper-slide swiper-slide-active" data-swiper-slide-index={0} role="group" aria-label="2 / 4" style={{ width: 1920, opacity: 1, transform: 'translate3d(-1920px, 0px, 0px)', transition: 'all 0ms ease 0s' }}>
                        {/* Hero Slider Image */}
                        <div className="hero-slider-bg">
                            <img src="assets/images/hero-slider/home-2/hero-slider-1.jpg" alt />
                        </div>
                        {/* Hero Slider Content */}
                        <div className="hero-slider-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="hero-slider-content">
                                            <h4 className="subtitle">Made of Fresh Ingredients</h4>
                                            <h1 className="title">A natural &amp; <br /> organic Skincare </h1>
                                            <a href="product-details-default.html" className="btn btn-lg btn-outline-green">shop
                                                now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* End Hero Single Slider Item */}
                    {/* Start Hero Single Slider Item */}
                    <div className="hero-single-slider-item swiper-slide swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index={1} role="group" aria-label="3 / 4" style={{ width: 1920, opacity: 0, transform: 'translate3d(-3840px, 0px, 0px)', transition: 'all 0ms ease 0s' }}>
                        {/* Hero Slider Image */}
                        <div className="hero-slider-bg">
                            <img src="assets/images/hero-slider/home-2/hero-slider-2.jpg" alt />
                        </div>
                        {/* Hero Slider Content */}
                        <div className="hero-slider-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="hero-slider-content">
                                            <h4 className="subtitle">Premium Facial Skincare</h4>
                                            <h1 className="title">Fresh Face <br /> Natural Skincare</h1>
                                            <a href="product-details-default.html" className="btn btn-lg btn-outline-green">shop
                                                now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* End Hero Single Slider Item */}
                    <div className="hero-single-slider-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={0} role="group" aria-label="4 / 4" style={{ width: 1920, opacity: 0, transform: 'translate3d(-5760px, 0px, 0px)', transition: 'all 0ms ease 0s' }}>
                        {/* Hero Slider Image */}
                        <div className="hero-slider-bg">
                            <img src="assets/images/hero-slider/home-2/hero-slider-1.jpg" alt />
                        </div>
                        {/* Hero Slider Content */}
                        <div className="hero-slider-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="hero-slider-content">
                                            <h4 className="subtitle">Made of Fresh Ingredients</h4>
                                            <h1 className="title">A natural &amp; <br /> organic Skincare </h1>
                                            <a href="product-details-default.html" className="btn btn-lg btn-outline-green">shop
                                                now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination active-color-green swiper-pagination-clickable swiper-pagination-bullets">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" /></div>
                {/* If we need navigation buttons */}
                <div className="swiper-button-prev d-none d-lg-block" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-e45537e9fbb2d918" />
                <div className="swiper-button-next d-none d-lg-block" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-e45537e9fbb2d918" />
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
            </div>
        </div>
    )
}

      