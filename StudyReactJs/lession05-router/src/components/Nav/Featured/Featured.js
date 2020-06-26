import React, { Component } from 'react';
import FeaturedItem from './FeaturedItem';

class Featured extends Component {
  render() {
    return (
      <div>
        {/* Featured Section Begin */}
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Featured Product</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">All</li>
                    <li data-filter=".oranges">Oranges</li>
                    <li data-filter=".fresh-meat">Fresh Meat</li>
                    <li data-filter=".vegetables">Vegetables</li>
                    <li data-filter=".fastfood">Fastfood</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
            <FeaturedItem></FeaturedItem>
            </div>
          </div>
        </section>
        {/* Featured Section End */}
      </div>
    );
  }
}

export default Featured;