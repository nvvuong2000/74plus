// import 'antd/dist/antd.css';
// import "./checkout.css";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import FormList from 'antd/lib/form/FormList';
import CartItemCheckout from './CartItemCheckout'
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartManage from "../../actions/cart";


export default function Checkout1() {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    tel: 0,
    address: "",
    district: "",
    ward: "",
    commune: ""

  });
  const dispatch = useDispatch();

  const getItemList = useSelector((state) => state.cart);
  const total = useSelector((state) => state.checkout.total);
  console.log(getItemList);
  const [item, setItems] = useState([]);
  console.log(total);
  const [totalValue, settotalValue] = useState(0);

  useEffect(() => {
    dispatch(cartManage.getAll())
    dispatch(cartManage.totalCart())
    
  }, []);
  useEffect(() => {
    dispatch(cartManage.totalCart());
    setItems(getItemList);

  }, [getItemList]);

  console.log(item);

  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const [communeList, setCommuneList] = useState([]);

  const [idWard, setIdWard] = useState(0);
  const [idDistrict, setIdDistrict] = useState(0);
  const [idCommune, setIdCommune] = useState(0);

  const showTotal = (cart) => {
    console.log(cart);
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].product.unitPrice * cart[i].quanlity;

    }
    return total;
  }
  function formatCash(str) {

    return str.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

  }
  useEffect(() => {
    async function fetchData() {
      try {
        // const queryParamsString = queryString.stringify();
        const requestUrl = `https://vapi.vnappmob.com/api/province`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
    
        setDistrictList(responseJSON.results);
      } catch (error) {
        console.log('Failed to fetch posts: ', error.message);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        // const queryParamsString = queryString.stringify();
        console.log(idDistrict);
        const requestUrl = `https://vapi.vnappmob.com/api/province/district/${idDistrict}`;
        console.log(`https://vapi.vnappmob.com/api/province/district/${idDistrict}`)
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log(responseJSON);
        setWardList(responseJSON.results);
      } catch (error) {
        console.log('Failed to fetch posts: ', error.message);
      }
    }
    fetchData();
  }, [idDistrict]);
  useEffect(() => {
    async function fetchData() {
      try {
        // const queryParamsString = queryString.stringify();
        const requestUrl = `https://vapi.vnappmob.com/api/province/ward/${idWard}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
      
        console.log(responseJSON);
        setCommuneList(responseJSON.results)
      } catch (error) {
        console.log('Failed to fetch posts: ', error.message);
      }
    }
    fetchData();
  }, [idWard]);

  const [formData, setFormData] = useState(new FormData());
  const handleChange = (evt) => {
    const value = evt.target.value;

    setInfo({

      ...info,

      [evt.target.name]: value

    });
    if (evt.target.name === "district"){
      const selectedIndex = evt.target.options.selectedIndex;
      setIdDistrict(evt.target.options[selectedIndex].getAttribute('data-province_id'));
      console.log(idDistrict);
      
    }
    if (evt.target.name === "ward"){
      const selectedIndex = evt.target.options.selectedIndex;
      setIdWard(evt.target.options[selectedIndex].getAttribute('data-ward_id'))
    }
    if (evt.target.name === "commune"){
      const selectedIndex = evt.target.options.selectedIndex;
    }

  }
  const phoneRegex = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/
  const formik = useFormik({
    //When set to true, the form will reinitialize every time the initialValues prop changes. 
    enableReinitialize: true,
    initialValues: {
      fullName: info.fullName,
      email: info.email,
      tel: info.tel,
      address: info.address,
      district: info.district,
      ward: info.ward,
      commune: info.commune,
      notes: info.notes,
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("* Required!"),
      address: Yup.string()
        .required("required")
        .min(5, "to short"),
      district: Yup.string()
        .required("* Required!"),
      ward: Yup.string()
        .required("* Required!"),
      commune: Yup.string()
        .required("* Required!"),
      tel: Yup.string().matches(phoneRegex, "Invalid phone").required("Phone is required"),
    }),
    onSubmit: () => {
      console.log(info);
      const formDataSubmit = formData;
      // formDataSubmit.append('productID', product.productID);
      // formDataSubmit.append('productName', product.productName);
      // formDataSubmit.append('description', product.description);
      // formDataSubmit.append('unitPrice', product.unitPrice);
      // formDataSubmit.append('stock', product.stock);
      // formDataSubmit.append('isNew', product.isNew);
      // formDataSubmit.append('status', product.status);
      // formDataSubmit.append('categoryID', parseInt(product.categoryId));
      // formDataSubmit.append('providerID', product.providerId);

      // return isAddMode
      //   ? dispatch(add_product(formDataSubmit))
      //   : dispatch(update_product(formDataSubmit))


    }
  });


  return (
    <div className="wrapper">
      <link rel="canonical" href="/checkout" />
      <div className="content">
        <div className="wrap">
          <Formik>

            <form onSubmit={formik.handleSubmit} className="clearfix">

              <div className="main">
                <div className="main-header">
                  <a href="/" className="logo">
                    <img src="assets/images/logo.png" alt="Home" />
                  </a>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/cart">Giỏ hàng</a>
                    </li>
                    <li className="breadcrumb-item breadcrumb-item-current">Thanh toán</li>
                  </ul>
                </div>
                <div className="product-mb">
                  <table className="product-table">
                    <thead>
                      <tr>
                        <th scope="col"><span className="visually-hidden">Hình ảnh</span></th>
                        <th scope="col"><span className="visually-hidden">Mô tả</span></th>
                        <th scope="col"><span className="visually-hidden">Số lượng</span></th>
                        <th scope="col"><span className="visually-hidden">Giá</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {item && item.map((value, index) => {
                        return (
                          <CartItemCheckout key={index} item={value} />
                        )
                      })}
                   
                    </tbody>
                  </table>
                </div>
                <div className="main-content">
                  <div className="step">
                    <div className="step-sections steps-onepage" step={1}>
                      <div className="section">
                        <div className="section-header">
                          <h2 className="section-title">Thông tin giao hàng</h2>
                        </div>
                        <div className="section-content section-customer-information no-mb">
                          <div className="fieldset">
                            <div className="field field-required  ">
                              <div className="field-input-wrapper">
                                <label className="field-label">Họ và
                                  tên </label>
                                {/* <input placeholder="Họ và tên" className="" size={30} type="text" id="billing_address_full_name" name="customerName" defaultValue /> */}
                                <input placeholder="Họ và tên" type="text" className="field-input" onChange={handleChange} value={formik.values.fullName} size={30} type="text" name="fullName"  />
                                {formik.errors.fullName && formik.touched.fullName && (
                                  <p style={{ color: "red" }}>{formik.errors.fullName}</p>
                                )}
                              </div>
                            </div>
                            <div className="field  field-two-thirds  ">
                              <div className="field-input-wrapper">
                                <label className="field-label" htmlFor="checkout_user_email">Email</label>
                                <input placeholder="Email" className="field-input " size={30} type="email" id="checkout_user_email" name="email" />
                              </div>
                              {formik.errors.email && formik.touched.email && (
                                <p style={{ color: "red" }}>{formik.errors.email}</p>
                              )}
                            </div>
                            <div className="field field-required field-third ">
                              <div className="field-input-wrapper">
                                <label className="field-label" htmlFor="billing_address_phone">Số điện
                                  thoại </label>
                                <input placeholder="Số điện thoại" className="field-input" size={30} maxLength={10} type="tel" onChange={handleChange} name="tel"  />

                                {formik.errors.tel && formik.touched.tel && (
                                  <p style={{ color: "red" }}>{formik.errors.tel}</p>
                                )}
                              </div>
                            </div>
                            <div className="field field-required  ">
                              <div className="field-input-wrapper">
                                <label className="field-label" htmlFor="billing_address_address1">Địa
                                  chỉ </label>
                                <input placeholder="Địa chỉ" className="field-input" size={30} type="text" name="address" value={formik.values.address} onChange={handleChange} />
                                {formik.errors.address && formik.touched.address && (
                                  <p style={{ color: "red" }}>{formik.errors.address}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="section-content">
                          <div className="fieldset">
                  
                            <div class="field field-show-floating-label field-required field-third ">
                              <div class="field-input-wrapper field-input-wrapper-select">
                                <label class="field-label" for="customer_shipping_province"> Tỉnh / thành  </label>
                                <select class="field-input" name="district" value={formik.values.district} onChange={handleChange} >
                                  <option data-code="null" value="null">  Chọn tỉnh / thành </option>


                                  {districtList && districtList.map((value1,index)=>{
                                    return <option data-province_id={value1.province_id} value={value1.province_name}>{value1.province_name}</option>
                                  })

                                    }
                                



                                </select>
                                {formik.errors.district && formik.touched.district && (
                                  <p style={{ color: "red" }}>{formik.errors.district}</p>
                                )}
                          
                              </div>

                            </div>
                            <div class="field field-required field-third">
                              <div class="field-input-wrapper field-input-wrapper-select">
                                <label class="field-label" for="customer_shipping_district">Quận / huyện</label>
                                <select class="field-input" name="ward" onChange={handleChange} value={formik.values.ward}>
                                  <option data-ward_id="null" value="null" selected="">Chọn quận / huyện</option>



                                  {wardList && wardList.map((value1, index) => {
                                    return <option data-ward_id={value1.district_id} value={value1.district_name}>{value1.district_name}</option>
                                  })

                                  }



                                </select>
                                {formik.errors.ward && formik.touched.ward && (
                                  <p style={{ color: "red" }}>{formik.errors.ward}</p>
                                )}
                              </div>

                            </div>
                            <div class="field field-show-floating-label field-required  field-third  ">
                              <div class="field-input-wrapper field-input-wrapper-select">
                                <label class="field-label" for="customer_shipping_ward">Phường / xã</label>
                                <select class="field-input" name="commune" onChange={handleChange} value={formik.values.commune}>

                                  <option data-code="null" value="" selected="">Chọn phường / xã</option>



                                  {communeList && communeList.map((value1, index) => {
                                    return <option data-ward_id={value1.district_id} value={value1.ward_name}>{value1.ward_name}</option>
                                  })

                                  }

                                </select>
                                {formik.errors.commune && formik.touched.commune && (
                                  <p style={{ color: "red" }}>{formik.errors.commune}</p>
                                )}
                              </div>

                            </div>
                          </div>
                          {/* <div className="section-content section-customer-information fieldset" id="div_country_not_vietnam" style={{ display: 'none' }}>
                          <div className="field field-two-thirds">
                            <div className="field-input-wrapper">
                              <label className="field-label" htmlFor="billing_address_city">Thành
                                phố</label>
                              <input placeholder="Thành phố" className="field-input" size={30} type="text" id="billing_address_city" name="billing_address[city]" defaultValue />
                            </div>
                          </div>
                          <div className="field field-third">
                            <div className="field-input-wrapper">
                              <label className="field-label" htmlFor="billing_address_zip">Mã bưu
                                chính</label>
                              <input placeholder="Mã bưu chính" className="field-input" size={30} type="text" id="billing_address_zip" name="billing_address[zip]" defaultValue />
                            </div>
                          </div>
                        </div> */}
                        </div>
                        <div className="field">
                          <div className="field-input-wrapper">
                            <div className="descriptionCustomer"><textarea name="notes" onChange={handleChange} value={formik.values.notes} className="input" placeholder="Ghi chú " rows={5} style={{ width: '100%', padding: 5, boxShadow: '0 0 0 1px #d9d9d9', borderRadius: 4, transition: 'all .2s ease-out' }}  />
                              {/* <p style={{ margin: '10px 0', color: '#338dbc' }}>Notes</p> */}
                            </div>
                          </div>
                        </div>
                        <div id="change_pick_location_or_shipping">
                          <div id="section-payment-method" className="section">
                            <div className="section-header">
                              <h2 className="section-title">Phương thức thanh toán</h2>
                            </div>
                            <div className="section-content">
                              <div className="content-box">
                                <div className="radio-wrapper content-box-row hiddenCod">
                                  <label className="radio-label">
                                    <div className="radio-input">
                                      <input className="input-radio " defaultChecked name="paymentMethod" type="radio" defaultValue={1} />
                                    </div>
                                    <span className="radio-label-primary">Thanh toán khi nhận
                                      hàng (COD)</span>
                                  </label>
                                  <div className="text-center cod_description">
                                    <p>Thanhn toán khi nhận hàng</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="step-footer hidden-xs">
                      <a className="step-footer-previous-link" href="/cart">
                        <svg className="previous-link-icon icon-chevron icon" xmlns="http://www.w3.org/2000/svg" width="6.7" height="11.3" viewBox="0 0 6.7 11.3">
                          <path d="M6.7 1.1l-1-1.1-4.6 4.6-1.1 1.1 1.1 1 4.6 4.6 1-1-4.6-4.6z" />
                        </svg>
                        Giỏ hàng
                      </a>
                    </div>
                  </div>
                </div>
              </div>



              {/* {RegistrationForm()} */}

              <div className="sidebar">
                <div className="sidebar-content">
                  <div className="order-summary">
                    <h2 className="visually-hidden">Thông tin đơn hàng</h2>
                    <div className="order-summary-sections">
                      <div className="order-summary-section order-summary-section-product-list product-pc">
                        <table className="product-table">
                          <thead>
                            <tr>
                              <th scope="col"><span className="visually-hidden">Hình ảnh</span></th>
                              <th scope="col"><span className="visually-hidden">Mô tả</span></th>
                              <th scope="col"><span className="visually-hidden">Số lượng</span></th>
                              <th scope="col"><span className="visually-hidden">Giá</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            {item && item.map((value, index) => {
                              return (
                                <CartItemCheckout key={index} item={value} />
                              )
                            })}

                          </tbody>
                        </table>
                      </div>
                      <div className="order-summary-section order-summary-section-discount" data-order-summary-section="discount">
                        <div className="fieldset">
                          <div style={{ color: '#f77705', marginLeft: 9, fontWeight: 'bold', display: 'none' }}>
                            Nhập mã giảm giá tại đây (nếu có)</div>
                          <div className="field">
                            <div className="field-input-btn-wrapper">
                              <div className="field-input-wrapper">
                                <label className="field-label" htmlFor="discount.code">Mã giảm
                                  giá</label>
                                <input placeholder="Mã giảm giá" className="field-input" size={30} type="text" id="coupon" name="couponCode" />
                              </div>
                              <button type="button" className="field-input-btn btn btn-default" id="getCoupon">
                                <span className="btn-content">Sử dụng</span>
                                <i className="btn-spinner icon icon-button-spinner" />
                              </button>
                            </div>
                            <div id="txtCode" />
                          </div>
                        </div>
                      </div>
                      <div className="order-summary-section order-summary-section-total-lines">
                        <table className="total-line-table">
                          <thead>
                            <tr>
                              <th scope="col"><span className="visually-hidden">Mô tả</span></th>
                              <th scope="col"><span className="visually-hidden">Giá</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="total-line total-line-shipping shipFeeCheckHost">
                              <td className="total-line-name">Phí vận chuyển</td>
                              <td className="total-line-price">
                                <span className="order-summary-emphasis" value={0} id="shipFee">
                                  —
                                </span>
                                <span id="showCarrier" />
                                <style dangerouslySetInnerHTML={{ __html: "\n                                                                                                                                                #showCarrier {\n                                                                                                                                                    display: block;\n                                                                                                                                                text-align: right;\n                                                                                                                                                width: 100%;\n                                                                                                                                                font-size: 11px;\n                                                            }\n\n                                                                                                                                                .changeOrtherShipFee:hover {\n                                                                                                                                                    color: darkred;\n                                                                                                                                                text-decoration: underline;\n                                                            }\n                                                                                                                                            " }} />
                              </td>
                            </tr>
                          </tbody>
                          <tfoot className="total-line-table-footer">
                            <tr className="total-line">
                              <td className="total-line-name payment-due-label">
                                <span className="payment-due-label-total">Tổng cộng</span>
                              </td>
                              <td className="total-line-name payment-due">
                                <span className="payment-due-currency">VND</span>
                                <span className="payment-due-price" id="showTotalMoney" >
                                  { formatCash(showTotal(getItemList))}
                                </span>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    <h3 className="notice-checkout" style={{ fontWeight: 400, padding: 10, border: '1px solid #f77705', lineHeight: 18, margin: 0 }}>
                      <p>Scott Platon áp dụng đồng giá phí vận chuyển 20.000 VND cho tp.HCM và 30.000 VND
                        cho các tỉnh thành khác. Chúng tôi xác nhận đơn hàng qua Email. Bạn vui lòng
                        KIỂM TRA email sau khi đặt hàng thành công và CHỜ NHẬN HÀNG.</p>
                    </h3>
                  </div>
                </div>
                <div className="sidebar-footer">
                  <button type="submit" className="step-footer-continue-btn btn checkout-accept">
                    <span className="btn-content">Hoàn tất đơn hàng</span>
                    <i className="btn-spinner icon icon-button-spinner" />
                  </button>
                </div>
              </div>
              <div id="tableShipFee" />
              <style dangerouslySetInnerHTML={{ __html: "\n                                                                                                            #tableShipFee {\n                                                                                                                display: none;\n                                                                                                            clear: both\n                        }\n                                                                                                        " }} />
            </form>
          </Formik>

        </div>
      </div>
      <div style={{ display: 'none' }}>
        <div id="progressbar" style={{ textAlign: 'center' }}>
          <img src="/img/loading.gif" />
          <p style={{ fontWeight: 'bold' }}>Đang xử lý...</p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: "\n                                                                                                    .fb_iframe_widget iframe {\n                                                                                                        z - index: 1 !important;\n            }\n                                                                                                " }} />
    </div>

  )
}
