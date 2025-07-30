import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Sample images
import product1 from "../../../assets/pagesimage/home/category-baby-care.jpg";
import product2 from "../../../assets/pagesimage/home/category-atta-rice-dal.jpg";
import product3 from "../../../assets/pagesimage/home/category-bakery-biscuits.jpg";
import product4 from "../../../assets/pagesimage/home/category-chicken-meat-fish.jpg";
import product5 from "../../../assets/pagesimage/home/category-cleaning-essentials.jpg";
import product6 from "../../../assets/pagesimage/home/category-dairy-bread-eggs.jpg";
import product7 from "../../../assets/pagesimage/home/category-instant-food.jpg";
import product8 from "../../../assets/pagesimage/home/category-pet-care.jpg";
import product9 from "../../../assets/pagesimage/home/category-snack-munchies.jpg";
import product10 from "../../../assets/pagesimage/home/category-tea-coffee-drinks.jpg";

// Add more if needed...

const allProducts = [
  {
    id: 1,
    name: "Snacks & Munchies",
    image: product9,
    price: 120,
    oldPrice: 150,
    rating: 4.5,
    reviews: 154,
    category: "Snacks",
    description: "Tasty and crispy munchies for your evening snacks.",
  },
  {
    id: 2,
    name: "Bakery & Biscuits",
    image: product3,
    price: 99,
    oldPrice: 130,
    rating: 4.2,
    reviews: 89,
    category: "Bakery",
    description: "Freshly baked biscuits and breads.",
  },
  {
    id: 3,
    name: "Instant Food",
    image: product7,
    price: 199,
    oldPrice: 240,
    rating: 3.9,
    reviews: 76,
    category: "Food",
    description: "Quick to prepare and delicious instant meals.",
  },
  {
    id: 4,
    name: "Dairy & Bread",
    image: product6,
    price: 110,
    oldPrice: 135,
    rating: 4.3,
    reviews: 102,
    category: "Dairy",
    description: "Fresh dairy and bakery items for daily needs.",
  },
  {
    id: 5,
    name: "Tea & Coffee",
    image: product10,
    price: 145,
    oldPrice: 180,
    rating: 4.7,
    reviews: 90,
    category: "Beverages",
    description: "Premium tea and coffee blends to energize you.",
  },
  {
    id: 6,
    name: "Baby Care",
    image: product1,
    price: 499,
    oldPrice: 599,
    rating: 4.6,
    reviews: 70,
    category: "Health & Baby",
    description: "Safe and reliable baby care products.",
  },
  {
    id: 7,
    name: "Pet Care",
    image: product8,
    price: 330,
    oldPrice: 420,
    rating: 4.1,
    reviews: 55,
    category: "Pets",
    description: "Care items for your beloved pets.",
  },
  {
    id: 8,
    name: "Cleaning Essentials",
    image: product5,
    price: 180,
    oldPrice: 250,
    rating: 3.8,
    reviews: 34,
    category: "Household",
    description: "Effective cleaning products for your home.",
  },
  {
    id: 9,
    name: "Rice & Dal",
    image: product2,
    price: 250,
    oldPrice: 300,
    rating: 4.4,
    reviews: 60,
    category: "Grocery",
    description: "Quality grains for healthy meals.",
  },
  {
    id: 10,
    name: "Meat & Fish",
    image: product4,
    price: 399,
    oldPrice: 450,
    rating: 4.0,
    reviews: 48,
    category: "Non-Veg",
    description: "Fresh and hygienically packed meat & seafood.",
  },
];

const ProductPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cardsPerPage = 9;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allProducts.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(allProducts.length / cardsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {currentCards.map((product, index) => (
          <div className="col" key={index}>
            <div className="card card-product h-100">
              <div className="card-body">
                <div
                  className="text-center position-relative"
                  onClick={() => setSelectedProduct(product)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mb-3 img-fluid"
                    // style={{ height: "180px", objectFit: "contain" }}
                  />
                </div>
                <div className="text-small mb-1">
                  <small className="text-muted">{product.category}</small>
                </div>
                <h2 className="fs-6 mb-1">{product.name}</h2>
                <div className="text-warning mb-1">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa ${
                        product.rating >= i + 1
                          ? "fa-star"
                          : product.rating >= i + 0.5
                          ? "fa-star-half-alt"
                          : "fa-star-o"
                      }`}
                    />
                  ))}
                  <span className="text-muted small">
                    {" "}
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="text-dark fw-bold">
                    ₹{product.price}{" "}
                    {product.oldPrice && (
                      <small className="text-muted text-decoration-line-through ms-2">
                        ₹{product.oldPrice}
                      </small>
                    )}
                  </span>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() =>
                      Swal.fire("Added to cart", product.name, "success")
                    }
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
            >
              <i className="fa fa-chevron-left" />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
            >
              <i className="fa fa-chevron-right" />
            </button>
          </li>
        </ul>
      </nav>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content p-3">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title fw-bold">{selectedProduct.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedProduct(null)}
                ></button>
              </div>
              <div className="modal-body row">
                <div className="col-md-5 text-center border-end">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="img-fluid"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                  <div className="mt-3">
                    <button
                      className="btn btn-warning me-2 w-100 mb-2"
                      onClick={() =>
                        Swal.fire("Added to cart", selectedProduct.name, "success")
                      }
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => Swal.fire("Redirecting to payment...", "", "info")}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="col-md-7 ps-md-4">
                  <div className="mb-2">
                    <strong>Special Price:</strong>{" "}
                    <span className="fs-4 fw-bold text-success">₹{selectedProduct.price}</span>{" "}
                    {selectedProduct.oldPrice && (
                      <span className="text-muted text-decoration-line-through ms-2">
                        ₹{selectedProduct.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="mb-2">
                    <strong>Category:</strong> {selectedProduct.category}
                  </div>
                  <div className="mb-2">
                    <strong>Rating:</strong>{" "}
                    <span className="me-2">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa ${
                            selectedProduct.rating >= i + 1
                              ? "fa-star"
                              : selectedProduct.rating >= i + 0.5
                              ? "fa-star-half-alt"
                              : "fa-star-o"
                          }`}
                          style={{ color: "#ffc107" }}
                        />
                      ))}
                    </span>
                    ({selectedProduct.reviews} reviews)
                  </div>
                  <div className="mb-2 text-success">
                    <strong>Offers:</strong> 10% Instant Discount with XYZ Card
                  </div>
                  <div className="mb-2">
                    <strong>Delivery:</strong> Free Delivery by Tomorrow
                  </div>
                  <div className="mt-3">
                    <strong>Description:</strong>
                    <p className="small text-muted">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPagination;
