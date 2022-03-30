import Articles from "../../components/Articles/Articles";
import Categories from "../../components/Categories/Categories";
import Pagination from "../../components/Pagination/Pagination";
import Slider from "../../components/Slider/Slider";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="Portfolio" id="portfolio">
      <Slider />
      <Categories />
      <Articles />
    </section>
  );
};

export default Portfolio;
