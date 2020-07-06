import React, { Component } from 'react';

class Shop extends Component {
    render() {
        return (
          <div>
             <div className="home">
            <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/shop_background.jpg" />
            <div className="home_overlay" />
            <div className="home_content d-flex flex-column align-items-center justify-content-center">
              <h2 className="home_title">Smartphones &amp; Tablets</h2>
            </div>
          </div>
            <div className="shop">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  {/* Shop Sidebar */}
                  <div className="shop_sidebar">
                    <div className="sidebar_section">
                      <div className="sidebar_title">Categories</div>
                      <ul className="sidebar_categories">
                        <li><a href="#">Computers &amp; Laptops</a></li>
                        <li><a href="#">Cameras &amp; Photos</a></li>
                        <li><a href="#">Hardware</a></li>
                        <li><a href="#">Smartphones &amp; Tablets</a></li>
                        <li><a href="#">TV &amp; Audio</a></li>
                        <li><a href="#">Gadgets</a></li>
                        <li><a href="#">Car Electronics</a></li>
                        <li><a href="#">Video Games &amp; Consoles</a></li>
                        <li><a href="#">Accessories</a></li>
                      </ul>
                    </div>
                    <div className="sidebar_section filter_by_section">
                      <div className="sidebar_title">Filter By</div>
                      <div className="sidebar_subtitle">Price</div>
                      <div className="filter_price">
                        <div id="slider-range" className="slider_range" />
                        <p>Range: </p>
                        <p><input type="text" id="amount" className="amount" readOnly style={{border: 0, fontWeight: 'bold'}} /></p>
                      </div>
                    </div>
                    <div className="sidebar_section">
                      <div className="sidebar_subtitle color_subtitle">Color</div>
                      <ul className="colors_list">
                        <li className="color"><a href="#" style={{background: '#b19c83'}} /></li>
                        <li className="color"><a href="#" style={{background: '#000000'}} /></li>
                        <li className="color"><a href="#" style={{background: '#999999'}} /></li>
                        <li className="color"><a href="#" style={{background: '#0e8ce4'}} /></li>
                        <li className="color"><a href="#" style={{background: '#df3b3b'}} /></li>
                        <li className="color"><a href="#" style={{background: '#ffffff', border: 'solid 1px #e1e1e1'}} /></li>
                      </ul>
                    </div>
                    <div className="sidebar_section">
                      <div className="sidebar_subtitle brands_subtitle">Brands</div>
                      <ul className="brands_list">
                        <li className="brand"><a href="#">Apple</a></li>
                        <li className="brand"><a href="#">Beoplay</a></li>
                        <li className="brand"><a href="#">Google</a></li>
                        <li className="brand"><a href="#">Meizu</a></li>
                        <li className="brand"><a href="#">OnePlus</a></li>
                        <li className="brand"><a href="#">Samsung</a></li>
                        <li className="brand"><a href="#">Sony</a></li>
                        <li className="brand"><a href="#">Xiaomi</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  {/* Shop Content */}
                  <div className="shop_content">
                    <div className="shop_bar clearfix">
                      <div className="shop_product_count"><span>186</span> products found</div>
                      <div className="shop_sorting">
                        <span>Sort by:</span>
                        <ul>
                          <li>
                            <span className="sorting_text">highest rated<i className="fas fa-chevron-down" /></span>
                            <ul>
                              <li className="shop_sorting_button" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }">highest rated</li>
                              <li className="shop_sorting_button" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }">name</li>
                              <li className="shop_sorting_button" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }">price</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product_grid">
                      <div className="product_grid_border" />
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Philips BT6900A</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item discount">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225<span>$300</span></div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Huawei MediaPad...</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Apple iPod shuffle</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Sony MDRZX310W</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>LUNA Smartphone</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/shop_1.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Canon IXUS 175...</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$379<span>$300</span></div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Canon STM Kit...</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225<span>$300</span></div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Samsung J330F</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Lenovo IdeaPad</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Digitus EDNET...</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Astro M2 Black</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Transcend T.Sonic</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Xiaomi Band 2...</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Rapoo T8 White</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item discount">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225<span>$300</span></div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Huawei MediaPad...</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Nokia 3310 (2017)</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Rapoo 7100p Gray</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Canon EF</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/shop_2.jpg" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Gembird SPK-103</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                      {/* Product Item */}
                      <div className="product_item is_new">
                        <div className="product_border" />
                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name"><div><a href="#" tabIndex={0}>Canon STM Kit...</a></div></div>
                        </div>
                        <div className="product_fav"><i className="fas fa-heart" /></div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">-25%</li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                    </div>
                    {/* Shop Page Navigation */}
                    <div className="shop_page_nav d-flex flex-row">
                      <div className="page_prev d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-left" /></div>
                      <ul className="page_nav d-flex flex-row">
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#">21</a></li>
                      </ul>
                      <div className="page_next d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-right" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          </div>
         
        );
    }
}

export default Shop;