
import Header from "./Header";
import Footer from "./Footer";
import Slides from "./Slides";
import ListProduct from "./ListProduct";
import history from '../../history';
import { Route, Router, Switch } from "react-router-dom";
import Details from "../product/Details";
import Cart from "./Cart";
import Checkout from "./Checkout";
import React, { useState, useEffect, Fragment } from "react";
import * as productManage from "../../actions/asset";
import { useDispatch, useSelector } from "react-redux";
import * as cartManage from "../../actions/cart";
import Cart1 from "./Cart1";
import Checkout1 from "./Checkout1";
import "./modal.css"

export default function Index() {


  const dispatch = useDispatch();

  const assetDetails = useSelector((state) => state.asset.assetSelected);
  console.log(assetDetails)

  const addProductToCart = ((id) => {
    dispatch(cartManage.addToCard(id, 1))
  });

  return (
    <div>
      <div>
        <Header />
        <Slides />
        <Router history={history}>
          <Route exact path='/' component={ListProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/:id" render={({ match }) => <Details match={match} />} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout1" component={Checkout1} />

        </Router>
        <Route exact path="/cart1" component={Cart1} />
        <Footer />
        {/* material-scrolltop button */}
        <button className="material-scrolltop" type="button" />
        {/* Start Modal Add cart */}
        <div className="modal fade" id="modalAddcart" tabIndex={-1} role="dialog" aria-hidden="true">

          <div className="modal-dialog  modal-dialog-centered modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col text-right">
                      <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"> <i className="fa fa-times" /></span>
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="modal-add-cart-product-img">
                            <img className="img-fluid" src="assets/images/product/default/home-1/default-1.jpg" alt />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="modal-add-cart-info"><i className="fa fa-check-square" />Added to cart
                            successfully!</div>
                          <div className="modal-add-cart-product-cart-buttons">
                            <a href="cart.html">View Cart</a>
                            <a href="checkout.html">Checkout</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 modal-border">
                      <ul className="modal-add-cart-product-shipping-info">
                        <li> <strong><i className="icon-shopping-cart" /> There Are 5 Items In Your
                          Cart.</strong></li>
                        <li> <strong>TOTAL PRICE: </strong> <span>$187.00</span></li>
                        <li className="modal-continue-button"><a href="#" data-bs-dismiss="modal">CONTINUE
                          SHOPPING</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> {/* End Modal Add cart */}
        {/* Start Modal Quickview cart */}

        <div className="modal fade" id="quick-view-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="false" style={{ Display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title " id>Thông tin sản phẩm</h4>
                <button type="button" className="closeModal" data-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <form method="post" action="/cart/add">
                      <div className="col-lg-5 col-md-6" style={{ float: 'left' }}>
                        <div className="image-zoom row">
                          <img className="p-product-image-feature" src="https://product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03.jpg" />
                          <div id="p-sliderproduct" className="owl_pages ">
                            <ul id="sync1" className="slides owlDesign notStyle owl-carousel owl-theme owl-responsive-768 owl-loaded" style={{ display: 'block' }}>
                              <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', }}>
                                  <div className="owl-item active" style={{ width: '71.25px', marginRight: 5 }}>
                                    <li className="product-thumb active">
                                      <a href="#" data-image="//product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03_medium.jpg" data-zoom-image="https://product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03.jpg">
                                        <img data-image="//product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03_medium.jpg" data-zoom-image="https://product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03.jpg" src="//product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03_small.jpg" /></a>
                                    </li>
                                  </div>
                                  <div className="owl-item" style={{ width: '71.25px', marginRight: 5 }}>
                                    <li className="product-thumb"><a href="#" data-image="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_medium.jpg" data-zoom-image="https://product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec.jpg">
                                      <img data-image="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_medium.jpg" data-zoom-image="https://product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec.jpg" src="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_small.jpg" /></a>
                                    </li>
                                  </div>
                                  <div className="owl-item" style={{ width: '71.25px', marginRight: 5 }}>
                                    <li className="product-thumb"><a href="#" data-image="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_medium.jpg" data-zoom-image="https://product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec.jpg">
                                      <img data-image="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_medium.jpg" data-zoom-image="https://product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec.jpg" src="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_small.jpg" /></a>
                                    </li>
                                  </div>
                                  <div className="owl-item" style={{ width: '71.25px', marginRight: 5 }}>
                                    <li className="product-thumb"><a href="#" data-image="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_medium.jpg" data-zoom-image="https://product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec.jpg">
                                      <img data-image="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_medium.jpg" data-zoom-image="https://product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec.jpg" src="//product.hstatic.net/1000344185/product/2596_74c81309e11b461ab87b8a8cd65a12ec_small.jpg" /></a>
                                    </li>
                                  </div>

                                </div>

                              </div>


                            </ul></div></div>
                        <div class="owl-controls"><div class="owl-nav"><div class="owl-prev" >‹</div><div class="owl-next" >›</div></div><div class="owl-dots" style={{ display: "block" }}><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div></div></div>
                      </div>
                      <div className="col-lg-7 col-md-6 pull-right" style={{ padding: '0px 10px' }}>
                        <div className="form-input">
                          <div className="product-title p-title"><h1>CARGO SHORTS - SAND</h1></div>
                          <div className="product-price">
                            <span className="p-price ">400,000</span>
                            <del />
                          </div>
                        </div>
                        <div className="form-des">Chưa có mô tả cho sản phẩm này!</div>
                        <div className="clearfix" />
                        <div className="form-input vid ">
                          <div className="m-sku"><span>Mã sản phẩm: </span>CRG-SHRT-SND-S</div>
                          <div className="m-tt">
                          </div>
                        </div>
                        <div className="p-option-wrapper" style={{ display: 'block' }}>1075140165</div>
                        <div className="form-input ">
                          <label>Số lượng</label>
                          <input name="quantity" type="number" min={1} defaultValue={1} />
                        </div>
                        <input type="button" value="+" class="qtyplus" field="quantity"></input>
{/*                    
                        <div className="select-swap">
                          <div data-value="S" className="n-sd swatch-element s ">
                            <input className="variant-0" id="swatch-0-s" type="radio" name="option1" defaultValue="S" defaultChecked />
                            <label htmlFor="swatch-0-s" className="sd">
                              S
                              <img className="crossed-out" src="//theme.hstatic.net/1000344185/1000478812/14/soldout.png?v=410" />
                              <img className="img-check" src="//theme.hstatic.net/1000344185/1000478812/14/select-pro.png?v=410" />
                            </label>
                          </div>
                          <div data-value="M" className="n-sd swatch-element m ">
                            <input className="variant-0" id="swatch-0-m" type="radio" name="option1" defaultValue="M" />
                            <label htmlFor="swatch-0-m">
                              M
                              <img className="crossed-out" src="//theme.hstatic.net/1000344185/1000478812/14/soldout.png?v=410" />
                              <img className="img-check" src="//theme.hstatic.net/1000344185/1000478812/14/select-pro.png?v=410" />
                            </label>
                          </div>
                          <div data-value="L" className="n-sd swatch-element l ">
                            <input className="variant-0" id="swatch-0-l" type="radio" name="option1" defaultValue="L" />
                            <label htmlFor="swatch-0-l">
                              L
                              <img className="crossed-out" src="//theme.hstatic.net/1000344185/1000478812/14/soldout.png?v=410" />
                              <img className="img-check" src="//theme.hstatic.net/1000344185/1000478812/14/select-pro.png?v=410" />
                            </label>
                          </div>
                          <div data-value="XL" className="n-sd swatch-element xl  soldout">
                            <input className="variant-0" id="swatch-0-xl" type="radio" name="option1" defaultValue="XL" disabled="disabled" />
                            <label htmlFor="swatch-0-xl">
                              XL
                              <img className="crossed-out" src="//theme.hstatic.net/1000344185/1000478812/14/soldout.png?v=410" />
                              <img className="img-check" src="//theme.hstatic.net/1000344185/1000478812/14/select-pro.png?v=410" />
                            </label>
                          </div>
                        </div> */}

                        <div className="form-input" style={{ width: '100%' }}>
                          <button type="button" className="btn-addcart" data-price={40000000} data-del={0} style={{ display: 'block' }}>Thêm vào giỏ</button>
                          <button disabled className="btn-detail addtocart btn-color-add btn-min-width btn-mgt btn-soldout" style={{ display: 'none' }}>Hết hàng</button>
                          <div className="qv-readmore">
                            <span> hoặc </span><a className="read-more p-url" href="/products/cargo-shorts-sand" role="button">Xem chi tiết</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>{/* /.modal-content */}
          </div>{/* /.modal-dialog */}


        </div> {/* End Modal Quickview cart */}

      </div>
    </div>
  );
}
