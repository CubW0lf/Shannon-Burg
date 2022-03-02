import Categories from "../../components/Categories/Categories";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext.js";
import { useFindAllQuery } from "../../services/wordpress.js";
import Articles from "../Articles/Articles";
import Pagination from "../../components/Pagination/Pagination";
import Slider from "../../components/Slider/Slider";
import "./Portfolio.css";

const Portfolio = () => {
  const { currentPage, category } = useContext(PostContext);

  const { data: posts, isLoading, isSuccess, error } = useFindAllQuery({ currentPage, category });

  return (
    <section className="Portfolio" id="portfolio">
      <Slider />
      <Categories />
      <Articles posts={posts} error={error} isLoading={isLoading} isSuccess={isSuccess} />
      <Pagination />
    </section>
  );
};

export default Portfolio;
