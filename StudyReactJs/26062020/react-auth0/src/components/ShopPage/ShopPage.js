import React, { Component } from 'react';
import HomeShop from './HomeShop';
import Shop from './Shop/Shop';
import Viewed from '../Common/Viewed/Viewed';
import Brands from '../Common/Brands/Brands';
class ShopPage extends Component {
    render() {
        return (
           <div >
               {/* <HomeShop></HomeShop> */}
               <Shop></Shop>
               <Viewed></Viewed>
               <Brands></Brands>
           </div>
        );
    }
}

export default ShopPage;