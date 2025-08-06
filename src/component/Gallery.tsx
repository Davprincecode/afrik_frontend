import React, { useState } from 'react'
import gallery1 from '../assets/images/gallery1.png'
import gallery2 from '../assets/images/gallery2.png'
import gallery3 from '../assets/images/gallery3.png'
import gallery4 from '../assets/images/gallery4.png'
import gallery5 from '../assets/images/gallery5.png'
import gallery6 from '../assets/images/gallery6.png'
import gallery7 from '../assets/images/gallery7.png'
import gallery8 from '../assets/images/gallery8.png'
import gallery9 from '../assets/images/gallery9.png'

import mobilegallery1 from '../assets/images/mobilegallery1.png'
import mobilegallery2 from '../assets/images/mobilegallery2.png'
import mobilegallery3 from '../assets/images/mobilegallery3.png'
import mobilegallery4 from '../assets/images/mobilegallery4.png'
import mobilegallery5 from '../assets/images/mobilegallery5.png'
import mobilegallery6 from '../assets/images/mobilegallery6.png'
import mobilegallery7 from '../assets/images/mobilegallery7.png'
import mobilegallery8 from '../assets/images/mobilegallery8.png'
import mobilegallery9 from '../assets/images/mobilegallery9.png'
import ImagePreviewModal from './ImagePreviewModal'



function Gallery() {

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const goPrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goNext = () => {

    if (currentIndex !== null && currentIndex < 17) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const images = [
    gallery1, gallery2, gallery3, gallery4,
    gallery5, gallery6, gallery7, gallery8, gallery9,

     mobilegallery1, mobilegallery2, mobilegallery3, mobilegallery4,
    mobilegallery5, mobilegallery6, mobilegallery7, mobilegallery8, mobilegallery9
  ];
  

  return (
    <div className="gallery">
        <div className="galleryHeader">
            <h1>Gallery</h1>
            <p>jobs, features, masterclasses & picture portfolio</p>
        </div>

        <div className="galleryWrapper flex">

            <div className="galleryCon">
               <div className="gallery1">
                <img src={gallery1} />
                <div className="preview" onClick={() => openModal(0)}>View full image</div>
              </div>
               <div className="flex justification-between">
                <div className="gallerycons" style={{width: "48%"}}>
                    <div className="gallery2">
                        <img src={gallery2} />
                    <div className="preview" onClick={() => openModal(1)}>View full image</div>
                    </div>
                    <div className="gallery3">
                        <img src={gallery3} />
                        <div className="preview" onClick={() => openModal(2)}>View full image</div>
                    </div>
                </div>
                <div className="gallery4"  style={{width: "48%"}}>
                    <img src={gallery4} />
                    <div className="preview" onClick={() => openModal(3)}>View full image</div>
                    </div>
               </div>
            </div>

            <div className="galleryCon">
                 <div className="flex justification-between">
                    <div className="gallery5">
                        <img src={gallery5}/>
                        <div className="preview" onClick={() => openModal(4)}>View full image</div>
                    </div>
                    <div className="gallery6">
                        <img src={gallery6}/>
                        <div className="preview" onClick={() => openModal(5)}>View full image</div>
                    </div>
                 </div>
                 <div className="gallery7">
                    <img src={gallery7}/>
                    <div className="preview" onClick={() => openModal(6)}>View full image</div>
                </div>
                 <div className="flex justification-between">
                    <div className="gallery8">
                        <img src={gallery8}/>
                        <div className="preview" onClick={() => openModal(7)}>View full image</div>
                    </div>
                    <div className="gallery9">
                        <img src={gallery9}/>
                        <div className="preview" onClick={() => openModal(8)}>View full image</div>
                    </div>
                 </div>
            </div>
        </div>

        <div className="galleryMobileWrapper">

            <div className="mobileGalleryCon flex justification-between">
                 <div className="mobileConWrapper">
                        <div className="flex mobileGa">
                           <div className="mobileGallery1">
                            <img src={mobilegallery1} />
                            <div className="preview" onClick={() => openModal(9)}>View full image</div>
                            </div>
                           <div className="mobileGallery2">
                            <img src={mobilegallery2} />
                            <div className="preview" onClick={() => openModal(10)}>View full image</div>
                            </div> 
                        </div>
                        <div className="mobileGallery3">
                            <img src={mobilegallery3} />
                            <div className="preview" onClick={() => openModal(11)}>View full image</div>
                            </div>
                 </div>
                <div className="mobileGallery4">
                    <img src={mobilegallery4} />
                    <div className="preview" onClick={() => openModal(12)}>View full image</div>
                    </div>
            </div>


            <div className="mobileGalleryCon gap-10 flex justification-between">

                    <div className="mobile">
                        <div className="mobileGallery5">
                            <img src={mobilegallery5} />
                            <div className="preview" onClick={() => openModal(13)}>View full image</div>
                            </div>
                        <div className="mobileGallery6">
                            <img src={mobilegallery6} />
                            <div className="preview" onClick={() => openModal(14)}>View full image</div>
                            </div>
                    </div> 

                   <div className="mobileGallery7">
                    <img src={mobilegallery7} />
                    <div className="preview" onClick={() => openModal(15)}>View full image</div>
                    </div>
                   

                   <div className="mobile">
                        <div className="mobileGallery8">
                            <img src={mobilegallery8} />
                            <div className="preview" onClick={() => openModal(16)}>View full image</div>
                            </div>
                        <div className="mobileGallery9">
                            <img src={mobilegallery9} />
                            <div className="preview" onClick={() => openModal(17)}>View full image</div>
                            </div>
                   </div>

            </div>


        </div>
        
        <div className="flex-center justification-center galleryview">
            <div className="galleryBottom" onClick={() => openModal(0)}>view more</div>
        </div>


        {currentIndex !== null && (
        <ImagePreviewModal
          src={images[currentIndex]}
          onClose={closeModal}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < images.length - 1}
        />
      )}
        
    </div>
  )
}

export default Gallery