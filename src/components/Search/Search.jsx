import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

const Search = () => {
    const [toggle, setToggle] = useState(false);

    const { setSearch } = useContext(PostContext);

    return (
        <div className="Search not-mobile">
            <BsSearch className="toggle" onClick={() => setToggle(!toggle)} />
            <form className={`${toggle ? "active" : ""}`}>
                <input type="text" placeholder="Votre Recherche" onChange={(e) => setSearch(e.target.value)} />
                <Link to="/search">
                    <button type="submit">
                        <BsSearch />
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Search;
