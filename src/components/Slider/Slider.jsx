import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Slider.css";

const Slider = () => {
    const [latest, setLatest] = useState([]);
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        axios.get("http://localhost:8000/wp-json/wp/v2/posts?_embed").then(({ data }) => {
            setLatest(data.slice(0, 3));
        });
    }, []);

    const handlePrev = () => {
        if (current > 1) {
            setCurrent(current - 1);
        } else {
            setCurrent(3);
        }
    };

    const handleNext = () => {
        if (current < 3) {
            setCurrent(current + 1);
        } else {
            setCurrent(1);
        }
    };

    useEffect(() => {
        const wrapper = document.querySelector(".slider-images");

        if (latest.length !== 0) {
            switch (current) {
                case 1:
                    wrapper.style.transform = "translateX(0)";
                    break;
                case 2:
                    wrapper.style.transform = "translateX(-100vw)";
                    break;
                case 3:
                    wrapper.style.transform = "translateX(-200vw)";
                    break;
            }
        }
    }, [current]);

    setTimeout(() => {
        if (current < 3) {
            setCurrent(current + 1);
        } else {
            setCurrent(1);
        }
    }, 5000);

    return (
        <div className="Slider">
            <div className="slider-container">
                <GrPrevious className="prev" onClick={handlePrev} />
                <GrNext className="next" onClick={handleNext} />
                <div className="slider-images">
                    {latest.length !== 0 &&
                        latest.map((l) => (
                            <Link
                                className="item"
                                key={l.id}
                                style={{ backgroundImage: `url("${l._embedded["wp:featuredmedia"][0].source_url}")` }}
                                to={`article/${l.id}`}
                            >
                                <h2 dangerouslySetInnerHTML={{ __html: l.title.rendered }}></h2>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
