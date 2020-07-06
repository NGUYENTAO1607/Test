import React, { Component } from 'react';

class ContactMap extends Component {
    render() {
        return (
            <div className="contact_map">
            <div id="google_map" className="google_map">
              <div className="map_container">
                <div id="map" />
              </div>
            </div>
          </div>
        );
    }
}

export default ContactMap;