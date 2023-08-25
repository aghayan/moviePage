import React from 'react';
import { Loading } from '../component/loading';
import { Navigation } from '../component/navigation';
import './styles/aboutPage.scss';

function AboutPage() {
    return (
        <>
        <Loading/>
        <Navigation/>
        <div className="about-page">
            <div className="about-container">
                <h1>About Us</h1>
                <p>Learn more about our company and its mission.</p>
                <div className="about-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla nec purus feugiat, molestie ipsum et, consequat nibh.
                        Quisque commodo velit non neque dignissim, ac rhoncus ipsum commodo.
                        Sed id ex ac lorem elementum condimentum vel ut odio.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutPage;
