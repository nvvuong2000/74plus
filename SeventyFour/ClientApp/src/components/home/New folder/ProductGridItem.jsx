import React, { useState, useEffect, Fragment } from "react";
import * as productManage from "../../actions/asset";
import { useDispatch, useSelector } from "react-redux";

export default function ProductItem(props) {
    const dispatch = useDispatch();
    const {item} = props;
    const [id, setId] = useState(0);
    const assetDetails = useSelector((state) => state.asset.assetSelected);
    console.log(assetDetails)
    useEffect(() => {
        dispatch(productManage.getAssetById(id));
    }, [id]);
    const handleClick=(id)=>{
        setId(id);
    }
    return (
        <Fragment>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                {/* Start Product Default Single Item */}
                <div className="product-default-single-item product-color--golden" data-aos="fade-up" data-aos-delay={0}>
                    <div className="image-box">
                        <a href="product-details-default.html" className="image-link">
                            <img src={item.frontImagePath} alt={`hình ảnh minh họa cho ${item.productName}`} />
                            <img src={item.backImagePath}  alt={`hình ảnh minh họa cho ${item.productName}`} />
                        </a>
                        <div className="action-link">
                            <div className="action-link-left" style={{ textAlign: "center" }}>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal" onClick={()=>{handleClick(item.productId)}}>Xem nhanh</a>
                            </div>
                          
                        </div>
                    </div>
                    <div className="content-center mt-3" style={{textAlign:"center"}}>
                        <div className="content-left" style={{ textAlign: "center" }}>
                            <h6 className="title"><a href="product-details-default.html">{item.productName}</a></h6>
                           
                        </div>
                        <div class="size-avai clearfix">
                            {/* <span class="title">Kích thước: </span> */}
                            <span class="size-variant ">
                                S</span>
                            <span class="size-variant ">
                                M</span>
                            <span class="size-variant ">
                                L</span>
                            <span class="size-variant ">
                                XL</span>

                        </div>
                        <div class="price-box">


                            <span class="regular-price">450,000₫</span>
                        </div>
                        {/* <div className="content-right">
                            <span className="price">{item.unitPrice}</span>
                        </div> */}
                    </div>
                </div>
                {/* End Product Default Single Item */}
            </div>
       
     
        </Fragment>
    )
}
