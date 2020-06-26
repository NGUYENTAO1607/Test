import React, { Component } from 'react';

class FeaturedItem extends Component {
    render() {
        return (
          
                
              <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg"  data-setbg="img/featured/feature-8.jpg">
                    <img src="img/featured/feature-8.jpg"/>
                    <ul className="featured__item__pic__hover">
                      <li><a href="#"><i className="fa fa-heart" /></a></li>
                      <li><a href="#"><i className="fa fa-retweet" /></a></li>
                      <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a href="#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
           
        );
    }
}

export default FeaturedItem;