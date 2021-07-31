import React from 'react'
// import "./style.css";
import "./cart.css";
import "./responsive.css"
// import  type from "./style.css";

export default function Cart1() {
    return (
<section id="stCart">
  <div className="cart-page mt-50 mb-50">
    <div className="container">
      <div className="headingPage">
        <h1 className="titlet">Giỏ hàng</h1>
      </div>
      <div className="row">
        <div className="col-md-8 col-sm-12 col-xs-12 listItem">
          <div className="table-cart-area">
            <table className="table table-cart">
              <tbody>
                <tr>
                  <th className="product">Sản phẩm</th>
                  <th className="qty">Số lượng</th>
                  <th className="linePrice">Tổng tiền</th>
                  <th className="remove">Xóa</th>
                </tr>
                <tr className="cartItem" data-id={1075140170}>
                        <td className="product"  >
                    <a href="/products/nylon-cargo-pants-black">
                      <div className="thumb-cart">
                        <img src="//product.hstatic.net/1000344185/product/7810_e603fd18182746f4a51844f3162510d8_medium.jpg" alt />
                        <h4>NYLON CARGO PANTS - BLACK</h4>
                        <span className="variant_title">XL</span>
                        <span>450,000₫</span>
                      </div>
                    </a>
                  </td>
                  <td className="qty">
                    <div className="qty-number">
                      <input type="button" defaultValue="<" className="qtyminus" field="quantity" />
                      <input type="text" size={4} name="quantity" min={1} id="updates_1075140170" defaultValue={1} onfocus="this.select();" className="tc item-quantity qty" />
                      <input type="button" defaultValue=">" className="qtyplus" field="quantity" />
                    </div>
                  </td>
                  <td className="linePrice">
                    <b>450,000₫</b>
                  </td>
                  <td className="remove">
                    <a className="remove-item" href="/cart/change?line=1&quantity=0" data-id={1075140170}><i className="fa fa-trash-o" aria-hidden="true" /></a>
                  </td>
                </tr>
                <tr className="cartItem" data-id={1074119604}>
                  <td className="product">
                    <a href="/products/ransom-tee-wash-black">
                      <div className="thumb-cart">
                        <img src="//product.hstatic.net/1000344185/product/2289_3b6bf50db0444fb0a2ff2106d1316952_medium.png" alt />
                        <h4>RANSOM TEE - BLACK</h4>
                        <span className="variant_title">XL</span>
                        <span>330,000₫</span>
                      </div>
                    </a>
                  </td>
                  <td className="qty">
                    <div className="qty-number">
                      <input type="button" defaultValue="<" className="qtyminus" field="quantity" />
                      <input type="text" size={4} name="quantity" min={1} id="updates_1074119604" defaultValue={1} onfocus="this.select();" className="tc item-quantity qty" />
                      <input type="button" defaultValue=">" className="qtyplus" field="quantity" />
                    </div>
                  </td>
                  <td className="linePrice">
                    <b>330,000₫</b>
                  </td>
                  <td className="remove">
                    <a className="remove-item" href="/cart/change?line=2&quantity=0" data-id={1074119604}><i className="fa fa-trash-o" aria-hidden="true" /></a>
                  </td>
                </tr>
                <tr className="cartItem" data-id={1075140162}>
                  <td className="product">
                    <a href="/products/cargo-shorts-sand">
                      <div className="thumb-cart">
                        <img src="//product.hstatic.net/1000344185/product/2587_ad7af57e71a441729e17c8f35b501c03_medium.jpg" alt />
                        <h4>CARGO SHORTS - SAND</h4>
                        <span className="variant_title">S</span>
                        <span>400,000₫</span>
                      </div>
                    </a>
                  </td>
                  <td className="qty">
                    <div className="qty-number">
                      <input type="button" defaultValue="<" className="qtyminus" field="quantity" />
                      <input type="text" size={4} name="quantity" min={1} id="updates_1075140162" defaultValue={1} onfocus="this.select();" className="tc item-quantity qty" />
                      <input type="button" defaultValue=">" className="qtyplus" field="quantity" />
                    </div>
                  </td>
                  <td className="linePrice">
                    <b>400,000₫</b>
                  </td>
                  <td className="remove">
                    <a className="remove-item" href="/cart/change?line=3&quantity=0" data-id={1075140162}><i className="fa fa-trash-o" aria-hidden="true" /></a>
                  </td>
                </tr>
                <tr className="cartItem" data-id={1075240803}>
                  <td className="product">
                    <a href="/products/90-s-tee-white">
                      <div className="thumb-cart">
                        <img src="//product.hstatic.net/1000344185/product/2683_5f365049c35445c6a9058d2145917548_medium.png" alt />
                        <h4>90'S TEE - WHITE</h4>
                        <span className="variant_title">XL</span>
                        <span>340,000₫</span>
                      </div>
                    </a>
                  </td>
                  <td className="qty">
                    <div className="qty-number">
                      <input type="button" defaultValue="<" className="qtyminus" field="quantity" />
                      <input type="text" size={4} name="quantity" min={1} id="updates_1075240803" defaultValue={2} onfocus="this.select();" className="tc item-quantity qty" />
                      <input type="button" defaultValue=">" className="qtyplus" field="quantity" />
                    </div>
                  </td>
                  <td className="linePrice">
                    <b>680,000₫</b>
                  </td>
                  <td className="remove">
                    <a className="remove-item" href="/cart/change?line=4&quantity=0" data-id={1075240803}><i className="fa fa-trash-o" aria-hidden="true" /></a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="note_item">
              <div className="note_cart">
                <label className="control-label" htmlFor="CartSpecialInstructions">Instagram</label>
                <textarea name="note" className="form-control" placeholder="Vui lòng nhập Instagram của bạn" id="CartSpecialInstructions" defaultValue={""} />
              </div>
            </div>
            <div className="calculate-area">
              <div className="ct-ft-cart">
                <div className="total-cart">
                  <div className="subtotal">
                    Tổng tiền <b>1,860,000₫</b>
                  </div>
                  <div className="final-total text-center">
                    <a href="/checkout" className="update-cart">Thanh toán</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}
