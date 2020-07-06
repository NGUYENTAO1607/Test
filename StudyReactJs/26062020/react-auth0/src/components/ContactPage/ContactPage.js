import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import ContactInfo from './ContactInfo'

class ContactPage extends Component {
    render() {
        return (
            <div>
                <ContactInfo></ContactInfo>
                <ContactForm></ContactForm>
                <ContactMap></ContactMap>
            </div>
            
        );
    }
}

export default ContactPage;