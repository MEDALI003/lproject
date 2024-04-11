import React, { useState, useEffect } from 'react';
import CardB from '../Navbar/Card/Card';
import Spinner from "../Spinner";
import './CardContainer.css'; // Import CSS file for styling

const CardContainer = ({ product }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = product ? Math.ceil(product.length / itemsPerPage) : 0; // Check if product is not null

  useEffect(() => {
    setCurrentPage(1); // Reset current page when product list changes
  }, [product]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = product ? product.slice(startIndex, endIndex) : []; // Check if product is not null

  return (
    <div>
      <div className="card-container">
        {displayedProducts.length > 0 ?
          displayedProducts.map((el, index) => <CardB key={index} product={el} />)
          : <Spinner />
        }
      </div>
      <div className="pagination">
        {renderPagination()}
      </div>
    </div>
  );
};

export default CardContainer;
