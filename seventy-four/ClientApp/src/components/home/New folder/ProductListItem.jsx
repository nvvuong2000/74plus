import React,{Fragment} from 'react'

export default function ProductListItem() {
    return (
        <Fragment>

            <div className="col-12">
                {/* Start Product Defautlt Single */}
                <div className="product-list-single product-color--golden">
                    <a href="product-details-default.html" className="product-list-img-link">
                        <img className="img-fluid" src="assets/images/product/default/home-1/default-1.jpg" alt />
                        <img className="img-fluid" src="assets/images/product/default/home-1/default-2.jpg" alt />
                    </a>
                    <div className="product-list-content">
                        <h5 className="product-list-link"><a href="product-details-default.html">KAOREET LOBORTIS
                            SAGIT</a></h5>
                        <span className="product-list-price">
                            $25.12</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Nobis ad, iure incidunt. Ab consequatur temporibus non
                            eveniet inventore doloremque necessitatibus sed, ducimus
                            quisquam, ad asperiores</p>
                    </div>
                </div> {/* End Product Defautlt Single */}
            </div>


        </Fragment>
    )
}
