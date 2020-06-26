import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class ProductItem extends Component {
  to_slug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
  }
    render() {
        return (
           
                 <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-12.jpg">
                      <img src="img/product/product-12.jpg"/>
                      <ul className="product__item__pic__hover">
                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                        <li><Link to={ "chi-tiet/"+ this.props.pid+"/"+this.to_slug(this.props.children)+".html"}><i className="fa fa-retweet" /></Link></li>
                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6><a href="#">{this.props.children}</a></h6>
                      <h5>{this.props.price}</h5>
                    </div>
                  </div>
                </div>
       
        );
    }
}

export default ProductItem;