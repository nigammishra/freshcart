import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Swal from "sweetalert2";
import assortment from "../../assets/pagesimage/stores/assortment-citrus-fruits.png";
import ScrollToTop from "../../components/Animations/ScrollToTop";
import allProducts from "../shopItems/data"; // path relative to Dropdown.jsx



function Dropdown() {
  // const [openDropdowns, setOpenDropdowns] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [sortOption, setSortOption] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [storeFilter, setStoreFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => setLoaderStatus(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let products = [...allProducts];

    // Apply store filter only if any store is selected
    if (storeFilter.length > 0) {
      products = products.filter((p) => storeFilter.includes(p.category));
    }

    // Price filter
    products = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Rating filter
    if (ratingFilter.length > 0) {
      products = products.filter((p) =>
        ratingFilter.includes(Math.floor(p.rating))
      );
    }

    // Sorting
    switch (sortOption) {
      case "low":
        products.sort((a, b) => a.price - b.price);
        break;
      case "high":
        products.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        products.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(products);
  }, [sortOption, priceRange, storeFilter, ratingFilter]);

  // const toggleDropdown = (index) => {
  //   setOpenDropdowns((prev) =>
  //     prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
  //   );
  // };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePriceRange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([0, value]);
  };

  const handleStoreChange = (storeName) => {
    setStoreFilter((prev) =>
      prev.includes(storeName)
        ? prev.filter((s) => s !== storeName)
        : [...prev, storeName]
    );
  };

  const handleRatingChange = (rating) => {
    setRatingFilter((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredProducts.slice(
    indexOfFirstCard,
    indexOfLastCard
  );
  const totalPages = Math.ceil(filteredProducts.length / cardsPerPage);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <style>{`
        .fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-content {
          animation: scaleIn 0.3s ease-in-out;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
            .fade-in-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
      `}</style>
      {loaderStatus ? (
        <div
          className="loader-container d-flex justify-content-center align-items-center"
          // style={{ height: "50vh" }}
        >
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-3">
                {/* <h5 className="mb-3">Categories</h5>
                {dropdownData.map((dropdown, index) => (
                  <ul className="nav flex-column" key={index}>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="#"
                        onClick={() => toggleDropdown(index)}
                        aria-expanded={openDropdowns.includes(index)}
                      >
                        {dropdown.title}{" "}
                        <i className="fa fa-chevron-down ms-2" />
                      </Link>
                      <div
                        className={`collapse ${
                          openDropdowns.includes(index) ? "show" : ""
                        }`}
                      >
                        <ul className="nav flex-column ms-3">
                          {dropdown.items.map((item, idx) => (
                            <li className="nav-item" key={idx}>
                              <Link className="nav-link" to="#">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                ))} */}

                <div className="py-4">
                  <h5>Categories</h5>
                  <input
                    type="search"
                    className="form-control mb-3"
                    placeholder="Search by category"
                  />
                  {[
                    "Dairy",
                    "Snacks",
                    "Bakery",
                    "Fruits",  
                    "Health & Baby",
                    "Household",
                    "Personal Care",
                    "Vegetables",
                    "Non-Veg",
                  ].map((category, i) => (
                    <div className="form-check mb-2" key={i}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={category}
                        checked={storeFilter.includes(category)}
                        onChange={() => handleStoreChange(category)} // still using storeFilter & handleStoreChange
                      />
                      <label className="form-check-label" htmlFor={category}>
                        {category}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="py-4">
                  <h5>Price</h5>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="1000"
                    step="50"
                    value={priceRange[1]}
                    onChange={handlePriceRange}
                  />
                  <p>
                    ₹{priceRange[0]} - ₹{priceRange[1]}
                  </p>
                </div>

                <div className="py-4">
                  <h5>Rating</h5>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div className="form-check mb-2" key={rating}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`rating${rating}`}
                        checked={ratingFilter.includes(rating)}
                        onChange={() => handleRatingChange(rating)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`rating${rating}`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`bi ${
                              i < rating ? "bi-star-fill" : "bi-star"
                            } text-warning`}
                          />
                        ))}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="py-4 position-relative">
                  <div className="position-absolute p-4">
                    <h3>Fresh Fruits</h3>
                    <p>Get Upto 25% Off</p>
                    <Link to="#" className="btn btn-dark">
                      Shop Now
                    </Link>
                  </div>
                  <img
                    src={assortment}
                    alt="assortment"
                    className="img-fluid rounded-3"
                  />
                </div>
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="card mb-4 bg-light border-0">
                  <div className="card-body p-4">
                    <h1 className="mb-0">All products</h1>
                  </div>
                </div>

                <div className="d-md-flex justify-content-between align-items-center mb-3">
                  <p className="mb-3 mb-md-0">
                    <span className="text-dark">{filteredProducts.length}</span>{" "}
                    Products found
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <Link to="/ShopListCol" className="text-muted">
                      <i className="bi bi-list-ul" />
                    </Link>
                    <Link to="/ShopGridCol3" className="text-dark">
                      <i className="bi bi-grid" />
                    </Link>
                    <Link to="/Shop" className="text-muted">
                      <i className="bi bi-grid-3x3-gap" />
                    </Link>
                    <select className="form-select w-auto">
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50" defaultValue>
                        Show: 50
                      </option>
                    </select>
                    <select
                      className="form-select w-auto"
                      value={sortOption}
                      onChange={handleSortChange}
                    >
                      <option value="featured">Sort by: Featured</option>
                      <option value="low">Price: Low to High</option>
                      <option value="high">Price: High to Low</option>
                      <option value="rating">Avg. Rating</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  {currentCards.length === 0 ? (
                    <p>No products match your filters.</p>
                  ) : (
                    currentCards.map((product) => (
                      <div
                        key={product.id}
                        className="col-md-4 mb-4 fade-in-up"
                      >
                        <div
                          className="card h-100"
                          style={{ cursor: "pointer" }}
                          onClick={() => setSelectedProduct(product)}
                        >
                          {product.image && (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="card-img-top p-3"
                              style={{ objectFit: "none" }}
                            />
                          )}
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                              <h5 className="card-title">{product.name}</h5>
                              <p className="card-text text-success fw-bold mb-1">
                                ₹{product.price}{" "}
                                <span className="text-muted text-decoration-line-through fw-normal fs-6">
                                  ₹{product.oldPrice}
                                </span>
                              </p>
                              <div className="mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <i
                                    key={i}
                                    className={`bi ${
                                      i < Math.floor(product.rating)
                                        ? "bi-star-fill"
                                        : "bi-star"
                                    } text-warning`}
                                  />
                                ))}{" "}
                                <small className="text-muted">
                                  ({product.reviews} reviews)
                                </small>
                              </div>
                              <p className="small text-muted">
                                {product.description}
                              </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <small className="text-muted">
                                Category: {product.category}
                              </small>
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  Swal.fire(
                                    "Added to cart",
                                    product.name,
                                    "success"
                                  );
                                }}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <nav className="mt-4">
                  <ul className="pagination justify-content-center">
                    <li
                      className={`page-item ${currentPage === 1 && "disabled"}`}
                    >
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
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => paginate(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage === totalPages && "disabled"
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(currentPage + 1)}
                      >
                        <i className="fa fa-chevron-right" />
                      </button>
                    </li>
                  </ul>
                </nav>

                {selectedProduct && (
                  <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  >
                    <div
                      className="modal-dialog modal-lg modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content p-3">
                        <div className="modal-header border-bottom-0">
                          <h5 className="modal-title fw-bold">
                            {selectedProduct.name}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={() => setSelectedProduct(null)}
                          ></button>
                        </div>
                        <div className="modal-body row">
                          <div className="col-md-5 text-center border-end">
                            {selectedProduct.image ? (
                              <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="img-fluid"
                                style={{
                                  maxHeight: "300px",
                                  objectFit: "contain",
                                }}
                              />
                            ) : (
                              <p className="text-muted">No image available</p>
                            )}
                            <div className="mt-3">
                              <button
                                className="btn btn-warning me-2 w-100 mb-2"
                                onClick={() =>
                                  Swal.fire(
                                    "Added to cart",
                                    selectedProduct.name,
                                    "success"
                                  )
                                }
                              >
                                Add to Cart
                              </button>
                              <button
                                className="btn btn-danger w-100"
                                onClick={() =>
                                  Swal.fire(
                                    "Redirecting to payment...",
                                    "",
                                    "info"
                                  )
                                }
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                          <div className="col-md-7 ps-md-4">
                            <div className="mb-2">
                              <strong>Price:</strong>{" "}
                              <span className="fs-4 fw-bold text-success">
                                ₹{selectedProduct.price}
                              </span>{" "}
                              <span className="text-muted text-decoration-line-through">
                                ₹{selectedProduct.oldPrice}
                              </span>
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
                              ({selectedProduct.rating}) from{" "}
                              {selectedProduct.reviews} reviews
                            </div>
                            <div className="mb-2">
                              <strong>Category:</strong>{" "}
                              {selectedProduct.category}
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
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// const dropdownData = [
//   {
//     title: "Dairy, Bread & Eggs",
//     items: [
//       "Milk",
//       "Milk Drinks",
//       "Curd & Yogurt",
//       "Eggs",
//       "Bread",
//       "Buns & Bakery",
//       "Butter & More",
//       "Cheese",
//       "Paneer & Tofu",
//       "Cream & Whitener",
//       "Condensed Milk",
//       "Vegan Drinks",
//     ],
//   },
//   {
//     title: "Snacks & Munchies",
//     items: [
//       "Chips & Crisps",
//       "Nachos",
//       "Popcorn",
//       "Bhujia & Mixtures",
//       "Namkeen Snacks",
//       "Healthy Snacks",
//       "Cakes & Rolls",
//       "Energy Bars",
//       "Papad & Fryums",
//       "Rusks & Wafers",
//     ],
//   },
//   {
//     title: "Fruits & Vegetables",
//     items: [
//       "Fresh Vegetables",
//       "Herbs & Seasonings",
//       "Fresh Fruits",
//       "Organic Fruits & Vegetables",
//       "Cuts & Sprouts",
//       "Exotic Fruits & Veggies",
//       "Flower Bouquets, Bunches",
//     ],
//   },
//   {
//     title: "Cold Drinks & Juices",
//     items: [
//       "Soft Drinks",
//       "Fruit Juices",
//       "Coldpress",
//       "Energy Drinks",
//       "Water & Ice Cubes",
//       "Soda & Mixers",
//       "Concentrates & Syrups",
//       "Detox & Energy Drinks",
//       "Juice Collection",
//     ],
//   },
// ];

export default Dropdown;
