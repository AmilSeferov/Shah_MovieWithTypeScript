import { Swiper, SwiperSlide } from "swiper/react";
import "./../../assets/react.svg";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Scrollbar } from "swiper/modules";
import "./Swiper.css";
import { Button, Image } from "react-bootstrap";
import { dataType } from "../../types/Types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
export default () => {
  const data: dataType[] = useSelector((state: RootState) => state.data.data);
  return (
    <Swiper
      className="slider border border-dark d-flex justify-content-center"
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 50000,
        disableOnInteraction: false, // Keeps autoplay running after user interaction
      }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => {
        return (
          <SwiperSlide className="slide">
            <div className="tittle">
              <h2>{item.title}</h2>
              <p>{item.synopsis}</p>
              <p className="text-danger">Released:{item.released} , Imdb:{item.imdbrating}</p>
              <Button variant="danger">Izle</Button>
            </div>
            <img src={item.imageurl[0]} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
