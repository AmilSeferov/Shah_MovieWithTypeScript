import { Swiper, SwiperSlide } from 'swiper/react';
import './../../assets/react.svg'
// Import Swiper styles
import 'swiper/css';
import { Autoplay, Scrollbar,  } from 'swiper/modules';
import './Swiper.css'
import { Button, Image } from 'react-bootstrap';
export default () => {
  return (
    <Swiper className='slider border border-dark d-flex justify-content-center'
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      
          autoplay={{
            delay: 50000,
            disableOnInteraction: false, // Keeps autoplay running after user interaction
          }}
          loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='slide'>
        <div className="tittle">
          <h2>roneyy</h2>
          <p>Filmlər, onlayn izlə, HD filmlər, TV seriallar, Azərbaycanca dublyaj film və seriallar izlə. 720p və Full HD keyfiyyətində filmləri Azərbaycan dilində izlə.</p>
          <Button variant="danger">Izle</Button>
        </div>
        <img src="https://i.imgur.com/WDPNgdo.jpeg" alt=""   />
      </SwiperSlide>
      <SwiperSlide className='slide'>Slide 2</SwiperSlide>
      <SwiperSlide className='slide'>Slide 3</SwiperSlide>
      <SwiperSlide className='slide'>Slide 4</SwiperSlide>
    </Swiper>
  );
};