import Categories from "../../components/Categories/Categories";
import Articles from "../Articles/Articles";
import Pagination from "../../components/Pagination/Pagination";
import "./Portfolio.css";
import Slider from "../../components/Slider/Slider";

const Portfolio = () => {
    return (
        <section className="Portfolio" id="portfolio">
            <Slider />
            <Categories />
            <Articles />
            <Pagination />
        </section>
    );
};

export default Portfolio;
