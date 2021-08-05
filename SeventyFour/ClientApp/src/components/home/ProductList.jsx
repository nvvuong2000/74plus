// import ProductGridItem from './ProductGridItem'
import ProductItemGrid from './ProductItemGrid';
// import ProductListItem from './ProductListItem'
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productManage from "../../actions/asset";
import { useHistory } from "react-router-dom";
import ProductItemList from './ProductItemList';

export default function ProductList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const getPageList = useSelector((state) => state.asset.page);
    const getProductList = useSelector((state) => state.asset.assetList);

    console.log(getProductList);

    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [assetList, setAssetList] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [toggle, setToggle] = useState(true);
    const [open, setOpen] = useState("");
    const onToggle = () => {
        setToggle(!toggle);
        if (toggle === true) {
            setOpen("open");
        }
        else if (toggle === false) {
            setOpen("");
        }
    }

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
        <div className="xxx" style={{ paddingTop: 0 }}>
            <div className="shop-area mb-70 mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-1 order-lg-2">
                            <div className="shop-layout">
                                <div className="shop-topbar-wrapper d-md-flex justify-content-md-between align-items-center">
                                    <div className="grid-list-option">
                                        <ul className="nav">
                                            <li id="tactive_1" className>
                                                <a data-toggle="tab" href="#grid" aria-expanded="true"><i className="fa fa-th-large" /></a>
                                            </li>
                                            <li id="tactive_2" className="active">
                                                <a data-toggle="tab" href="#list" aria-expanded="false"><i className="fa fa-th-list" /></a>
                                            </li>
                                            <li className="filter-container text-xs-center">
                                                <a className="filter-count filter-by" href>
                                                    <span>
                                                        Lọc
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="toolbar-short-area d-md-flex align-items-center">
                                        <div className="toolbar-shorter ">
                                            <label>Sắp xếp:</label>
                                            {/* <select className="wide sort-by custom-dropdown__select custom-dropdown__select--white" style={{ display: 'none' }} >
                                                <option value="manual">Sản phẩm nổi bật</option>
                                                <option value="price-ascending">Giá: Tăng dần</option>
                                                <option value="price-descending">Giá: Giảm dần</option>
                                                <option value="title-ascending">Tên: A-Z</option>
                                                <option value="title-descending">Tên: Z-A</option>
                                                <option value="created-ascending">Cũ nhất</option>
                                                <option value="created-descending">Mới nhất</option>
                                                <option value="best-selling">Bán chạy nhất</option>
                                            </select> */}
                                            <div className={`nice-select wide sort-by custom-dropdown__select custom-dropdown__select--white ${open}`} onClick={() => { onToggle() }} tabIndex={0} >
                                                <span className="current">Sản phẩm nổi bật</span><ul className="list">
                                                    <li data-value="manual" className="option selected">Sản phẩm nổi bật</li>
                                                    <li data-value="price-ascending" className="option">Giá: Tăng dần</li>
                                                    <li data-value="price-descending" className="option">Giá: Giảm dần</li>
                                                    <li data-value="title-ascending" className="option">Tên: A-Z</li>
                                                    <li data-value="title-descending" className="option">Tên: Z-A</li>
                                                    <li data-value="created-ascending" className="option">Cũ nhất</li>
                                                    <li data-value="created-descending" className="option">Mới nhất</li>
                                                    <li data-value="best-selling" className="option">Bán chạy nhất</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop-product">
                                    <div id="myTabContent-2" className="tab-content">
                                        <div id="grid" className="tab-pane fade show">
                                            <div className="product-grid-view">
                                                <div className="row">
                                                    {getProductList.map((value, index) => {
                                                        return <ProductItemGrid key={index} item={value}></ProductItemGrid>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div id="list" className="tab-pane fade active in">
                                            <div className="product-list-view">
                                                {getProductList.map((value, index) => {
                                                    return <ProductItemList key={index} item={value}></ProductItemList>
                                                })}
                                            </div>
                                        </div>
                                        <div className="product-pagination" data-aos="fade-up" data-aos-delay={0}>
                                            {getPageList.length !== 1 ? (<ul>
                                                <li>
                                                    <a type="button"
                                                        onClick={goToPreviousPage}
                                                        disabled={page === 1 ? true : false}
                                                        className={page === 1 ? "pagination_next hidden " : ""}
                                                    >
                                                        <span><i className="fa fa-angle-double-left" /></span>
                                                    </a>
                                                </li>
                                                {getPageList && getPageList.map((item, index) => {
                                                    return (<li className={`${page === index + 1 ? "active" : null}`}>
                                                        <a type="button"
                                                            key={index}
                                                            onClick={() => setPage(index + 1)}

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
                                                        className={page === getPageList.length ? "pagination_next hidden" : ""}
                                                    >
                                                        <i className="fa fa-angle-double-right" />
                                                    </a>
                                                </li>
                                            </ul>) : ""}
                                        </div> {/* End Pagination */}
                                        {/*Pagination End*/}
                                    </div>
                                </div>
                                {/*Shop Product End*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="visible-md visible-lg visible-xs visible-sm" style={{}}>
                    <div id="filters-dialog" className="container-dialog filters-open hide cus_mb_col">
                        <a href="javascript:void(0)" className id="xxxf">
                            <i className="icon icon-close-modal icon-right " itx-filters-clean-colors />
                        </a>
                        <div className="filters-content">
                            <div className="content">
                                <ul className="filter-sections filter-byt  filter-by-hide">
                                    <li className="section ">
                                        <a href="javascript:void(0)">
                                            <span>
                                            </span>
                                            <span className="toggler">+</span>
                                        </a>
                                        {/* ngIf: filtersCtrl.isActive('characteristics') */}
                                        <div className="filter view_grid">
                                            <div className="layered-content filter-price">
                                                <ul className="check-box-list notStyle " id="ttt">
                                                    <li>
                                                        <input type="checkbox" id="p1" name="cc" data-price="(price:product<=)" />
                                                        <label htmlFor="p1">
                                                            <span className="button icon icon-check" />
                                                            <span className="button" />
                                                            Nhỏ hơn 0₫
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="p2" name="cc" data-price="((price:product>)&&(price:product<=))" />
                                                        <label htmlFor="p2">
                                                            <span className="button icon icon-check" />
                                                            <span className="button" />
                                                            0₫ - 0₫
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="p3" name="cc" data-price="((price:product>)&&(price:product<=))" />
                                                        <label htmlFor="p3">
                                                            <span className="button icon icon-check" />
                                                            <span className="button" />
                                                            0₫ - 0₫
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="p4" name="cc" data-price="((price:product>)&&(price:product<=))" />
                                                        <label htmlFor="p4">
                                                            <span className="button icon icon-check" />
                                                            <span className="button" />
                                                            0₫ - 0₫
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" id="p5" name="cc" data-price="(price:product>=)" />
                                                        <label htmlFor="p5">
                                                            <span className="button icon icon-check" />
                                                            <span className="button" />
                                                            Lớn hơn 0₫
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* end ngIf: filtersCtrl.isActive('characteristics') */}
                                    </li>
                                </ul>
                                <div className="filter-actions ">
                                    <div className="col-xs-12 text-md-right">
                                        <button id="clear_final" className="btn btn-default btn-sm ng-binding">XÓA LỌC</button>
                                        <button id="submit_final" className="btn btn-primary btn-sm ">LỌC</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* <input type="text" class="hidden" id="coll-handle" value="(collectionid:product=1001518139)"> */


/* <style>

[type="checkbox"]:not(:checked), [type="checkbox"]:checked {
position: absolute;
left: -9999px;
}
[type="checkbox"]:not(:checked)+label:before, [type="checkbox"]:checked+label:before {
content: '';
width: 26px;
height: 25px;
border: none;
background: #eaeaea;
border-radius: 50%;
outline: 0;
display: inline-block;
vertical-align: top;
margin: 0 10px 0 0;
}

[type="checkbox"]:checked+label .icon {
opacity: 1;
-webkit-transform: scale(1);
-ms-transform: scale(1);
transform: scale(1);
}
[type="checkbox"]:not(:checked)+label .icon, [type="checkbox"]:checked+label .icon {
position: absolute;
top: 9px;
left: 6px;
color: #505252;
}
[type="checkbox"]:not(:checked)+label span, [type="checkbox"]:checked+label span {
display: inline-block;
vertical-align: top;
margin: 5px 0 0;
line-height: 16px;
}

</style> */

/* </div> */

/* )
} */
