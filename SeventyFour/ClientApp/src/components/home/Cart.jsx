import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productManage from "../../actions/asset";
import * as cartManage from "../../actions/cart";

import CartItem from "./CartItem";
// import CartItem from "./CartItem";
// import EmptyCart from "./EmptyCart";
export default function Cart() {
    useEffect(() => {
        document.title = "Giỏ Hàng "
    }, []);
    const dispatch = useDispatch();

    const getItemList = useSelector((state) => state.cart);
    const total = useSelector((state) => state.checkout.total);
    console.log(total);
    const [item, setItems] = useState([]);

    useEffect(() => {
        dispatch(cartManage.getAll())
    }, []);
    useEffect(() => {
        setItems(getItemList);
    }, [getItemList]);
    const showTotal = (cart) => {
        console.log(cart);
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            total += cart[i].product.unitPrice * cart[i].quanlity;

        }
        return total;
    }
    function formatCash(str) {

        return str.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    }
    console.log(item);
    return (
        <section id="stCart">
            <div className="cart-page mt-50 mb-50">
                <div className="container">
                    <div className="headingPage">
                        <h1 className="titlet">Giỏ hàng</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 listItem">
                            <div className="table-cart-area">
                                <table className="table table-cart">
                                    <tbody>
                                        <tr>
                                            <th className="product">Sản phẩm</th>
                                            <th className="qty">Số lượng</th>
                                            <th className="linePrice">Tổng tiền</th>
                                            <th className="remove">Xóa</th>
                                        </tr>
                                        
                                        {item && item.map((value, index) => {
                                            return (
                                                <CartItem key={index} item={value} />
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {/* <div className="note_item">
                                    <div className="note_cart">
                                        <label className="control-label" htmlFor="CartSpecialInstructions">Instagram</label>
                                        <textarea name="note" className="form-control" placeholder="Vui lòng nhập Instagram của bạn" id="CartSpecialInstructions" defaultValue={""} />
                                    </div>
                                </div> */}
                                <div className="calculate-area">
                                    <div className="ct-ft-cart">
                                        <div className="total-cart">
                                            <div className="subtotal">
                                                Tổng tiền <b>{formatCash(showTotal(getItemList))}₫</b>
                                            </div>
                                            <div className="final-total text-center">
                                                <a href="/checkout" className="update-cart">Thanh toán</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
