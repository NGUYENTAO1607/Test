import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-3">
                    <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                        <h5><a href="#">drink fruits</a></h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;