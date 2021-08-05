import React, { Fragment, useState } from 'react'
import * as cartManage from "../../actions/cart";
import { useDispatch, useSelector } from "react-redux";
export default function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quanlity);

    const onDeleteItem = ((product) => {
        dispatch(cartManage.DeleteToCard(product));
    });

    const onChangeQuan = ((product, typechange) => {
        setQuantity(typechange)
        dispatch(cartManage.ChangeItem(product, typechange));
    })
    return (
        <Fragment>
            <tr className="cartItem" data-id={1075140170}>
                <td className="product"  >
                    <a href="/products/nylon-cargo-pants-black">
                        <div className="thumb-cart">
                            <img src={item.product.frontImg} alt />
                            <h4 >{item.product.productName} </h4>
                            <span className="variant_title" style={{ marginRight: "3px" }}>{item.product.size}</span>
                            <span>{item.product.unitPrice}₫</span>
                        </div>
                    </a>
                </td>
                <td className="qty">
                    <div className="qty-number">
                        <input type="button" defaultValue="-" className="qtyminus" field="quantity" onClick={(e) => { onChangeQuan(item.product, quantity - 1) }} />
                        <input type="text" size={4} name="quantity" min={1} max={100} value={quantity} onChange={(e) => { onChangeQuan(item.product, e.target.value) }} type="number" className="tc item-quantity qty" readOnly />
                        <input type="button" defaultValue="+" className="qtyplus" field="quantity" onClick={(e) => { onChangeQuan(item.product, quantity + 1) }}/>
                    </div>
                </td>
                <td className="linePrice">
                    <b>{quantity * item.product.unitPrice}₫</b>
                </td>
                <td className="remove">
                    <a className="remove-item" onClick={() => { onDeleteItem(item.product) }}><i className="fa fa-trash-o" aria-hidden="true" /></a>
                </td>
            </tr>

        </Fragment>

    )
}
