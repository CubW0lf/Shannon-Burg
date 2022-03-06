import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContext";
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
          <Link key={p.id} to={`/article/${p.id}`} className="result">
            <span dangerouslySetInnerHTML={{ __html: p.title }}></span>
          </Link>
        ))}
    </section>
  );
};

export default SearchResult;
