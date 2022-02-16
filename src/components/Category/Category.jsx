import { useState } from "react";
import { BsFillCaretDownSquareFill, BsFillCaretUpSquareFill } from "react-icons/bs";
import "./Category.css";

const Category = ({ category, setCategory }) => {
    const [toggleSub, setToggleSub] = useState(false);

    const handleClick = (category) => {
        setToggleSub(!toggleSub);
        setCategory(category);
    };

    return (
        <li className="Category parent">
            <span onClick={() => handleClick(category.parent.id)}>
                {category.parent.name}{" "}
                {category.sub.length !== 0 &&
                    (toggleSub ? (
                        <BsFillCaretUpSquareFill className="mobile" />
                    ) : (
                        <BsFillCaretDownSquareFill className="mobile" />
                    ))}
            </span>
            {category.sub.length !== 0 && (
                <ul className={`sub${toggleSub ? " active" : ""}`}>
                    {category.sub.map((s) => (
                        <li key={s.id} onClick={() => setCategory(s.id)}>
                            {s.name}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Category;
