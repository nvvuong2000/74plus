import React, { useState, useEffect, Fragment } from "react";
import * as productManage from "../../actions/asset";
import * as cartManage from "../../actions/cart";
import { useDispatch, useSelector } from "react-redux";

export default function ProductItemGrid(props) {
    const dispatch = useDispatch();
    const { item } = props;
    console.log(props.item);
    const [id, setId] = useState(0);
    const assetDetails = useSelector((state) => state.asset.assetSelected);
    console.log(assetDetails)
    useEffect(() => {
        dispatch(productManage.getAssetById(id));
    }, [id]);
    const handleClick = (id) => {
        setId(id);
    }
    const addProductToCart = ((id) => {
        console.log(id);
        dispatch(cartManage.addToCard(id, 1))
    });

    return (
        <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="single-product mb-10">
                <div className="product-img img-full">
                    <a href="#">
                        <img className="visible-xs lazyload" src={item.frontImagePath} alt={`hình ảnh minh họa cho ${item.productName}`} />
                        <img className="hidden-xs lazyload" src={item.frontImagePath} alt={`hình ảnh minh họa cho ${item.productName}`} />
                        <img className="pro-img2 hidden-xs" src={item.backImagePath} alt={`hình ảnh minh họa cho ${item.productName}`} />
                    </a>
                    <a href="#" className="product-action btn-quickview-1">
                        <ul>
                            <li onClick={() => { addProductToCart(item)}}>XEM NHANH</li>
                        </ul>
                    </a>
                </div>
                <div className="product-content">
                    <h2><a href="/products/90-s-tee-white" style={{textTransform:"uppercase"}}>{item.productName}</a></h2>
                    <div className="product-price">
                        <div className="price-box">
                            <span className="regular-price">{item.unitPrice}₫</span>
                        </div>
                    </div>
                </div>
                <div className="size-avai clearfix">
                    <span className="title">Kích thước: </span>
                    <span className="size-variant ">
                        S</span>
                    <span className="size-variant ">
                        M</span>
                    <span className="size-variant ">
                        L</span>
                    <span className="size-variant ">
                        XL</span>
                </div>
            </div>
        </div>
    )
}
