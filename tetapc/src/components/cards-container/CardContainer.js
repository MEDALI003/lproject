import React, { useState, useEffect } from 'react';
import CardB from '../Navbar/Card/Card';
import Spinner from "../Spinner";
import './CardContainer.css'; // Import CSS file for styling
import Form from 'react-bootstrap/Form';

const CardContainer = ({ product }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState(null);
  const itemsPerPage = 9;
  const totalPages = product ? Math.ceil(product.length / itemsPerPage) : 0; // Check if product is not null

  useEffect(() => {
    setCurrentPage(1); // Reset current page when product list changes
  }, [product]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
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

  let displayedProducts = product ? [...product] : []; // Create a copy of the products array
  // Sort the products based on the selected sort order
  if (sortOrder === "1") {
    displayedProducts.sort((a, b) => a.price - b.price); // Assuming each product has a 'price' property
  } else if (sortOrder === "2") {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  displayedProducts = displayedProducts.slice(startIndex, endIndex);

  return (
    <div>
      <div style={{width:"100px"}}><Form.Select aria-label="Default select example" onChange={handleSortChange}>
        <option defaultValue={"0"}>Open this select menu</option>
        <option value="1">Tri Ascendent par prix</option>
        <option value="2">Tri Descendent par prix</option>
      </Form.Select>
      </div>
      <div className="card-container">
        {displayedProducts.length > 0 ?
          displayedProducts.map((el, index) =>  <CardB key={index} product={el} />)
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
