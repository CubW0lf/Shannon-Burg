import { useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext.js";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import "./Articles.css";

const Articles = () => {
    const {
        category,
        posts,
        setPosts,
        setPostsCount,
        setPageCount,
        currentPage,
        previousCategory,
        setPreviousCategory,
        setCurrentPage,
    } = useContext(PostContext);

    useEffect(() => {
        if (category === null || category === undefined) {
            axios
                .get(`https://wp.shannonburg.fr/wp-json/wp/v2/posts?_embed&per_page=12&page=${currentPage}`)
                .then((response) => {
                    setPostsCount(response.headers["x-wp-total"]);
                    setPageCount(response.headers["x-wp-totalpages"]);
                    setPosts(response.data);
                });
        } else {
            if (previousCategory === null) {
                setPreviousCategory(category);
                setCurrentPage(1);
                axios
                    .get(`https://wp.shannonburg.fr/wp-json/wp/v2/posts?_embed&per_page=12&categories=${category}&page=1`)
                    .then((response) => {
                        setPostsCount(response.headers["x-wp-total"]);
                        setPageCount(response.headers["x-wp-totalpages"]);
                        setPosts(response.data);
                    });
            } else if (previousCategory === category) {
                axios
                    .get(
                        `https://wp.shannonburg.fr/wp-json/wp/v2/posts?_embed&per_page=12&categories=${category}&page=${currentPage}`
                    )
                    .then((response) => {
                        setPostsCount(response.headers["x-wp-total"]);
                        setPageCount(response.headers["x-wp-totalpages"]);
                        setPosts(response.data);
                    });
            } else {
                setPreviousCategory(category);
                setCurrentPage(1);
                axios
                    .get(`https://wp.shannonburg.fr/wp-json/wp/v2/posts?_embed&per_page=12&categories=${category}&page=1`)
                    .then((response) => {
                        setPostsCount(response.headers["x-wp-total"]);
                        setPageCount(response.headers["x-wp-totalpages"]);
                        setPosts(response.data);
                    });
            }
        }
    }, [
        category,
        currentPage,
        previousCategory,
        setCurrentPage,
        setPageCount,
        setPosts,
        setPostsCount,
        setPreviousCategory,
    ]);
    return (
        <div className="Articles">
            {posts.length !== 0 &&
                posts.map((p) => (
                    <Link key={p.id} to={`article/${p.id}`}>
                        <ArticleCard data={p} />
                    </Link>
                ))}
        </div>
    );
};

export default Articles;
