import React, { Component } from 'react';
import Category from './Category'
class Categories extends Component {
    render() {
        return (
            <div>
                {/* Categories Section Begin */}
                <section className="categories">
                    <div className="container">
                        <div className="row">
                            <div className="categories__slider owl-carousel">
                                <Category></Category>
                              
                                {/* <Category></Category> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Cadtegories Section End */}
            </div>
        );
    }
}

export default Categories;