import React, { useState, useEffect, Fragment } from "react";
import * as productManage from "../../actions/asset";
import { useDispatch, useSelector } from "react-redux";



export default function Details({ match }) {
    const dispatch = useDispatch();
    const { id } = match.params;
    const assetDetails = useSelector((state) => state.asset.assetSelected);
    console.log(assetDetails)
    useEffect(() => {
        dispatch(productManage.getAssetById(id));
    }, [id]);

    return (
        <div>
            {assetDetails ? (<div className="product-details-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="product-details-gallery-area" data-aos="fade-up" data-aos-delay={0}>
                                {/* Start Large Image */}
                                <div className="product-large-image product-large-image-horaizontal swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-1.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-2.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-3.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-4.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-5.jpg" alt />
                                        </div>
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src="assets/images/product/default/home-1/default-6.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                {/* End Large Image */}
                                {/* Start Thumbnail Image */}
                                <div className="product-image-thumb product-image-thumb-horizontal swiper-container pos-relative mt-5">
                                    <div className="swiper-wrapper">
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-1.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-2.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-3.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-4.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-5.jpg" alt />
                                        </div>
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src="assets/images/product/default/home-1/default-6.jpg" alt />
                                        </div>
                                    </div>
                                    {/* Add Arrows */}
                                    <div className="gallery-thumb-arrow swiper-button-next" />
                                    <div className="gallery-thumb-arrow swiper-button-prev" />
                                </div>
                                {/* End Thumbnail Image */}
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="product-details-content-area product-details--golden" data-aos="fade-up" data-aos-delay={200}>
                                {/* Start  Product Details Text Area*/}
                                <div className="product-details-text">
                                    <h4 className="title">{assetDetails.productName}</h4>
                                    <div className="d-flex align-items-center">
                                    </div>
                                    <div className="price">{assetDetails.unitPrice}</div>
                                    <p>{assetDetails.description}</p>
                                </div> {/* End  Product Details Text Area*/}
                                {/* Start Product Variable Area */}
                                <div className="product-details-variable">
                                    <h4 className="title">Available Options</h4>
                                    {/* Product Variable Single Item */}
                                    <div className="variable-single-item">
                                        <div className="product-stock"> <span className="product-stock-in"><i className="ion-checkmark-circled" /></span> 200 IN STOCK</div>
                                    </div>
                                    {/* Product Variable Single Item */}
                                    <div className="d-flex align-items-center ">
                                        <div className="variable-single-item ">
                                            <span>Quantity</span>
                                            <div className="product-variable-quantity">
                                                <input min={1} max={100} defaultValue={1} type="number" />
                                            </div>
                                        </div>
                                        <div className="product-add-to-cart-btn">
                                            <a href="#" className="btn btn-block btn-lg btn-black-default-hover" data-bs-toggle="modal" data-bs-target="#modalAddcart">+ Add To Cart</a>
                                        </div>
                                    </div>
                                    {/* Start  Product Details Meta Area*/}
                                    <div className="product-details-meta mb-20">
                                        <a href="wishlist.html" className="icon-space-right"><i className="icon-heart" />Add to wishlist</a>
                                        <a href="compare.html" className="icon-space-right"><i className="icon-refresh" />Compare</a>
                                    </div> {/* End  Product Details Meta Area*/}
                                </div> {/* End Product Variable Area */}
                                {/* Start  Product Details Catagories Area*/}
                              
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            ) : ""}
            </div>
    )

}
