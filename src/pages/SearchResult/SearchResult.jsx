import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContext";
import "./SearchResult.css";
import { searchPost } from "../../services/articlesAPI";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const SearchResult = () => {
  const { search, result, setResult } = useContext(PostContext);

  useEffect(() => {
    searchPost(search).then((data) => {
      setResult(data);
    });
  }, [search, setResult]);

  return (
    <section className="SearchResult">
      <h1>Résultat de la Recherche : </h1>
      {result.length !== 0 ? (
        <div className="results-grid">
          {result.map((p) => (
            <Link key={p.id} to={`/article/${p.id}`}>
              <ArticleCard data={p} />
            </Link>
          ))}
        </div>
      ) : (
        <>
          <p>Aucun résultat</p>
          <Link to="/">
            <button>Retour à l'accueil</button>
          </Link>
        </>
      )}
    </section>
  );
};

export default SearchResult;
