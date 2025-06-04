import React from 'react';
import "./MainSection.css"

import Clients from './Clients';
import GalleryImages from './GalleryImages';
import Footer from './Footer';
const MainSection = () => {
    return (
        <div>
            {/* section 1 */}
            <section className='transfrom-section'>
                <div className="content-side">
                    <h1>Transform your brand</h1>
                    <p>
                        We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>
                    <a href="#">Learn more</a>
                </div>
                <div className="img-side">
                    <picture>
                        <source media="(max-width: 767px)" srcSet="/assets/images/mobile/image-transform.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-transform.jpg" />
                        <img src="/assets/images/desktop/image-transform.jpg" alt="Transform your brand" />
                    </picture>

                </div>
            </section>
            {/* section 2 */}
            <section className='stand-out-section'>

                <div className="img-side">
                    <picture>
                        <source media="(max-width: 767px)" srcSet="/assets/images/mobile/image-stand-out.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-stand-out.jpg" />
                        <img src="/assets/images/desktop/image-stand-out.jpg" alt="Stand out product" />
                    </picture>

                </div>

                <div className="content-side">
                    <h1>Stand out to the right audience</h1>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <a href="#">Learn more </a>
                </div>
            </section>
            {/* section 3 */}
            <div className='graphic-photography-div'>

                <section className="graphic-section">
                    <div className='graphic-img'>
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/assets/images/mobile/image-graphic-design.jpg" />
                            <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-graphic-design.jpg" />
                            <img src="/assets/images/desktop/image-graphic-design.jpg" alt="image-graphic-design" />
                        </picture>
                    </div>
                    <div className="graphic-content">
                        <h2>Graphic design</h2>
                        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                    </div>
                </section>

                <section className="photography-section">
                    <div className="photography-img">
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/assets/images/mobile/image-photography.jpg" />
                            <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-photography.jpg" />
                            <img src="/assets/images/desktop/image-photography.jpg" alt="image-photography.jpg" />
                        </picture>
                    </div>
                    <div className="photography-content">
                        <h2>Photography</h2>
                        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </section>
            </div>
            <Clients />
            <GalleryImages />
            <Footer />
        </div>
    )
}

export default MainSection
