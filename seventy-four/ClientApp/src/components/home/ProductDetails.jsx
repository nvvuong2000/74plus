import React, { useState, useEffect, Fragment } from "react";
import * as productManage from "../../actions/asset";
import * as cartManage from "../../actions/cart";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails({ match }) {
    const dispatch = useDispatch();
    var idProduct = match.params.id
    console.log(idProduct);
    const [id, setId] = useState(0);
    const productDetails = useSelector((state) => state.asset.assetSelected);
    console.log(productDetails)
    useEffect(() => {
        dispatch(productManage.getAssetById(idProduct));
    }, [idProduct]);
    function formatCash(str) {

        return str.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    }
    return (
        <h1> BAC</h1>
        // <div className="xxx" style={{ paddingTop: 0 }}>
        //     <section id="stProductPage" className="tamplateSection mt-70 no-js">
        //         <div className="container">
        //             <div className="row pro-content">
        //                 <div className="col-md-6 col-sm-6 col-xs-12">
        //                     <div className="slider-image">
        //                         <div id="slider" className="flexslider">
        //                             <ul className="slides">
        //                                 <li>
        //                                     <span>
        //                                         <a className="fancybox-thumb" data-fancybox="group" data-fancybox-group="group" rel="group" href="//product.hstatic.net/1000344185/product/2571_2f9be012004d4922859f79c448742e01_master.jpg">
        //                                             <img className="product-image-feature" src="//product.hstatic.net/1000344185/product/2571_2f9be012004d4922859f79c448742e01_master.jpg" alt />
        //                                         </a>
        //                                     </span>
        //                                 </li>
        //                             </ul>
        //                         </div>
        //                         <div className="image ma-product-slider-img hidden">
        //                             <a className="fancybox-thumb" data-fancybox="images" data-fancybox-group="group2571" rel="group2571" href="//product.hstatic.net/1000344185/product/2571_2f9be012004d4922859f79c448742e01_master.jpg">
        //                                 <img data-image="//product.hstatic.net/1000344185/product/2571_2f9be012004d4922859f79c448742e01_master.jpg" data-dcm="xxx-2571" className=" center-block img-responsive main-image " style={{}} src="//product.hstatic.net/1000344185/product/2571_2f9be012004d4922859f79c448742e01_1024x1024.jpg" />
        //                             </a>
        //                         </div>
        //                         <div className="image ma-product-slider-img hidden">
        //                             <a className="fancybox-thumb" data-fancybox="images" data-fancybox-group="group2572" rel="group2572" href="//product.hstatic.net/1000344185/product/2572_1e45c22e6732488aafbbc0b09bc6ca97_master.jpg">
        //                                 <img data-image="//product.hstatic.net/1000344185/product/2572_1e45c22e6732488aafbbc0b09bc6ca97_master.jpg" data-dcm="xxx-2572" className=" center-block img-responsive main-image " style={{}} src="//product.hstatic.net/1000344185/product/2572_1e45c22e6732488aafbbc0b09bc6ca97_1024x1024.jpg" />
        //                             </a>
        //                         </div>
        //                         <div className="image ma-product-slider-img hidden">
        //                             <a className="fancybox-thumb" data-fancybox="images" data-fancybox-group="group2576" rel="group2576" href="//product.hstatic.net/1000344185/product/2576_a0c95dd2d21645bab9900652b385ee0b_master.jpg">
        //                                 <img data-image="//product.hstatic.net/1000344185/product/2576_a0c95dd2d21645bab9900652b385ee0b_master.jpg" data-dcm="xxx-2576" className=" center-block img-responsive main-image " style={{}} src="//product.hstatic.net/1000344185/product/2576_a0c95dd2d21645bab9900652b385ee0b_1024x1024.jpg" />
        //                             </a>
        //                         </div>
        //                         <div className="image ma-product-slider-img hidden">
        //                             <a className="fancybox-thumb" data-fancybox="images" data-fancybox-group="group2563" rel="group2563" href="//product.hstatic.net/1000344185/product/2563_7f6f363bd79746a881cd76fe0fda07a1_master.png">
        //                                 <img data-image="//product.hstatic.net/1000344185/product/2563_7f6f363bd79746a881cd76fe0fda07a1_master.png" data-dcm="xxx-2563" className=" center-block img-responsive main-image " style={{}} src="//product.hstatic.net/1000344185/product/2563_7f6f363bd79746a881cd76fe0fda07a1_1024x1024.png" />
        //                             </a>
        //                         </div>
        //                         <div className="image ma-product-slider-img hidden">
        //                             <a className="fancybox-thumb" data-fancybox="images" data-fancybox-group="group2569" rel="group2569" href="//product.hstatic.net/1000344185/product/2569_98c8f240b9a64d96a36580e809617701_master.png">
        //                                 <img data-image="//product.hstatic.net/1000344185/product/2569_98c8f240b9a64d96a36580e809617701_master.png" data-dcm="xxx-2569" className=" center-block img-responsive main-image " style={{}} src="//product.hstatic.net/1000344185/product/2569_98c8f240b9a64d96a36580e809617701_1024x1024.png" />
        //                             </a>
        //                         </div>
        //                         <div id="carousel" className="flexslider">
        //                             <div className="flex-viewport" style={{ overflow: 'hidden', position: 'relative' }}><ul className="slides" style={{ width: '1000%', transitionDuration: '0s', transform: 'translate3d(0px, 0px, 0px)' }}>
        //                                 <li className="product-thumb checked" style={{ width: 75, marginRight: 10, float: 'left', display: 'block' }}>
        //                                     <a href="#" data-image="//product.hstatic.net/1000344185/product/2571_2f9be012004d4922859f79c448742e01_master.jpg" data-zoom-image="//product.hstatic.net/1000344185/product/2571_2f9be012004d4922859f79c448742e01_master.jpg">
        //                                         <img src="//product.hstatic.net/1000344185/product/2571_2f9be012004d4922859f79c448742e01_master.jpg" data-image="//product.hstatic.net/1000344185/product/2571_2f9be012004d4922859f79c448742e01_master.jpg" alt draggable="false" />
        //                                     </a>
        //                                 </li>
        //                                 <li className="product-thumb " style={{ width: 75, marginRight: 10, float: 'left', display: 'block' }}>
        //                                     <a href="#" data-image="//product.hstatic.net/1000344185/product/2572_1e45c22e6732488aafbbc0b09bc6ca97_master.jpg" data-zoom-image="//product.hstatic.net/1000344185/product/2572_1e45c22e6732488aafbbc0b09bc6ca97_master.jpg">
        //                                         <img src="//product.hstatic.net/1000344185/product/2572_1e45c22e6732488aafbbc0b09bc6ca97_master.jpg" data-image="//product.hstatic.net/1000344185/product/2572_1e45c22e6732488aafbbc0b09bc6ca97_master.jpg" alt draggable="false" />
        //                                     </a>
        //                                 </li>
        //                                 <li className="product-thumb " style={{ width: 75, marginRight: 10, float: 'left', display: 'block' }}>
        //                                     <a href="#" data-image="//product.hstatic.net/1000344185/product/2576_a0c95dd2d21645bab9900652b385ee0b_master.jpg" data-zoom-image="//product.hstatic.net/1000344185/product/2576_a0c95dd2d21645bab9900652b385ee0b_master.jpg">
        //                                         <img src="//product.hstatic.net/1000344185/product/2576_a0c95dd2d21645bab9900652b385ee0b_master.jpg" data-image="//product.hstatic.net/1000344185/product/2576_a0c95dd2d21645bab9900652b385ee0b_master.jpg" alt draggable="false" />
        //                                     </a>
        //                                 </li>
        //                                 <li className="product-thumb " style={{ width: 75, marginRight: 10, float: 'left', display: 'block' }}>
        //                                     <a href="#" data-image="//product.hstatic.net/1000344185/product/2563_7f6f363bd79746a881cd76fe0fda07a1_master.png" data-zoom-image="//product.hstatic.net/1000344185/product/2563_7f6f363bd79746a881cd76fe0fda07a1_master.png">
        //                                         <img src="//product.hstatic.net/1000344185/product/2563_7f6f363bd79746a881cd76fe0fda07a1_master.png" data-image="//product.hstatic.net/1000344185/product/2563_7f6f363bd79746a881cd76fe0fda07a1_master.png" alt draggable="false" />
        //                                     </a>
        //                                 </li>
        //                                 <li className="product-thumb " style={{ width: 75, marginRight: 10, float: 'left', display: 'block' }}>
        //                                     <a href="#" data-image="//product.hstatic.net/1000344185/product/2569_98c8f240b9a64d96a36580e809617701_master.png" data-zoom-image="//product.hstatic.net/1000344185/product/2569_98c8f240b9a64d96a36580e809617701_master.png">
        //                                         <img src="//product.hstatic.net/1000344185/product/2569_98c8f240b9a64d96a36580e809617701_master.png" data-image="//product.hstatic.net/1000344185/product/2569_98c8f240b9a64d96a36580e809617701_master.png" alt draggable="false" />
        //                                     </a>
        //                                 </li>
        //                             </ul>
        //                             </div>
        //                             {/* <ul className="flex-direction-nav">
        //                             <li className="flex-nav-prev"><a className="flex-prev flex-disabled" href="#" tabIndex={-1}>Previous</a></li>
        //                             <li className="flex-nav-next"><a className="flex-next flex-disabled" href="#" tabIndex={-1}>Next</a></li>
        //                             </ul> */}
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6 col-sm-6 col-xs-12">
        //                     <div className="description-product">
        //                         <div className="info-desc">
        //                             <h2>{productDetails.productName}</h2>
        //                             <div className="price pdPrice">
        //                                 <span id="pro-price"><span>{formatCash(productDetails.unitPrice)}₫</span></span>
        //                             </div>
        //                         </div>
        //                         <div className="qty-cart">
        //                             <form id="form-pro" action="#" method="get" className="qty-number-cart">
        //                                 <input type="button" defaultValue="-" className="qtyminus" field="quantity" />
        //                                 <input type="text" name="quantity" defaultValue={1} className="qty" />
        //                                 <input type="button" defaultValue="+" className="qtyplus" field="quantity" />
        //                                 <div className="select-swatch" style={{ display: 'table', clear: 'both' }}>
        //                                     <div id="variant-swatch-0" className="swatch clearfix" data-option="option1" data-option-index={0}>
        //                                         <div className="header-s">SIZE</div>
        //                                         <div className="select-swap">
        //                                             <div data-value="S" className="n-sd swatch-element s ">
        //                                                 <input className="variant-0" id="swatch-0-s" type="radio" name="option1" defaultValue="S" defaultChecked />
        //                                                 <label htmlFor="swatch-0-s" className="sd">
        //                                                     S
        //                                                     <img className="crossed-out" src="//theme.hstatic.net/1000344185/1000478812/14/soldout.png?v=421" />
        //                                                     <img className="img-check" src="//theme.hstatic.net/1000344185/1000478812/14/select-pro.png?v=421" />
        //                                                 </label>
        //                                             </div>
        //                                             <div data-value="M" className="n-sd swatch-element m ">
        //                                                 <input className="variant-0" id="swatch-0-m" type="radio" name="option1" defaultValue="M" />
        //                                                 <label htmlFor="swatch-0-m">
        //                                                     M
        //                                                     <img className="crossed-out" src="//theme.hstatic.net/1000344185/1000478812/14/soldout.png?v=421" />
        //                                                     <img className="img-check" src="//theme.hstatic.net/1000344185/1000478812/14/select-pro.png?v=421" />
        //                                                 </label>
        //                                             </div>
        //                                             <div data-value="L" className="n-sd swatch-element l ">
        //                                                 <input className="variant-0" id="swatch-0-l" type="radio" name="option1" defaultValue="L" />
        //                                                 <label htmlFor="swatch-0-l">
        //                                                     L
        //                                                     <img className="crossed-out" src="//theme.hstatic.net/1000344185/1000478812/14/soldout.png?v=421" />
        //                                                     <img className="img-check" src="//theme.hstatic.net/1000344185/1000478812/14/select-pro.png?v=421" />
        //                                                 </label>
        //                                             </div>
        //                                             <div data-value="XL" className="n-sd swatch-element xl ">
        //                                                 <input className="variant-0" id="swatch-0-xl" type="radio" name="option1" defaultValue="XL" />
        //                                                 <label htmlFor="swatch-0-xl">
        //                                                     XL
        //                                                     <img className="crossed-out" src="//theme.hstatic.net/1000344185/1000478812/14/soldout.png?v=421" />
        //                                                     <img className="img-check" src="//theme.hstatic.net/1000344185/1000478812/14/select-pro.png?v=421" />
        //                                                 </label>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 <div className="selector-wrapper"><label htmlFor="productSelect-option-0">SIZE</label><select className="single-option-selector" data-option="option1" id="productSelect-option-0"><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option></select></div><select name="id" id="productSelect" className="product-single-variants" style={{ display: 'none' }}>
        //                                     <option selected="selected" data-sku="CRG-SHRT-BLK-S" value={1075140158}>S - 400,000 VND</option>
        //                                     <option data-sku="CRG-SHRT-BLK-M" value={1075140159}>M - 400,000 VND</option>
        //                                     <option data-sku="CRG-SHRT-BLK-L" value={1075140160}>L - 400,000 VND</option>
        //                                     <option data-sku="CRG-SHRT-BLK-XL" value={1075140161}>XL - 400,000 VND</option>
        //                                 </select>
        //                             </form>
        //                             <div className="link-detail">
        //                                 <a href="javascript:void(0)" className="add-to-c btnAddCart">Thêm vào giỏ</a>
        //                                 <a href="javascript:void(0)" className="add-to-c btnSoldOut" style={{ display: 'none' }}>Thêm vào giỏ</a>
        //                             </div>
        //                         </div>
        //                         <div className="list-pd-dt clearfix">
        //                             <div className="sku-p">
        //                                 <b>SKU</b>
        //                                 <p> CRG-SHRT-BLK-S</p>
        //                             </div>
        //                             <div className="size-chart">
        //                                 <u><a href="/pages/size-chart">HƯỚNG DẪN CHỌN SIZE</a></u>
        //                             </div>
        //                         </div>
        //                         <div className="description clearfix">
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //     <style dangerouslySetInnerHTML={{ __html: "\n                                                                                                                                                                    label[for] {\n                                                                                                                                                                        cursor: pointer;\n\t}\n                                                                                                                                                                    .soldout{\n                                                                                                                                                                        //display:none !important;\n                                                                                                                                                                    }\n                                                                                                                                                                " }} />
        // </div>



    )
}
