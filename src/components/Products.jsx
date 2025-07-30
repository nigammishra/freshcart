import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";
import QuickViewModal from "./Model/QuickViewModal";

import product1 from "../assets/pagesimage/home/category-snack-munchies.jpg";
import product2 from "../assets/pagesimage/home/category-bakery-biscuits.jpg";
import product3 from "../assets/pagesimage/home/category-instant-food.jpg";
// Add more images if needed

const products = [
  {
    id: 1,
    title: "Haldiram's Sev Bhujia",
    image: product1,
    category: "Snack & Munchies",
    rating: 4.5,
    price: 18,
    oldPrice: 24,
    reviews: 149,
  },
  {
    id: 2,
    title: "NutriChoice Digestive",
    image: product2,
    category: "Bakery & Biscuits",
    rating: 4.5,
    price: 24,
    oldPrice: null,
    reviews: 25,
  },
  {
    id: 3,
    title: "Instant Food like maggi",
    image: product3,
    category: "Instant Food",
    rating: 5,
    price: 32,
    oldPrice: 35,
    reviews: 469,
  },
  {
    id: 4,
    title: "Cookies",
    image: product2,
    category: "Bakery",
    rating: 4.2,
    price: 20,
    oldPrice: 25,
    reviews: 88,
  },
  {
    id: 5,
    title: "Chips",
    image: product1,
    category: "Snack",
    rating: 4.0,
    price: 15,
    oldPrice: null,
    reviews: 110,
  },
  {
    id: 6,
    title: "Cookies",
    image: product2,
    category: "Bakery",
    rating: 4.2,
    price: 20,
    oldPrice: 25,
    reviews: 88,
  },
  {
    id: 7,
    title: "Chips",
    image: product1,
    category: "Snack",
    rating: 4.0,
    price: 15,
    oldPrice: null,
    reviews: 110,
  },
  // Add more if desired
];

const ProductItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // const handleAddClick = () => {
  //   Swal.fire({
  //     icon: "success",
  //     title: "Added to Cart",
  //     text: "Product has been added to your cart!",
  //     showConfirmButton: true,
  //     timer: 3000,
  //   });
  // };

  const visibleProducts = showAll ? products : products.slice(0, 5);

  useEffect(() => {
  if (showModal) {
    document.body.style.overflow = "hidden"; // Disable scroll
  } else {
    document.body.style.overflow = "auto"; // Re-enable scroll
  }

  return () => {
    // Cleanup on unmount
    document.body.style.overflow = "auto";
  };
}, [showModal]);

  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-6">
            <div className="section-head text-center mt-8">
              <h3 className="h3style" data-title="Popular Products">
                Popular Products
              </h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            {visibleProducts.map((product) => (
              <div className="col fade-zoom" key={product.id}>
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="mb-3 img-fluid"
                      />
                      <div className="card-product-action" >
                        <button
                          className="btn-action"
                          onClick={() => handleQuickView(product)}
                        >
                          <i className="bi bi-eye" title="Quick View" />
                        </button>
                        <button className="btn-action">
                          <i className="bi bi-heart" title="Wishlist" />
                        </button>
                        <button className="btn-action">
                          <i
                            className="bi bi-arrow-left-right"
                            title="Compare"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="text-small mb-1 text-muted">
                      <small>{product.category}</small>
                    </div>
                    <h2 className="fs-6">{product.title}</h2>
                    <div className="text-warning">
                      <small>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className={
                              product.rating > i
                                ? "bi bi-star-fill"
                                : "bi bi-star"
                            }
                          />
                        ))}
                      </small>{" "}
                      <span className="text-muted small">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">₹{product.price}</span>{" "}
                        {product.oldPrice && (
                          <span className="text-muted text-decoration-line-through">
                            ₹{product.oldPrice}
                          </span>
                        )}
                      </div>
                      <div>
                        <button
                          className="btn btn-primary btn-sm"
                          // onClick={handleAddClick}
                           onClick={() => handleQuickView(product)}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <div className="text-center mt-4">
            {products.length > 4 && (
              <button
                className="btn btn-outline-primary"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          {/* Quick View Modal */}
          {showModal && selectedProduct && (
            <QuickViewModal
              product={selectedProduct}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
