import React from 'react'

export default function NewArrivals() {
    return (
        <div className="App">
            <div className="" style={{ paddingTop: 0 }}>
                <div id="fullpage">
                    <section className="section">
                        <div id="slider2" className="owl-carousel owl-theme owl-loaded">
                            <div className="owl-stage-outer"><div className="owl-stage" /></div></div>
                    </section>
                </div>
                <div className="indoor-plant-area pt-50 mg-mb-10">
                    <div className="container">
                        <div className="row">
                            {/*Section Title Start*/}
                            <div className="col-12">
                                <div className="section-title text-center mb-50">
                                    <h3>NEW ARRIVALS</h3>
                                </div>
                            </div>
                        </div>
                        <div className="indor-plant-product">
                            <div className="row">
                                <div className="indoor-product-active">
                                    {/*Single Product Start*/}
                                    <div className="col-xs-6 col-md-4">
                                        <div className="single-product mb-10">
                                            <div className="product-img img-full">
                                                <a href="/products/90-s-tee-white">
                                                    <img className="visible-xs lazyload" src="//product.hstatic.net/1000344185/product/2683_5f365049c35445c6a9058d2145917548_medium.png" data-src="//product.hstatic.net/1000344185/product/2683_5f365049c35445c6a9058d2145917548_medium.png" alt />
                                                    <img className="hidden-xs lazyload" src="//product.hstatic.net/1000344185/product/2683_5f365049c35445c6a9058d2145917548_grande.png" alt data-src="//product.hstatic.net/1000344185/product/2683_5f365049c35445c6a9058d2145917548_grande.png" />
                                                    <img className="pro-img2 hidden-xs" src="//product.hstatic.net/1000344185/product/2688_8edb82776d8e4ee78b4767913cd9764f_grande.png" alt />
                                                </a>
                                                <a href="#" className="product-action btn-quickview-1" data-handle="/products/90-s-tee-white">
                                                    <ul>
                                                        <li>XEM NHANH</li>
                                                    </ul>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h2><a href="/products/90-s-tee-white">90'S TEE - WHITE</a></h2>
                                                <div className="product-price">
                                                    <div className="price-box">
                                                        <span className="regular-price">340,000₫</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Product End*/}
                                    {/*Single Product Start*/}
                                    <div className="col-xs-6 col-md-4">
                                        <div className="single-product mb-10">
                                            <div className="product-img img-full">
                                                <a href="/products/cargo-shorts-sand">
                                                    {/* Mặt trước */}
                                                    <img className="visible-xs lazyload" src="//product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03_medium.jpg" data-src="//product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03_medium.jpg" alt />
                                                    {/* Mặt trc */}
                                                    <img className="hidden-xs lazyload" src="//product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03_grande.jpg" alt data-src="//product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03_grande.jpg" />
                                                    {/* Mặt sau */}
                                                    <img className="pro-img2 hidden-xs" src="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_grande.jpg" alt />
                                                </a>
                                                <a href="#" className="product-action btn-quickview-1" data-handle="/products/cargo-shorts-sand">
                                                    <ul>
                                                        <li>XEM NHANH</li>
                                                    </ul>
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h2><a href="/products/cargo-shorts-sand">CARGO SHORTS - SAND</a></h2>
                                                <div className="product-price">
                                                    <div className="price-box">
                                                        <span className="regular-price">400,000₫</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Product End*/}
                                    {/*Single Product Start*/}

                                </div>
                                <center className="view-all-product">
                                    <a href="/collections/new-arrivals">View all</a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
