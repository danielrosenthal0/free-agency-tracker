import React from "react";
import { Link } from "react-router-dom";
import classes from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <Link
          key={page}
          to={`/list/${page}`}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </Link>
      );
    }

    return buttons;
  };

  return <div className={classes.pagination}>{renderPaginationButtons()}</div>;
};

export default Pagination;
