import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Contact from '../Contacts/Contact/Contact';
import Product from '../Product/Product';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
class RouterURL extends Component {
    render() {
        return (

            <div>
                <Switch>
                    
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/lien-he" component={Contact}></Route>
                    <Route path="/san-pham" component={Product}></Route>
                    <Route path="/chi-tiet/:id/:slug.html" component={Detail}></Route>
                    <Route component={Home}></Route>
                </Switch>

            </div>

        );
    }
}

export default RouterURL;