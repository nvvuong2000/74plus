import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productManage from "../../actions/asset";
import * as cartManage from "../../actions/cart";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

export default function Cart() {
    const dispatch = useDispatch();

    const getItemList = useSelector((state) => state.cart);
    const [item, setItems] = useState([]);

    useEffect(() => {
        dispatch(cartManage.getAll())
    }, []);
    useEffect(() => {
        setItems(getItemList);
    }, [getItemList]);

    console.log(item);

    return (
        <div>
            {item && item.length !== 0 ? (
                <div className="cart-section">
                    {/* Start Cart Table */}
                    <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay={0}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table_desc">
                                        <div className="table_page table-responsive">
                                            <table>
                                                {/* Start Cart Table Head */}
                                                <thead>
                                                    <tr>
                                                        <th className="product_remove">Delete</th>
                                                        <th className="product_thumb">Image</th>
                                                        <th className="product_name">Product</th>
                                                        <th className="product-price">Price</th>
                                                        <th className="product_quantity">Quantity</th>
                                                        <th className="product_total">Total</th>
                                                    </tr>
                                                </thead> {/* End Cart Table Head */}
                                                <tbody>
                                                    {/* Start Cart Single Item*/}

                                                    {/* Start Cart Single Item*/}
                                                    {item && item.map((value, index) => {
                                                        return (
                                                            <CartItem key={index} item={value} />
                                                        )
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="cart_submit">
                                            <button className="btn btn-md btn-golden" type="submit">update cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* End Cart Table */}
                    {/* Start Coupon Start */}
                    <div className="coupon_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="coupon_code left" data-aos="fade-up" data-aos-delay={200}>
                                        <h3>Coupon</h3>
                                        <div className="coupon_inner">
                                            <p>Enter your coupon code if you have one.</p>
                                            <input className="mb-2" placeholder="Coupon code" type="text" />
                                            <button type="submit" className="btn btn-md btn-golden">Apply coupon</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="coupon_code right" data-aos="fade-up" data-aos-delay={400}>
                                        <h3>Cart Totals</h3>
                                        <div className="coupon_inner">
                                            <div className="cart_subtotal">
                                                <p>Subtotal</p>
                                                <p className="cart_amount">$215.00</p>
                                            </div>
                                            <div className="cart_subtotal ">
                                                <p>Shipping</p>
                                                <p className="cart_amount"><span>Flat Rate:</span> $255.00</p>
                                            </div>
                                            <a href="#">Calculate shipping</a>
                                            <div className="cart_subtotal">
                                                <p>Total</p>
                                                <p className="cart_amount">$215.00</p>
                                            </div>
                                            <div className="checkout_btn">
                                                <a href="#" className="btn btn-md btn-golden">Proceed to Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <EmptyCart></EmptyCart>}
        </div>

    )
}
