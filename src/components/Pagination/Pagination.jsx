import { useContext } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { PostContext } from "../../contexts/PostContext";
import "./Pagination.css";

const Pagination = () => {
  const { pageCount, currentPage, setCurrentPage } = useContext(PostContext);

  return (
    <div className="Pagination">
      {currentPage - 1 > 0 && <GrPrevious className="prev" onClick={() => setCurrentPage(currentPage - 1)} />}
      <div className="current">{currentPage}</div>
      {currentPage + 1 < pageCount && <GrNext className="next" onClick={() => setCurrentPage(currentPage + 1)} />}
      {currentPage !== parseInt(pageCount) && (
        <div className="total" onClick={() => setCurrentPage(pageCount)}>
          {pageCount}
        </div>
      )}
    </div>
  );
};

export default Pagination;
