import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContext";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import "./SearchResult.css";
import { searchPost } from "../../services/articlesAPI";

const SearchResult = () => {
  const { search, result, setResult } = useContext(PostContext);
  console.log(result);

  useEffect(() => {
    searchPost(search).then((data) => {
      setResult(data);
    });
  }, [search, setResult]);

  return (
    <section className="SearchResult">
      {result.length !== 0 &&
        result.map((p) => (
          <Link key={p.id} to={`/article/${p.id}`}>
            <ArticleCard />
          </Link>
        ))}
    </section>
  );
};

export default SearchResult;
