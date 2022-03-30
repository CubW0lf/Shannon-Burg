import { Link } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ArticlesLoader from "../../components/ArticlesLoader/ArticlesLoader";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext.js";
import "./Articles.css";
import Pagination from "../Pagination/Pagination";

const Articles = () => {
  const { posts, error, isLoading } = useContext(PostContext);

  return (
    <>
      {isLoading && <ArticlesLoader />}
      <div className="Articles">
        {error && <>Oh no, there was an error</>}
        {!error &&
          !isLoading &&
          posts?.map((p) => (
            <Link key={p.id} to={`article/${p.id}`}>
              <ArticleCard data={p} />
            </Link>
          ))}
        <Pagination />
      </div>
    </>
  );
};

export default Articles;
