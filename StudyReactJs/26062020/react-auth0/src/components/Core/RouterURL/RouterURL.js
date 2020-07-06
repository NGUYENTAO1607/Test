import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from '../../HomePage/HomePage'
import BlogPage from '../../BlogPage/BlogPage'
import BlogSinglePage from '../../BlogSinglePage/BlogSinglePage'
import CartPage from '../../CartPage/CartSection'
import ContactPage from '../../ContactPage/ContactPage'
import ProductPage from '../../ProductPage/ProductPage'
import ShopPage from '../../ShopPage/ShopPage'
import SinglePostPage from '../../SinglePostPage/SinglePostPage'
class RouterURL extends Component {
    render() {
        return (
            <div>
                 <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/bai-viet" component={BlogPage}></Route>
                    <Route path="/chi-tiet-bai-viet" component={BlogSinglePage}></Route>
                    <Route path="/gio-hang" component={CartPage}></Route>
                    <Route path="/lien-he" component={ContactPage}></Route>
                    <Route path="/chi-tiet-san-pham" component={ProductPage}></Route>
                    <Route path="/san-pham" component={ShopPage}></Route>
                    <Route path="/chi-tiet-bai-viet" component={SinglePostPage}></Route>
                    <Route component={HomePage}></Route>

                </Switch>
            </div>
               
        );
    }
}

export default RouterURL;