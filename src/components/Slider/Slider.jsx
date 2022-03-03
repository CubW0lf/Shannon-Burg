import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import ArticlesLoader from "../ArticlesLoader/ArticlesLoader";
import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = () => {
  const { posts, isLoading, error } = useContext(PostContext);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      className="Slider"
    >
      {error && <>Oh no, there was an error</>}
      {isLoading && <ArticlesLoader />}
      {!error &&
        !isLoading &&
        posts?.map((l) => (
          <SwiperSlide
            key={l.id}
            className="item"
            style={{
              backgroundImage: `url("${l.fimg_url}")`,
            }}
          >
            <Link to={`article/${l.id}`}>
              <h2 dangerouslySetInnerHTML={{ __html: l.title.rendered }}></h2>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
