import React, { Component } from 'react';

class HomeBlog extends Component {
    render() {
        return (
            <div className="home">
            <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/shop_background.jpg" />
            <div className="home_overlay" />
            <div className="home_content d-flex flex-column align-items-center justify-content-center">
              <h2 className="home_title">Technological Blog</h2>
            </div>
          </div>
        );
    }
}

export default HomeBlog;