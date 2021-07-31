import React from 'react'

export default function Dropdown() {
    return (
  <div className="shop-topbar-wrapper d-md-flex justify-content-md-between align-items-center">
  <div className="grid-list-option">
    <ul className="nav">
      <li id="tactive_1" className="active">
        <a data-toggle="tab" href="#grid"><i className="fa fa-th-large" /></a>
      </li>
      <li id="tactive_2">
        <a data-toggle="tab" href="#list"><i className="fa fa-th-list" /></a>
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
  {/*Toolbar Short Area Start*/}
  <div className="toolbar-short-area d-md-flex align-items-center">
    <div className="toolbar-shorter ">
      <label>Sắp xếp:</label>
      <select id="sort" className="wide sort-by custom-dropdown__select custom-dropdown__select--white" style={{display: 'none'}}>
        <option value="manual">Sản phẩm nổi bật</option>
        <option value="price-ascending">Giá: Tăng dần</option>
        <option value="price-descending">Giá: Giảm dần</option>
        <option value="title-ascending">Tên: A-Z</option>
        <option value="title-descending">Tên: Z-A</option>
        <option value="created-ascending">Cũ nhất</option>
        <option value="created-descending">Mới nhất</option>
        <option value="best-selling">Bán chạy nhất</option>
      </select><div className="nice-select wide sort-by custom-dropdown__select custom-dropdown__select--white" tabIndex={0}><span className="current">Sản phẩm nổi bật</span><ul className="list"><li data-value="manual" className="option selected focus">Sản phẩm nổi bật</li><li data-value="price-ascending" className="option">Giá: Tăng dần</li><li data-value="price-descending" className="option">Giá: Giảm dần</li><li data-value="title-ascending" className="option">Tên: A-Z</li><li data-value="title-descending" className="option">Tên: Z-A</li><li data-value="created-ascending" className="option">Cũ nhất</li><li data-value="created-descending" className="option">Mới nhất</li><li data-value="best-selling" className="option">Bán chạy nhất</li></ul></div>
    </div>
  </div>
  {/*Toolbar Short Area End*/}
</div>

    )
}
