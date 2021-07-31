import ProductGridItem from './ProductGridItem'
import ProductListItem from './ProductListItem'
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productManage from "../../actions/asset";

import { useHistory } from "react-router-dom";

export default function ListProduct() {

    const dispatch = useDispatch();
    const history = useHistory();

    const getPageList = useSelector((state) => state.asset.page);
    const getProductList = useSelector((state) => state.asset.assetList);

    console.log(getProductList);

    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [assetList, setAssetList] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        
        const data = {
            "categories": [-1],
            "states": [-2],
            "keyword": keyword,
            "column": selectedOption,
            "sortASC": true,
        }
        dispatch(productManage.filter(data, page));
    }, [keyword, selectedOption, page]);


    const goToNextPage = () => {
        setPage((page) => page + 1);
    }

    const goToPreviousPage = () => {
        setPage((page) => page - 1);
    }

    return (
        <Fragment>
            <div className="product-default-slider-section section-top-gap-100 section-fluid">
                {/* Start Section Content Text Area */}
                <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay={0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-content-gap">
                                    <div className="secton-content">
                                        <h3 className="section-title">the New arrivals</h3>
                                        <p>Preorder now to receive exclusive deals &amp; gifts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ...:::: Start Shop Section:::... */}

            <div className="shop-section">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-12">
                            {/* Start Shop Product Sorting Section */}
                            <div className="shop-sort-section">
                                <div className="container">
                                    <div className="row">
                                        {/* Start Sort Wrapper Box */}
                                        <div className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column" data-aos="fade-up" data-aos-delay={0}>
                                            {/* Start Sort tab Button */}
                                            <div className="sort-tablist d-flex align-items-center">
                                                <ul className="tablist nav sort-tab-btn">
                                                    <li><a className="nav-link active" data-bs-toggle="tab" href="#layout-4-grid"><img src="assets/images/icons/bkg_grid.png" alt /></a></li>
                                                    <li><a className="nav-link" data-bs-toggle="tab" href="#layout-list"><img src="assets/images/icons/bkg_list.png" alt /></a></li>
                                                </ul>
                                                {/* Start Page Amount */}
                                                <div className="page-amount ml-2">
                                                    <a href="./shop-grid-sidebar-left.html">Lọc</a>
                                                </div> {/* End Page Amount */}
                                            </div> {/* End Sort tab Button */}
                                            {/* Start Sort Select Option */}
                                            <div className="sort-select-list d-flex align-items-center">
                                                <label className="mr-2">Sắp xếp</label>
                                                <form action="#">
                                                    <fieldset>
                                                        <select name="speed" id="speed"
                                                            value={selectedOption}
                                                            onChange={e => setSelectedOption(e.target.value)}
                                                        >                                                    
                                                            <option selected="selected" value="newest">Sort by newness</option>
                                                            <option value="ascPrice">Sort by price: low to high</option>
                                                            <option value="descPrice">Sort by price: high to low</option>
                                                            <option value="ascName">Product Name: A-Z</option>
                                                        </select>
                                                    </fieldset>
                                                </form>
                                            </div> {/* End Sort Select Option */}
                                        </div> {/* Start Sort Wrapper Box */}
                                    </div>
                                </div>
                            </div> {/* End Section Content */}
                            {/* Start Tab Wrapper */}
                            <div className="sort-product-tab-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tab-content">
                                                {/* Start Grid View Product */}
                                                <div className="tab-pane active show sort-layout-single" id="layout-4-grid">
                                                    <div className="row">
                                                        {getProductList.map((value,index)=>{
                                                            return <ProductGridItem key ={index} item={value}></ProductGridItem>
                                                        })}
                                                       {/* <ProductGridItem></ProductGridItem>
                                                       <ProductGridItem></ProductGridItem>
                                                       <ProductGridItem></ProductGridItem>
                                                       <ProductGridItem></ProductGridItem>                                                     */}
                                                        </div>                                                                                                  
                                                </div> {/* End Grid View Product */}
                                                {/* Start List View Product */}
                                                <div className="tab-pane sort-layout-single" id="layout-list">
                                                    <div className="row">
                                                 
                                                       <ProductListItem></ProductListItem>
                                                       <ProductListItem></ProductListItem>
                                                       <ProductListItem></ProductListItem>
                                                       <ProductListItem></ProductListItem>
                                                    </div>
                                                </div> {/* End List View Product */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End Tab Wrapper */}
                            {/* Start Pagination */}
                            <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay={0}>
                                {getPageList.length !== 1 ? (<ul>
                                    <li>
                                        <a type="button"
                                            onClick={goToPreviousPage}
                                            disabled={page === 1 ? true : false}
                                            className={page === 1 ? "disabled page-link" : "page-link"}
                                        >
                                            <i className="ion-ios-skipbackward" />
                                        </a>
                                    </li>
                                    {getPageList && getPageList.map((item, index) => {
                                        return (<li>
                                            <a type="button"
                                                key={index}
                                                onClick={() => setPage(index + 1)}
                                                className={`${page === index + 1 ? "active" : null}`}
                                            >
                                                <span>{index + 1}</span>
                                            </a>
                                        </li>
                                        )
                                    })}
                                    
                                    <li class="page-item">
                                        <a type="button"
                                            onClick={goToNextPage}
                                            disabled={page === getPageList.length ? true : false}
                                            className={page === getPageList.length ? "disabled" : ""}
                                        >
                                            <i className="ion-ios-skipforward" />
                                        </a>
                                    </li>
                                </ul>) : ""}
                            </div> {/* End Pagination */}
                            
                        </div> {/* End Shop Product Sorting Section  */}
                    </div>
                </div>
            </div> {/* ...:::: End Shop Section:::... */}
        </Fragment>
    )
}
