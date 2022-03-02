import { useState, useEffect, useContext } from "react";
import { PostContext } from "../../contexts/PostContext.js";
import axios from "axios";
import "./Categories.css";
import Category from "../Category/Category.jsx";

const Categories = () => {
  const { setCategory } = useContext(PostContext);

  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("https://wp.shannonburg.fr/wp-json/wp/v2/menu").then(({ data }) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    let parents = [];
    categories.filter((p) => parseInt(p.menu_item_parent) === 0 && parents.push({ parent: p, sub: [] }));

    if (parents.length !== 0) {
      parents.forEach((p) => categories.filter((s) => parseInt(s.menu_item_parent) === p.parent.ID && p.sub.push(s)));
    }
    setMenu(parents);
  }, [categories]);

  return (
    <nav className="Categories">
      <ul>
        {menu?.length !== 0 && menu?.map((c) => <Category key={c.parent.ID} category={c} setCategory={setCategory} />)}
      </ul>
    </nav>
  );
};

export default Categories;
