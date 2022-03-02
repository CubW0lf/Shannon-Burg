import { Link } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ArticlesLoader from "../../components/ArticlesLoader/ArticlesLoader";
import "./Articles.css";

const Articles = ({ posts, error, isLoading, isSuccess }) => {
  return (
    <div className="Articles">
      {error && <>Oh no, there was an error</>}
      {isLoading && <ArticlesLoader />}
      {isSuccess &&
        posts.map((p) => (
          <Link key={p.id} to={`article/${p.id}`}>
            <ArticleCard data={p} />
          </Link>
        ))}
    </div>
  );
};

export default Articles;
