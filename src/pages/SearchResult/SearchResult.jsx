import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";
import { PostContext } from "../../contexts/PostContext";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import "./SearchResult.css";

const SearchResult = () => {
  const { search, result, setResult } = useContext(PostContext);

  useEffect(() => {
    axios.get(`https://wp.shannonburg.fr/wp-json/wp/v2/search?search=${search}&_embed`).then(({ data }) => {
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
