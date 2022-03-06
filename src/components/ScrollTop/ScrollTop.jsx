import { FaChevronUp } from "react-icons/fa";
import "./ScrollTop.css";

const ScrollTop = ({ visible }) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`ScrollTop ${visible ? "visible" : "not-visible"}`} onClick={toTop}>
      <FaChevronUp />
    </div>
  );
};

export default ScrollTop;
