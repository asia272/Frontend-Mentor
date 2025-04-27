import React, { useState } from 'react';
import './Sampl.css';
import imgProduct_1 from '../../assets/images/image-product-1.jpg';
import imgProduct_2 from '../../assets/images/image-product-2.jpg';
import imgProduct_3 from '../../assets/images/image-product-3.jpg';
import imgProduct_4 from '../../assets/images/image-product-4.jpg';
import iconNext from '../../assets/images/icon-next.svg';
import iconPrev from '../../assets/images/icon-previous.svg';

const Sampl = () => {
    let [sample, setSample] = useState(imgProduct_1)
    let [isActive, setIsActive] = useState(null)
    let sampleProducts = [
        { sampleProduct: imgProduct_1 },
        { sampleProduct: imgProduct_2 },
        { sampleProduct: imgProduct_3 },
        { sampleProduct: imgProduct_4 }
    ];
    let handleclick = (product, index) => {
        setSample(product)
        setIsActive(index)
    }
    let prev = () => {
        const newIndex = isActive === 0 ? sampleProducts.length - 1 : isActive - 1;
        setIsActive(newIndex);
        setSample(sampleProducts[newIndex].sampleProduct);
    }

    let next = () => {
        const newIndex = isActive === sampleProducts.length - 1 ? 0 : isActive + 1;
        setIsActive(newIndex);
        setSample(sampleProducts[newIndex].sampleProduct);
    }

    return (
        <>
            <div className="product-sampls">
                <div className="display-sample-img">
                    <img src={sample} alt="img-sample" className='displayImg' />

                    <div className="icons"  >
                        <img src={iconPrev} alt="prev" className="prev" onClick={prev} />
                        <img src={iconNext} alt="next" className='next' onClick={next} />
                    </div>

                </div>
                <div className="sample-images">

                    {sampleProducts.map((product, idx) => (
                        <div className={`img-wrapper ${idx === isActive ? "active-sample" : ""}`}
                            key={idx}
                            onClick={() => handleclick(product.sampleProduct, idx)}
                        >
                            <img src={product.sampleProduct} alt={`sample-${idx + 1}`} key={idx}
                            />
                        </div>
                    ))}

                </div>
            </div>
        </>

    );
};

export default Sampl;
