import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";
import QuickViewModal from "../Model/QuickViewModal";
import { useCart } from "../../context/CartContext"; // adjust path if needed
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

// Images
import vegetableproduct1 from "../../assets/products/vegetables/cabbage.webp";
import vegetableproduct2 from "../../assets/products/vegetables/capsicum-green.webp";
import vegetableproduct3 from "../../assets/products/vegetables/carrot-orange.webp";
import vegetableproduct4 from "../../assets/products/vegetables/ladies-finger.webp";
import vegetableproduct5 from "../../assets/products/vegetables/onion-organically-grown.webp";
import vegetableproduct6 from "../../assets/products/vegetables/potato.webp";
import vegetableproduct7 from "../../assets/products/vegetables/tomato-local.webp";
import { Link } from "react-router-dom";

const vegetableData = [
  {
    id: 1,
    title: "Green Cabbage",
    category: "Vegetables",
    image: vegetableproduct1,
    description: "Fresh and leafy, ideal for soups and stir-fries.",
    price: 30,
    oldPrice: 50,
    isHot: true,
    rating: 4.2,
    reviews: 22,
  },
  {
    id: 2,
    title: "Capsicum Green",
    category: "Vegetables",
    image: vegetableproduct2,
    description: "Crisp and fresh green capsicums packed with flavor.",
    price: 35,
    oldPrice: 60,
    isHot: true,
    rating: 4.0,
    reviews: 15,
  },
  {
    id: 3,
    title: "Carrot Orange",
    category: "Vegetables",
    image: vegetableproduct3,
    description: "Naturally sweet, crunchy and rich in Vitamin A.",
    price: 25,
    oldPrice: 45,
    isHot: false,
    rating: 3.8,
    reviews: 12,
  },
  {
    id: 4,
    title: "Ladies Finger",
    category: "Vegetables",
    image: vegetableproduct4,
    description: "Fresh okra for making delicious bhindi masala.",
    price: 40,
    oldPrice: 60,
    isHot: false,
    rating: 4.3,
    reviews: 17,
  },
  {
    id: 5,
    title: "Organic Onion",
    category: "Vegetables",
    image: vegetableproduct5,
    description: "Organically grown onions for all your curries.",
    price: 28,
    oldPrice: 50,
    isHot: false,
    rating: 4.6,
    reviews: 25,
  },
  {
    id: 6,
    title: "Fresh Potato",
    category: "Vegetables",
    image: vegetableproduct6,
    description: "Farm-fresh potatoes rich in starch and nutrients.",
    price: 22,
    oldPrice: 35,
    isHot: true,
    rating: 4.7,
    reviews: 33,
  },
  {
    id: 7,
    title: "Tomato Local",
    category: "Vegetables",
    image: vegetableproduct7,
    description: "Juicy local tomatoes perfect for salads & curry.",
    price: 30,
    oldPrice: 55,
    isHot: false,
    rating: 4.4,
    reviews: 19,
  },
];

const ITEMS_PER_PAGE = 6;

const Vegetables = () => {
  const { addToCart } = useCart();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [loaderStatus, setLoaderStatus] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500); // 1.5s loader
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const sortedProducts = [...vegetableData].sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className="container vegetable-container py-5">
      {loaderStatus ? (
        <div className="loader-container text-center py-5">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="Loading..."
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="card mb-4 bg-light border-0">
            <div className="card-body p-4">
              <h1 className="mb-0">All vegetables</h1>
            </div>
          </div>

          {/* Sort and Count */}
          <div className="d-md-flex justify-content-between align-items-center mb-3">
            <p className="mb-3 mb-md-0">
              <span className="text-dark">{sortedProducts.length}</span>{" "}
              Products found
            </p>
            <div className="d-flex align-items-center gap-2">
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

          {/* Product Grid */}
          <div className="row">
            {paginatedProducts.map((product) => (
              <div
                className="col-12 col-sm-6 col-md-4 mb-4"
                key={product.id}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="vegetable-product-card">
                  {product.isHot && <div className="vegetable-badge">Hot</div>}
                  <div className="vegetable-product-tumb">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="vegetable-product-details">
                    <span className="vegetable-product-catagory">
                      {product.category}
                    </span>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <div className="vegetable-product-bottom-details">
                      <div className="vegetable-product-price">
                        <small>₹{product.oldPrice}</small>₹{product.price}
                      </div>
                      <div className="vegetable-product-links">
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <FaHeart />
                        </Link>
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                             addToCart(product);
                            Swal.fire({
                              icon: "success",
                              title: "Added to Cart",
                              text: `${product.title} has been added to your cart.`,
                              showConfirmButton: false,
                              timer: 1500,
                            });
                          }}
                        >
                          <FaShoppingCart />
                        </Link>
                      </div>
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
                  onClick={() => handlePageChange(currentPage - 1)}
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
                    onClick={() => handlePageChange(i + 1)}
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
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <i className="fa fa-chevron-right" />
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Vegetables;
