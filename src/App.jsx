import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PostContext } from "./contexts/PostContext.js";
import { uxContext } from "./contexts/uxContext.js";
import { findAllPosts } from "./services/articlesAPI.js";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ArticleSingle from "./pages/ArticleSingle/ArticleSingle";
import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResult/SearchResult.jsx";
import ScrollTop from "./components/ScrollTop/ScrollTop.jsx";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  const [categoryId, setCategoryId] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [flash, setFlash] = useState("");
  const [flashType, setFlashType] = useState("");
  const [visible, setVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [scrollPosition]);

  useEffect(() => {
    findAllPosts(currentPage, categoryId).then((data) => {
      setPosts(data);
      setPageCount(data?._paging?.totalPages);
    });
  }, [currentPage, categoryId]);

  const deleteFlash = () => {
    setFlash("");
  };

  const handleFlash = (type, message, duration) => {
    setFlash(message);
    setFlashType(type);
    setTimeout(deleteFlash, duration);
  };

  return (
    <PostContext.Provider
      value={{
        categoryId,
        setCategoryId,
        posts,
        setPosts,
        pageCount,
        setPageCount,
        currentPage,
        setCurrentPage,
        search,
        setSearch,
        result,
        setResult,
      }}
    >
      <uxContext.Provider value={{ handleFlash, flash, flashType }}>
        <div className="App">
          <ScrollTop visible={visible} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/article/:id" element={<ArticleSingle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </uxContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
