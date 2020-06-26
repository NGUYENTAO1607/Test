import React, { Component } from 'react';

class ProductSingle extends Component {
    render() {
        return (

            <div className="col-lg-3 col-md-6 special-grid best-seller">
                <div className="products-single fix">
                    <div className="box-img-hover">
                        <div className="type-lb">
                            <p className="sale">Sale</p>
                        </div>
                        <img src="img/blog/blog-1.jpg" className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                            <ul>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                            </ul>
                            <a className="cart" href="#">Add to Cart</a>
                        </div>
                    </div>
                    <div className="why-text">
                        <h4>{this.props.children}</h4>
                        <h5> {this.props.price}</h5>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductSingle;