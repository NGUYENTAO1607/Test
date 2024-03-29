import React, { Component } from 'react';

class Copyright extends Component {
    render() {
        return (
            <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                      <div className="copyright_content">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      </div>
                      <div className="logos ml-sm-auto">
                        <ul className="logos_list">
                          <li><a href="#"><img src="images/logos_1.png" alt="" /></a></li>
                          <li><a href="#"><img src="images/logos_2.png" alt="" /></a></li>
                          <li><a href="#"><img src="images/logos_3.png" alt="" /></a></li>
                          <li><a href="#"><img src="images/logos_4.png" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Copyright;