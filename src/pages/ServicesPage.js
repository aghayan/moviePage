import React from 'react';
import { Loading } from '../component/loading';
import { Navigation } from '../component/navigation';
import './styles/servicesPage.scss';

function ServicesPage() {
    return (
        <>
        <Loading/>
        <Navigation/>
        <div className="services-page">
            <div className="services-container">
                <h1>Our Services</h1>
                <p>Explore the services we offer!</p>
                <div className="services-list">
                    <div className="service">
                        <h2>Web Development</h2>
                        <p>We create stunning websites that engage your audience.</p>
                    </div>
                    <div className="service">
                        <h2>Mobile App Development</h2>
                        <p>Build feature-rich mobile apps for Android and iOS platforms.</p>
                        <p>Մի քիչ չափազանցրած</p>
                    </div>
                    <div className="service">
                        <h2>Graphic Design</h2>
                        <p>Design visually appealing graphics for your brand.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ServicesPage;
