import React, { useState, useEffect, Fragment } from "react";
import * as productManage from "../../actions/asset";
import { useDispatch, useSelector } from "react-redux";

export default function ProductItemList(props) {
    const dispatch = useDispatch();
    const { item } = props;
    const [id, setId] = useState(0);
    const assetDetails = useSelector((state) => state.asset.assetSelected);
    console.log(assetDetails)
    useEffect(() => {
        dispatch(productManage.getAssetById(id));
    }, [id]);
    const handleClick = (id) => {
        setId(id);
    }
    return (
        <div className="product-list-item mb-40">
            <div className="row">
                {/*Single List Product Start*/}
                <div className="col-md-4 col-sm-6 col-xs-6">
                    <div className="single-product">
                        <div className="product-img img-full">
                            <a href="#">
                                <img src={item.frontImagePath} alt={`hình ảnh minh họa cho ${item.productName}`} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="product-content shop-list">
                        <h2 style={{textTransform:"uppercase"}}><a href="#">{item.productName}</a></h2>
                        <div className="product-description">
                            <p>
                                {item.description}
                            </p>
                        </div>
                        <div className="product-price">
                            <div className="price-box">
                                <span className="regular-price">{item.unitPrice}₫</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Single List Product End*/}
            </div>
        </div>

    )
}
