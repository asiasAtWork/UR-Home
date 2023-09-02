import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../pages/landing';
import Products from '../pages/products';
import ProductDetails from '../pages/productDetails'
import AboutUs from '../pages/aboutUs';
import NotFound404 from '../pages/notFound404'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Landing />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/products/:productId">
                    <ProductDetails />
                </Route>
                <Route>
                    <NotFound404 />
                </Route>                
            </Switch>
        </Router>
    )
}

export default Routes;