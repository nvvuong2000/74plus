import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productManage from "../../actions/asset";
import * as cartManage from "../../actions/cart";
// import './Header/Header.scss'
import { Card, Col, Container, Row } from 'react-bootstrap';
export default function Header() {
    const dispatch = useDispatch();

    const getItemList = useSelector((state) => state.cart);
    const [item, setItems] = useState([]);

    useEffect(() => {
        dispatch(cartManage.getAll())
    }, []);
    useEffect(() => {
        setItems(getItemList);
    }, [getItemList]);
    var quan = JSON.parse(window.localStorage.getItem("damua"));
    console.log(quan.length);
    return (
        <header className="no-index">
            <Container>
                <div className="row row-ibl mid">
                    <a className="cart-head visible-xs" href="/cart" style={{ position: 'relative' }}>
                        <img src="./cart-icon.webp" alt title />
                        <span className="hd-cart-count">{getItemList.length}</span>
                    </a>
                    <div className="col-md-2 col-xs-12 centermb">
                        <a className="logo" href="/" title>
                            <img src="./logo.png" />
                        </a>
                    </div>
                    <div className="col-md-10 col-xs-12 text-right hidden-xs hidden-sm">
                        <nav className="main-nav">
                            <ul id="menu-main-menu" className>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                    <a href="#">HOME</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                    <a href="#">SALE</a>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-10">10% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-15">15% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-20">20% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-30">30% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-40">40% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-50">50% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-60">60%OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                    <a href="#">SIZE CHART</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                    <a href="#">ABOUT US</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="#">CHÍNH SÁCH ĐỔI TRẢ</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page "><a href="#"> Đăng nhập</a></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </nav>
                        <div className="search" id="sea">
                            <button type="button" data-show="#search" id="search-des">
                                <img src="./icon-search.webp" alt title />
                            </button>
                            <div className="ct" id="search">
                                <form className="search-fr" action="/search">
                                    <div className="form-input">
                                        <input name="q" id="search" placeholder="Tìm kiếm..." defaultValue type="text" required="required" />
                                        <button type="submit">
                                            <i className="fa fa-search" />
                                        </button>							</div>
                                </form>
                            </div>
                        </div>
                        <div className="search">
                            <a className="cart-head" href="/cart" style={{ position: 'relative' }}>
                                <img src="./cart-icon.webp" alt title />
                                <span className="hd-cart-count">{getItemList.length}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="sub-head">
                <button className="snav-btn">
                    <i />
                    <i />
                    <i />
                </button>
                <div className="main">
                    <div className="bar">
                        <a className="nv-logo" href="/" title>
                            <img style={{ maxWidth: 90 }} src="./logo.png" alt />
                        </a>
                        <form className="search-fr" action="/search">
                            <input name="q" id="search" placeholder="Tìm kiếm..." defaultValue type="text" required="required" />
                            <button type="submit">
                                <i className="fa fa-search" />
                            </button>
                        </form>
                        <nav>
                            <ul id="menu-main-menu" className>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                    <a href="/collections/new-arrivals">HOME</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                    <a href="/collections/tops">TOPS</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                    <a href="/collections/outerwear">OUTERWEAR</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                    <a href="/collections/bottoms">BOTTOMS</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                    <a href="/collections/accessories">ACCESSORIES</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><button type="button" className="nav-drop" />
                                    <a href="/pages/sale">SALE</a>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-10">10% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-15">15% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-20">20% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-30">30% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-40">40% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-50">50% OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/collections/sale-60">60%OFF</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                    <a href="/pages/size-chart">SIZE CHART</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><button type="button" className="nav-drop" />
                                    <a href="/pages/about-us">ABOUT US</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                            <a href="/pages/chinh-sach-doi-tra">CHÍNH SÁCH ĐỔI TRẢ</a>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page "><a href="#"> Đăng ký / đăng nhập</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page "><a href="/cart"> Giỏ hàng</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )
}
