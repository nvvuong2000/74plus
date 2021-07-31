import React,{useState} from 'react'
import * as cartManage from "../../actions/cart";
import { useDispatch, useSelector } from "react-redux";
export default function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();

    const onDeleteItem = ((product) => {
        dispatch(cartManage.DeleteToCard(product));
    });

    const onChangeQuan = ((product, typechange) => {
        setQuantity(typechange)
        dispatch(cartManage.ChangeItem(product, typechange));
    })

    const [quantity, setQuantity] = useState(item.quanlity);

    return (
        <tr>
            <td className="product_remove"><a onClick={() => { onDeleteItem(item.product)}}><i className="fa fa-trash-o" /></a></td>
            <td className="product_thumb"><a href="#"><img src={item.product.frontImg} alt /></a></td>
            <td className="product_name"><a href="product-details-default.html">{item.product.productName}</a></td>
            <td className="product-price">{item.product.unitPrice}</td>
            <td className="product_quantity"><label>Quantity</label> <input min={1} max={100} defaultValue={quantity} onChange={(e) => { onChangeQuan(item.product, e.target.value)}} type="number" /></td>
            <td className="product_total">{quantity * item.product.unitPrice}</td>
        </tr>
    )
}
