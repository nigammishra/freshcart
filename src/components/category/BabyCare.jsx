import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";
import QuickViewModal from "../Model/QuickViewModal";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// Image imports
import babycareproduct1 from "../../assets/products/babycare/baby-wipes-lemon-fragrance.webp";
import babycareproduct2 from "../../assets/products/babycare/pampers-premium-care-diapers-new-born.webp";
import babycareproduct3 from "../../assets/products/babycare/huggies-nature-care-diaper-pants-small-monthly-pack.webp";
import babycareproduct4 from "../../assets/products/babycare/premium-care-pants-baby-diapers.webp";


const babycareData = [
  {
    id: 1,
    title: "Lemon Fragrance Baby Wipes",
    category: "Baby Care",
    image: babycareproduct1,
    description: "Gentle wipes with a refreshing lemon fragrance.",
    price: 80,
    oldPrice: 120,
    isHot: true,
    rating: 4.5,
    reviews: 20,
  },
  {
    id: 2,
    title: "Pampers Premium Diapers",
    category: "Baby Care",
    image: babycareproduct2,
    description: "Soft diapers for newborns with premium protection.",
    price: 500,
    oldPrice: 650,
    isHot: true,
    rating: 4.7,
    reviews: 40,
  },
  {
    id: 3,
    title: "Huggies Nature Care Pants",
    category: "Baby Care",
    image: babycareproduct3,
    description: "Natural and gentle pants for baby's sensitive skin.",
    price: 450,
    oldPrice: 600,
    isHot: false,
    rating: 4.2,
    reviews: 30,
  },
  {
    id: 4,
    title: "Premium Pants Diapers",
    category: "Baby Care",
    image: babycareproduct4,
    description: "Leak-proof premium care pants for active babies.",
    price: 480,
    oldPrice: 700,
    isHot: false,
    rating: 4.4,
    reviews: 35,
  },
];

const BabyCare = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const sortedProducts = [...babycareData].sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container py-5">
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
          {/* Header Card */}
          <div className="card mb-4 bg-light border-0">
            <div className="card-body p-4">
              <h1 className="mb-0">Baby Care Products</h1>
            </div>
          </div>

          {/* Sort & Count */}
          <div className="d-md-flex justify-content-between align-items-center mb-3">
            <p className="mb-3 mb-md-0">
              <span className="text-dark">{sortedProducts.length}</span> Products found
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

          <div className="row">
            {currentProducts.map((product) => (
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
                    <span className="vegetable-product-catagory">{product.category}</span>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <div className="vegetable-product-bottom-details">
                      <div className="vegetable-product-price">
                        <small>₹{product.oldPrice}</small>₹{product.price}
                      </div>
                      <div className="vegetable-product-links">
                        <Link to="#" onClick={(e) => e.stopPropagation()}>
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
                <button className="page-link" onClick={() => paginate(currentPage - 1)}>
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
                <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                  <i className="fa fa-chevron-right" />
                </button>
              </li>
            </ul>
          </nav>

          {/* Modal */}
          {selectedProduct && (
            <QuickViewModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BabyCare;
