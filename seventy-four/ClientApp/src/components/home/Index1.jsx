import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import history from '../../history';
import { Route, Router, Switch } from "react-router-dom";
import NewArrivals from './NewArrivals';
import ProductDetails from './ProductDetails';
import Cart from './Cart'
import Checkout1 from './Checkout1';
import ProductList from './ProductList';
export default function Index1() {
    return (

        <div>
            <Header />
            <Router history={history}>
                <Route exact path='/' component={ProductList} />            
                <Route exact path="/:id" render={({ match }) => <ProductDetails match={match} />} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout1} />
            </Router>
            <Footer />
        </div>
    )
}
