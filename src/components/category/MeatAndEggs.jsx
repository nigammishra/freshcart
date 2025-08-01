import React, { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";
import QuickViewModal from "../Model/QuickViewModal";
import { useCart } from "../../context/CartContext";

// Image imports
import nonvegproduct2 from "../../assets/products/meatsandfishandeggs/catla-fish.webp";
import nonvegproduct3 from "../../assets/products/meatsandfishandeggs/chicken.webp";
import nonvegproduct4 from "../../assets/products/meatsandfishandeggs/eggs.webp";
import nonvegproduct5 from "../../assets/products/meatsandfishandeggs/indian-prawn.webp";
import nonvegproduct6 from "../../assets/products/meatsandfishandeggs/peri-peri-chicken-cubes-juicy-fresh.webp";
import nonvegproduct7 from "../../assets/products/meatsandfishandeggs/rohi-fish.webp";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const meatData = [
  {
    id: 1,
    title: "Catla Fish",
    category: "Meat & Fish",
    image: nonvegproduct2,
    description: "Freshwater Catla fish, perfect for curry.",
    price: 250,
    oldPrice: 320,
    isHot: true,
    rating: 4.5,
    reviews: 23,
  },
  {
    id: 2,
    title: "Fresh Chicken",
    category: "Meat & Fish",
    image: nonvegproduct3,
    description: "Juicy and tender chicken for all your recipes.",
    price: 200,
    oldPrice: 260,
    isHot: false,
    rating: 4.3,
    reviews: 30,
  },
  {
    id: 3,
    title: "Farm Eggs (12pcs)",
    category: "Eggs",
    image: nonvegproduct4,
    description: "12 fresh eggs packed with protein and nutrients.",
    price: 85,
    oldPrice: 120,
    isHot: true,
    rating: 4.6,
    reviews: 41,
  },
  {
    id: 4,
    title: "Indian Prawns",
    category: "Meat & Fish",
    image: nonvegproduct5,
    description: "Fresh and flavorful Indian prawns, ready to cook.",
    price: 450,
    oldPrice: 520,
    isHot: false,
    rating: 4.4,
    reviews: 28,
  },
  {
    id: 5,
    title: "Peri Peri Chicken Cubes",
    category: "Meat & Fish",
    image: nonvegproduct6,
    description: "Marinated spicy peri peri chicken cubes, juicy and tasty.",
    price: 300,
    oldPrice: 370,
    isHot: false,
    rating: 4.2,
    reviews: 18,
  },
  {
    id: 6,
    title: "Rohu Fish",
    category: "Meat & Fish",
    image: nonvegproduct7,
    description: "Bengali-style Rohu fish, rich in protein and omega-3.",
    price: 240,
    oldPrice: 310,
    isHot: true,
    rating: 4.5,
    reviews: 26,
  },
];

const MeatsFishEggs = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => setLoaderStatus(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const sortedProducts = [...meatData].sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const paginate = (pageNum) => setCurrentPage(pageNum);

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
              <h1 className="mb-0">Meat, Fish & Eggs</h1>
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

          {/* Product Grid */}
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
                        <a href="#" onClick={(e) => e.stopPropagation()}>
                          <FaHeart />
                        </a>
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

          {/* Quick View Modal */}
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

export default MeatsFishEggs;
