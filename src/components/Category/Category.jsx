import { useContext, useState } from "react";
import { PostContext } from "../../contexts/PostContext";
import "./Category.css";

const Category = ({ category }) => {
  const [toggleSub, setToggleSub] = useState(false);

  const { setCategoryId, setCurrentPage } = useContext(PostContext);

  const handleCategory = (id) => {
    setCurrentPage(1);
    setToggleSub(!toggleSub);
    setCategoryId(id);
    if (window.location.href !== `${window.location.origin}/#portfolio`) {
      window.location.href = "/#portfolio";
    }
  };

  return (
    <li className="Category parent">
      <span
        onClick={() => handleCategory(category.parent.object_id)}
        dangerouslySetInnerHTML={{ __html: category.parent.title }}
      ></span>
      {category.sub.length !== 0 && (
        <ul className={`sub${toggleSub ? " active" : ""}`}>
          {category.sub.map((s) => (
            <li key={s.ID} onClick={() => handleCategory(s.object_id)} dangerouslySetInnerHTML={{ __html: s.title }}></li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Category;
