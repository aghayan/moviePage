import React from 'react';
import { Loading } from '../component/loading';
import { Navigation } from '../component/navigation';
import './styles/contactPage.scss';

function ContactPage() {

    return (
        <> 
        <Loading/>
        <Navigation/>   
        <div className="contact-page">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>To get in touch with us!</p>
                <div className="contact-info">
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <p>Email: aghayanarman10@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <p>Phone: +123-456-7890</p>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default ContactPage;
