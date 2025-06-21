import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './TestimonialSlider.css';
import customer from '../../assets/customer-top.png'




const Testimonial = () => {

  const [testimonials, setTestimonials] = useState([]);

   useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('testimonial.json');
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);



  return (
    <div className="testimonial-container w-10/12 mx-auto">
      <div className=' space-y-3 justify-items-center py-5'>
        <img src={customer} alt="" />
        <h2 className='text-2xl font-extrabold'>What our customers are sayings</h2>
        <p className='text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="quote">❝</p>
              <p className="message border-b border-dashed pb-5">{testimonial.message}</p>
              <div className="author">
                <div className="avatar-circle">
                  <img className='w-24 rounded-full' src={testimonial.image} alt="" />
                </div>
                <div>
                  <h4 className='text-2xl'>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
