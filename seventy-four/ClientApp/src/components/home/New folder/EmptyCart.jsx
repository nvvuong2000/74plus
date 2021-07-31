import React from 'react'

export default function EmptyCart() {
    return (

        <div className="empty-cart-section section-fluid" >
            <div className="emptycart-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
                            <div className="emptycart-content text-center">
                                <div className="image">
                                    <img className="img-fluid" src="assets/images/emprt-cart/empty-cart.png" alt />
                                </div>
                                <h4 className="title">Your Cart is Empty</h4>
                                <h6 className="sub-title">Sorry Mate... No item Found inside your cart!</h6>
                                <a href="shop-grid-sidebar-left.html" className="btn btn-lg btn-golden">Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
