import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PostContext } from "./contexts/PostContext.js";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ArticleSingle from "./pages/ArticleSingle/ArticleSingle";
import "./App.css";
import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResult/SearchResult.jsx";

function App() {
    const [category, setCategory] = useState(null);
    const [previousCategory, setPreviousCategory] = useState(null);
    const [posts, setPosts] = useState([]);
    const [postsCount, setPostsCount] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    return (
        <PostContext.Provider
            value={{
                category,
                setCategory,
                posts,
                setPosts,
                postsCount,
                setPostsCount,
                pageCount,
                setPageCount,
                currentPage,
                setCurrentPage,
                previousCategory,
                setPreviousCategory,
                search,
                setSearch,
                result,
                setResult,
            }}
        >
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchResult />} />
                    <Route path="/article/:id" element={<ArticleSingle />} />
                </Routes>
                <Footer />
            </div>
        </PostContext.Provider>
    );
}

export default App;
