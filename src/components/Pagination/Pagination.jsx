import { useContext } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { PostContext } from "../../contexts/PostContext";
import "./Pagination.css";

const Pagination = () => {
  const { pageCount, currentPage, setCurrentPage } = useContext(PostContext);

  return (
    <div className="Pagination">
      {currentPage !== 1 && (
        <div className="total" onClick={() => setCurrentPage(1)}>
          1
        </div>
      )}
      {currentPage - 1 > 0 && <VscChevronLeft className="prev" onClick={() => setCurrentPage(currentPage - 1)} />}
      <div className="current">{currentPage}</div>
      {currentPage + 1 < pageCount && <VscChevronRight className="next" onClick={() => setCurrentPage(currentPage + 1)} />}
      {currentPage !== parseInt(pageCount) && (
        <div className="total" onClick={() => setCurrentPage(pageCount)}>
          {pageCount}
        </div>
      )}
    </div>
  );
};

export default Pagination;
