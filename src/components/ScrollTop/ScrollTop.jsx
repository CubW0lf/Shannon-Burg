import { BsChevronUp } from "react-icons/bs";
import "./ScrollTop.css";

const ScrollTop = ({ visible }) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`ScrollTop ${visible ? "visible" : "not-visible"}`} onClick={toTop}>
      <BsChevronUp />
    </div>
  );
};

export default ScrollTop;
