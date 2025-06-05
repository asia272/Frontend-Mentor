import React from 'react'

const GalleryImages = () => {
    return (
        <div className="gallery-images">
            <picture className='milk-bottles'>
                <source media="(min-width: 768px)" srcSet="./assets/images/desktop/image-gallery-milkbottles.jpg" />
                <img src="./assets/images/mobile/image-gallery-milkbottles.jpg" alt="Gallery Milk Bottles" />
            </picture>
            <picture className='orange'>
                <source media="(min-width: 768px)" srcSet="./assets/images/desktop/image-gallery-orange.jpg" />
                <img src="./assets/images/mobile/image-gallery-orange.jpg" alt="Gallery Orange" />
            </picture>
            <picture className='cone'>
                <source media="(min-width: 768px)" srcSet="./assets/images/desktop/image-gallery-cone.jpg" />
                <img src="./assets/images/mobile/image-gallery-cone.jpg" alt="Gallery Cone" />
            </picture>
            <picture className='sugar-cubes'>
                <source media="(min-width: 768px)" srcSet="./assets/images/desktop/image-gallery-sugarcubes.jpg" />
                <img src="./assets/images/mobile/image-gallery-sugar-cubes.jpg" alt="Gallery Sugar Cubes" />
            </picture>
        </div>
    )
}

export default GalleryImages
