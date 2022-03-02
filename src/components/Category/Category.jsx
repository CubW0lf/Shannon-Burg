import { useState } from "react";
import "./Category.css";

const Category = ({ category, setCategory }) => {
  const [toggleSub, setToggleSub] = useState(false);

  const handleClick = (category) => {
    setToggleSub(!toggleSub);
    setCategory(category);
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
            <li key={s.ID} onClick={() => setCategory(s.object_id)} dangerouslySetInnerHTML={{ __html: s.title }}></li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Category;
