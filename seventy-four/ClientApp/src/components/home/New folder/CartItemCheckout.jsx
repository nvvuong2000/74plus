import React, { useState,useEffect } from 'react'
import * as cartManage from "../../actions/cart";
import { useDispatch, useSelector } from "react-redux";
export default function CartItemCheckout(props) {
    const { item } = props;
    const dispatch = useDispatch();

    const onDeleteItem = ((product) => {
        dispatch(cartManage.DeleteToCard(product));
    });

    const onChangeQuan = ((product, typechange) => {
        console.log(typechange);
        setQuantity(typechange)
        dispatch(cartManage.ChangeItem(product, typechange));
    })
    function formatCash(str) {
     
        return str.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        
    }
    const [quantity, setQuantity] = useState(item.quanlity);
    useEffect(() => {
        dispatch(cartManage.totalCart())
    }, [quantity]);

    return (
            <tr className="product">
                <td className="product-image">
                    <div className="product-thumbnail">
                        <div className="product-thumbnail-wrapper">
                            <img className="product-thumbnail-image" alt={item.product.productName} src={item.product.frontImg} />
                        </div>
                    </div>
                </td>
                <td className="product-description">
                    <span className="product-description-name order-summary-emphasis">{item.product.productName} </span>
                <a className="deleteItem cart_remove" onClick={() => { onDeleteItem (item.product)}}>
                        <i className="fa fa-trash" aria-hidden="true" />
                    </a>
                    <div className="qtt_checkout qty quantity-partent qty-click clearfix">
                    <span className="add-down add-action" onClick={(e) => { onChangeQuan(item.product, quantity - 1) }}>-</span>
                        <input type="text" size={4} min={1} max={5000} value={quantity} className="tc line-item-qty item-quantity" readOnly />
                    <span className="add-up add-action" onClick={(e) => { onChangeQuan(item.product, quantity +1) }}>+</span>
                    </div>
                </td>
                <td className="product-price">
                    <span className="order-summary-emphasis">
                    {formatCash(quantity * item.product.unitPrice)}₫</span>
                </td>
            </tr>
           
        
    )
}
