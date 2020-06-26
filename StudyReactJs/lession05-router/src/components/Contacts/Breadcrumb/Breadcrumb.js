import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <div>
                  {/* Breadcrumb Section Begin */}
        <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Contact Us</h2>
                  <div className="breadcrumb__option">
                    <a href="./index.html">Home</a>
                    <span>Contact Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
            </div>
        );
    }
}

export default Breadcrumb;