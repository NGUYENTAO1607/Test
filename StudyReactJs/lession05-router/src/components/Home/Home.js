import React, { Component } from 'react';
import ProductSingle from './ProductSingle';

class Home extends Component {
    render() {
        return (
            <div>
                      <div className="products-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>Fruits &amp; Vegetables</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button className="active" data-filter="*">All</button>
                  <button data-filter=".top-featured">Top featured</button>
                  <button data-filter=".best-seller">Best seller</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row special-list">
            <ProductSingle price="$5.0">Product</ProductSingle>
            <ProductSingle price="$5.0">Product</ProductSingle>
            <ProductSingle price="$5.0">Product</ProductSingle>
            <ProductSingle price="$5.0">Product</ProductSingle>
            <ProductSingle price="$5.0">Product</ProductSingle>
            <ProductSingle price="$5.0">Product</ProductSingle>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default Home;