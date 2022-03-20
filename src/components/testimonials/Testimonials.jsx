import React from 'react'
import './testimonials.css'
import Test1 from '../../assests/test1.webp'
import Test2 from '../../assests/test2.webp'
import Test3 from '../../assests/test3.jpeg'
import Test4 from '../../assests/test4.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

const data =[{
  image: Test1,
  name: 'Ethan',
  review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut officiis natus suscipit neque voluptates sit vitae libero. Atque tempore accusamus ullam. Expedita amet doloremque placeat quo dolorem, odit maxime!'
},
{
  image: Test2,
  name: 'Felix',
  review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut officiis natus suscipit neque voluptates sit vitae libero. Atque tempore accusamus ullam. Expedita amet doloremque placeat quo dolorem, odit maxime!'
},
{
  image: Test3,
  name: 'Akako',
  review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut officiis natus suscipit neque voluptates sit vitae libero. Atque tempore accusamus ullam. Expedita amet doloremque placeat quo dolorem, odit maxime!'
},
{
  image: Test4,
  name: 'Analia',
  review: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut officiis natus suscipit neque voluptates sit vitae libero. Atque tempore accusamus ullam. Expedita amet doloremque placeat quo dolorem, odit maxime!'
},

]

const Testimonials = () => {
  return (

    
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      
      <div className="container testimonial__container">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
          data.map(({image, name,review},index)=>{
            return (
              <SwiperSlide key={index} className='testimonial'>
          <img src={image} alt="" className="client-image" />
          <h5 className='client-name'>{name}</h5>
          <small className='client-review'>
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials