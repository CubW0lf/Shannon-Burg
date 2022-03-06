import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import ArticlesLoader from "../ArticlesLoader/ArticlesLoader";
import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { latestPost } from "../../services/articlesAPI.js";

const Slider = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    latestPost().then((data) => {
      setLatest(data);
    });
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="Slider not-mobile"
      >
        {latest.length !== 0 ? (
          latest?.map((l) => (
            <SwiperSlide key={l.id} className="item">
              <Link to={`article/${l.id}`}>
                <div
                  style={{
                    backgroundImage: `url("${l.fimg_url}")`,
                  }}
                  className="item-bg"
                >
                  <h2 dangerouslySetInnerHTML={{ __html: l.title.rendered }}></h2>
                </div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <ArticlesLoader />
        )}
      </Swiper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="Slider mobile"
      >
        {latest.length !== 0 ? (
          latest?.map((l) => (
            <SwiperSlide key={l.id} className="item">
              <Link to={`article/${l.id}`}>
                <div
                  style={{
                    backgroundImage: `url("${l.fimg_url}")`,
                  }}
                  className="item-bg"
                >
                  <h2 dangerouslySetInnerHTML={{ __html: l.title.rendered }}></h2>
                </div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <ArticlesLoader />
        )}
      </Swiper>
    </>
  );
};

export default Slider;
