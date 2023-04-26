import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/me-about.jpg'
import AVTR2 from '../../assets/me-about.jpg'
import AVTR3 from '../../assets/me-about.jpg'
import AVTR4 from '../../assets/me-about.jpg'


import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';




import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';





const data = [
  {
    avatar: AVTR1,
    name: 'Test',
    review: "test",
  },

  {
    avatar: AVTR2,
    name: 'Test',
    review: "test",
  },

  {
    avatar: AVTR3,
    name: 'Test',
    review: "test",
  },

  {
    avatar: AVTR4,
    name: 'Test',
    review: "test",
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from</h5>
      <h2>Testtolonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>

              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>

            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials