import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = () => {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        axios.get("http://wp.shannonburg.fr/wp-json/wp/v2/posts").then(({ data }) => {
            setLatest(data.slice(0, 6));
        });
    }, []);

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
            {latest.length !== 0 &&
                latest.map((l) => (
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
