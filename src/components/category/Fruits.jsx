import React, { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";
import QuickViewModal from "../Model/QuickViewModal";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

// Image imports
import fruitproduct1 from "../../assets/products/fruits/apple.webp";
import fruitproduct2 from "../../assets/products/fruits/banana.webp";
import fruitproduct3 from "../../assets/products/fruits/mango.webp";
import fruitproduct4 from "../../assets/products/fruits/mangosteen.webp";
import fruitproduct5 from "../../assets/products/fruits/papaya-small.webp";

const fruitData = [
  {
    id: 1,
    title: "Fresh Apple",
    category: "Fruits",
    image: fruitproduct1,
    description: "Crisp and juicy apples rich in fiber.",
    price: 100,
    oldPrice: 140,
    isHot: true,
    rating: 4.6,
    reviews: 32,
  },
  {
    id: 2,
    title: "Organic Banana",
    category: "Fruits",
    image: fruitproduct2,
    description: "Naturally ripened organic bananas.",
    price: 45,
    oldPrice: 70,
    isHot: false,
    rating: 4.3,
    reviews: 18,
  },
  {
    id: 3,
    title: "Sweet Mango",
    category: "Fruits",
    image: fruitproduct3,
    description: "Sweet and delicious mangoes from farms.",
    price: 120,
    oldPrice: 160,
    isHot: true,
    rating: 4.8,
    reviews: 44,
  },
  {
    id: 4,
    title: "Fresh Mangosteen",
    category: "Fruits",
    image: fruitproduct4,
    description: "Exotic mangosteen rich in antioxidants.",
    price: 160,
    oldPrice: 200,
    isHot: false,
    rating: 4.5,
    reviews: 21,
  },
  {
    id: 5,
    title: "Small Papaya",
    category: "Fruits",
    image: fruitproduct5,
    description: "Papayas full of digestive enzymes and nutrients.",
    price: 60,
    oldPrice: 90,
    isHot: false,
    rating: 4.1,
    reviews: 15,
  },
];

const Fruits = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [loaderStatus, setLoaderStatus] = useState(true);

  const itemsPerPage = 6;

  useEffect(() => {
    setTimeout(() => setLoaderStatus(false), 1200);
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const sortedProducts = [...fruitData].sort((a, b) => {
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
        <div className="loader-container d-flex justify-content-center align-items-center">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="Loading"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="card mb-4 bg-light border-0">
            <div className="card-body p-4">
              <h1 className="mb-0">Fresh Fruits</h1>
            </div>
          </div>

          {/* Sort */}
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
                  <button className="page-link" onClick={() => paginate(i + 1)}>
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

export default Fruits;
