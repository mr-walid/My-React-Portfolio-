import React from 'react'
import './Testimonilas.css'
import AVATAR1 from '../assets/avatar1.jpg'
import AVATAR2 from '../assets/avatar2.jpg'
import AVATAR3 from '../assets/avatar3.jpg'
import AVATAR4 from '../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar : AVATAR1,
    nAme : 'khalida Asmai',
    review : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste voluptates tenetur sint alias nulla laudantium incidunt. Ex, voluptas ad?'
  },
  {
    avatar : AVATAR2,
    nAme : 'Walid zariki',
    review : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste voluptates tenetur sint alias nulla laudantium incidunt. Ex, voluptas ad?'
  },
  {
    avatar : AVATAR3,
    nAme : 'kabor sktiwi',
    review : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste voluptates tenetur sint alias nulla laudantium incidunt. Ex, voluptas ad?'
  },
  {
    avatar : AVATAR4,
    nAme : ' khadija fertasi',
    review : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste voluptates tenetur sint alias nulla laudantium incidunt. Ex, voluptas ad?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonilas</h2>
        
        <Swiper className="container testimonials_container"
            // install Swiper modules
          modules={[ Pagination, ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
         
       >
        
          {   
            data.map(({avatar, nAme, review}, index) => {
                     return (
             <SwiperSlide className='testimonial'key={index} >
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client_name'> {nAme} </h5>
                  <small className='client_review'>
                    {review}
                  </small>

              </SwiperSlide>
                     )
             })
          }
        
        </Swiper>
    </section>
  )
}

export default Testimonials
