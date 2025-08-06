import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import review1 from '../assets/images/review1.jpg'
import review2 from '../assets/images/review2.jpg'
import review3 from '../assets/images/review3.jpg'
import { AnimatePresence, motion } from 'framer-motion'


const data = [
  // Add your testimonials as objects
  {
    id: 1,
    name: 'Martindale Heart Ononye',
    position: 'Founder/Ceo, Hearts Entertainment',
    stars: 4,
    text: `It's almost impossible to remember all the projects I've had Temi and her team work with me on...`,
  },
  {
    id: 2,
    name: 'Anuoluwapo Kabiawu',
    position: '',
    stars: 5,
    text: `Temi’s professionalism is superb. She is an excellent listener...`,
  },
  {
    id: 3,
    name: 'AyeeSha Omadibi',
    position: 'Founder, Hustle Africa. Lagos, Nigeria.',
    stars: 3,
    text: `My first ever personal brand shoot...`,
  },
  {
    id: 4,
    name: 'Obafemi david',
    position: 'Founder, Hustle Africa. Lagos, Nigeria.',
    stars: 3,
    text: `My first ever personal brand shoot, I didn't know what to expect. 
    I just knew I wanted nice photos. 
    Then I got introduced to Temi of LoveAfrik,
     who was not just nice and professional,
      she was and is very knowledgeable. 
      I went from complete indifference to understanding what fabrics and colours were great for my skin tone. 
      Every outfit and accessory was deliberately and thoughtfully put together. 
      My conclusion is that Temi knows her onions and I wouldn't hesitate to refer LoveAfrik again and again.`,
  },
  // Add more if needed
];

function Testimonies() {

 const [testimonies, setTestimonies] = useState(data);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateSize = () => {
      setVisibleCount(window.innerWidth < 768 ? 2 : 3);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const shuffleLeft = () => {
    setTestimonies(prev => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const shuffleRight = () => {
    setTestimonies(prev => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

  return (
    <div className='testimonies'>
         <div className="testimoniesHeader">
              <p>Testimonials</p>
              <h1>What our clients say about us.</h1>
         </div>

         


{/* ----------------------------------------------------------------- */}

<div className="testimoniesCon flex  gap-10">

      <div className="arrowContainer">
          <div className="arrowLeft" onClick={shuffleLeft}>
          <FaChevronLeft />
        </div>

        <div className="arrowRight" onClick={shuffleRight}>
          <FaChevronRight/>
        </div>
      </div>
      

      <div className="testimoniesFlex flex gap-6 overflow-hidden w-full">
        <AnimatePresence initial={false} mode="popLayout">
          {testimonies.slice(0, visibleCount).map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="testimoniesContainers w-full md:w-[30%] bg-white rounded-lg p-4 flex-shrink-0 shadow"
            >
              <div className="reviewBody text-sm text-gray-800 mb-3">{item.text}</div>

              <div className="reviewsStar flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < item.stars ? (
                      <IoIosStar className="text-yellow-500" />
                    ) : (
                      <IoIosStarOutline className="text-gray-400" />
                    )}
                  </span>
                ))}
              </div>

              <div className="testimoniesTitle font-semibold">{item.name}</div>
              {item.position && (
                <div className="testimonerPosition text-xs text-gray-500">{item.position}</div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      
    </div>

{/* ----------------------------------------------------------------- */}
    </div>
  )
}

export default Testimonies