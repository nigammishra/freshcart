import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";
import QuickViewModal from "../Model/QuickViewModal";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

// Image imports
import bakeryproduct1 from "../../assets/products/bakery/bakery-delicious-double-chocochip-cake.webp";
import bakeryproduct2 from "../../assets/products/bakery/bakery-double-delight-chocolate-cashew-fruits-biscuits.webp";
import bakeryproduct3 from "../../assets/products/bakery/sunfeast-baked-creations-rich-chocochip-cookies.webp";
// import bakeryproduct4 from "../../assets/products/bakery/sunfeast-dark-fantasy-choco-fills.webp";

const bakeryData = [
  {
    id: 1,
    title: "Double Chocochip Cake",
    category: "Bakery",
    image: bakeryproduct1,
    description: "Delicious soft cake with rich double chocochips.",
    price: 120,
    oldPrice: 180,
    isHot: true,
    rating: 4.6,
    reviews: 28,
  },
  {
    id: 2,
    title: "Chocolate Cashew Biscuits",
    category: "Bakery",
    image: bakeryproduct2,
    description: "Double delight chocolate biscuits with cashew and fruit.",
    price: 90,
    oldPrice: 130,
    isHot: false,
    rating: 4.2,
    reviews: 19,
  },
  {
    id: 3,
    title: "Rich Chocochip Cookies",
    category: "Bakery",
    image: bakeryproduct3,
    description: "Sunfeast baked creations rich chocochip cookies.",
    price: 75,
    oldPrice: 110,
    isHot: false,
    rating: 4.4,
    reviews: 21,
  },
];

const Bakery = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const itemsPerPage = 3;

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

  const sortedProducts = [...bakeryData].sort((a, b) => {
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
          {/* Header */}
          <div className="card mb-4 bg-light border-0">
            <div className="card-body p-4">
              <h1 className="mb-0">Bakery Products</h1>
            </div>
          </div>

          {/* Sorting and Filter */}
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

export default Bakery;
