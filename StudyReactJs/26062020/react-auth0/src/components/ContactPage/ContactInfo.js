import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact_info">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                    {/* Contact Item */}
                    <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                      <div className="contact_info_image"><img src="images/contact_1.png" alt="" /></div>
                      <div className="contact_info_content">
                        <div className="contact_info_title">Phone</div>
                        <div className="contact_info_text">+38 068 005 3570</div>
                      </div>
                    </div>
                    {/* Contact Item */}
                    <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                      <div className="contact_info_image"><img src="images/contact_2.png" alt="" /></div>
                      <div className="contact_info_content">
                        <div className="contact_info_title">Email</div>
                        <div className="contact_info_text">fastsales@gmail.com</div>
                      </div>
                    </div>
                    {/* Contact Item */}
                    <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                      <div className="contact_info_image"><img src="images/contact_3.png" alt="" /></div>
                      <div className="contact_info_content">
                        <div className="contact_info_title">Address</div>
                        <div className="contact_info_text">10 Suffolk at Soho, London, UK</div>
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

export default ContactInfo;