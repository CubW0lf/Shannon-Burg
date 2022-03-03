import { useContext, useState } from "react";
import { PostContext } from "../../contexts/PostContext";
import "./Category.css";

const Category = ({ category }) => {
  const [toggleSub, setToggleSub] = useState(false);

  const { setCategoryId, setCurrentPage } = useContext(PostContext);

  const handleClick = (category) => {
    setToggleSub(!toggleSub);
    setCategoryId(category);
    setCurrentPage(1);
  };

  return (
    <li className="Category parent">
      <span
        onClick={() => handleClick(category.parent.object_id)}
        dangerouslySetInnerHTML={{ __html: category.parent.title }}
      ></span>
      {category.sub.length !== 0 && (
        <ul className={`sub${toggleSub ? " active" : ""}`}>
          {category.sub.map((s) => (
            <li key={s.ID} onClick={() => setCategoryId(s.object_id)} dangerouslySetInnerHTML={{ __html: s.title }}></li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Category;
