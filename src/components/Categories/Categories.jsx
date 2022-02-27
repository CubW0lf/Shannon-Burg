import { useState, useEffect, useContext } from "react";
import { PostContext } from "../../contexts/PostContext.js";
import axios from "axios";
import "./Categories.css";
import Category from "../Category/Category.jsx";

const Categories = () => {
    const { setCategory } = useContext(PostContext);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://wp.shannonburg.fr/wp-json/wp/v2/categories?per_page=50").then(({ data }) => {
            setCategories(data);
        });
    }, []);

    const menu = [];

    for (let i = 0; i < categories.length; i++) {
        if (categories[i].parent === 0) {
            menu.push({ parent: categories[i], sub: [] });
        }
    }

    menu.forEach((m) => categories.filter((c) => m.parent.id === c.parent && m.sub.push(c)));

    return (
        <nav className="Categories">
            <ul>
                {menu.length !== 0 && menu.map((c) => <Category key={c.parent.id} category={c} setCategory={setCategory} />)}
            </ul>
        </nav>
    );
};

export default Categories;
