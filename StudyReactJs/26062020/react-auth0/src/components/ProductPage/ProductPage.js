import React, { Component } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';
import Viewed from '../Common/Viewed/Viewed';
import Brands from '../Common/Brands/Brands';

class Product extends Component {
    render() {
        return (
           <div>
               <SingleProduct></SingleProduct>
               <Viewed></Viewed>
               <Brands></Brands>
               
           </div>
        );
    }
}

export default Product;