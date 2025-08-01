import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";
import QuickViewModal from "../Model/QuickViewModal";
import { useCart } from "../../context/CartContext";

// Image imports
import snacksproduct1 from "../../assets/products/snacks/5-star-choco.jpg";
import snacksproduct2 from "../../assets/products/snacks/Nutichoice-biscuit.jpg";
import snacksproduct3 from "../../assets/products/snacks/bingo-potato-chips-cream-onion.webp";
import snacksproduct4 from "../../assets/products/snacks/haldirams-namkeen-khatta-meetha.webp";
import snacksproduct5 from "../../assets/products/snacks/haldirams-soya-sticks.webp";
import snacksproduct6 from "../../assets/products/snacks/lays-west-indies-hot-n-sweet-potato-chips-crispy-chips-snacks.webp";
import snacksproduct7 from "../../assets/products/snacks/lays.jpg";
import snacksproduct8 from "../../assets/products/snacks/popcorn.jpg";
import snacksproduct9 from "../../assets/products/snacks/snack-kerala-banana-chips-peri-peri-flavour-thin-crispy-zero-cholesterol.webp";
import snacksproduct10 from "../../assets/products/snacks/snacks-alubhuji.jpg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const snacksData = [
  {
    id: 1,
    title: "5 Star Chocolate",
    category: "Snacks",
    image: snacksproduct1,
    description: "Caramel-filled rich chocolate bar.",
    price: 20,
    oldPrice: 25,
    isHot: false,
    rating: 4.4,
    reviews: 30,
  },
  {
    id: 2,
    title: "NutriChoice Biscuit",
    category: "Snacks",
    image: snacksproduct2,
    description: "Healthy digestive biscuits by NutriChoice.",
    price: 35,
    oldPrice: 45,
    isHot: true,
    rating: 4.6,
    reviews: 21,
  },
  {
    id: 3,
    title: "Bingo Cream & Onion Chips",
    category: "Snacks",
    image: snacksproduct3,
    description: "Tangy cream & onion flavored crispy chips.",
    price: 20,
    oldPrice: 30,
    isHot: false,
    rating: 4.1,
    reviews: 18,
  },
  {
    id: 4,
    title: "Haldiram's Khatta Meetha",
    category: "Snacks",
    image: snacksproduct4,
    description: "Sweet & sour namkeen mix with crunchy bites.",
    price: 50,
    oldPrice: 65,
    isHot: false,
    rating: 4.5,
    reviews: 24,
  },
  {
    id: 5,
    title: "Haldiram's Soya Sticks",
    category: "Snacks",
    image: snacksproduct5,
    description: "Crispy soya sticks perfect for evening snack.",
    price: 45,
    oldPrice: 55,
    isHot: true,
    rating: 4.3,
    reviews: 15,
  },
  {
    id: 6,
    title: "Lays Hot & Sweet Chips",
    category: "Snacks",
    image: snacksproduct6,
    description: "Spicy and sweet chips with a crispy texture.",
    price: 20,
    oldPrice: 30,
    isHot: false,
    rating: 4.2,
    reviews: 22,
  },
  {
    id: 7,
    title: "Lays Classic",
    category: "Snacks",
    image: snacksproduct7,
    description: "Original salted potato chips by Lays.",
    price: 20,
    oldPrice: 25,
    isHot: false,
    rating: 4.0,
    reviews: 12,
  },
  {
    id: 8,
    title: "Movie Night Popcorn",
    category: "Snacks",
    image: snacksproduct8,
    description: "Microwave popcorn, buttery and crunchy.",
    price: 35,
    oldPrice: 45,
    isHot: true,
    rating: 4.6,
    reviews: 18,
  },
  {
    id: 9,
    title: "Banana Chips Peri Peri",
    category: "Snacks",
    image: snacksproduct9,
    description: "Peri peri flavored thin and crispy banana chips.",
    price: 40,
    oldPrice: 50,
    isHot: false,
    rating: 4.1,
    reviews: 20,
  },
  {
    id: 10,
    title: "Aloo Bhujia",
    category: "Snacks",
    image: snacksproduct10,
    description: "Crispy and spicy Aloo Bhujia sev.",
    price: 30,
    oldPrice: 40,
    isHot: false,
    rating: 4.3,
    reviews: 16,
  },
];

const Snacks = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const productsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => setLoaderStatus(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const sortedProducts = [...snacksData].sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0;
  });

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container py-5">
      {loaderStatus ? (
        <div className="loader-container d-flex justify-content-center align-products-center">
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
          <div className="card mb-4 bg-light border-0">
            <div className="card-body p-4">
              <h1 className="mb-0">All Snacks</h1>
            </div>
          </div>

          <div className="d-md-flex justify-content-between align-products-center mb-3">
            <p className="mb-3 mb-md-0">
              <span className="text-dark">{sortedProducts.length}</span> Products found
            </p>
            <div className="d-flex align-products-center gap-2">
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

          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-product ${currentPage === 1 && "disabled"}`}>
                <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                  <i className="fa fa-chevron-left" />
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`page-product ${currentPage === i + 1 ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li className={`page-product ${currentPage === totalPages && "disabled"}`}>
                <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                  <i className="fa fa-chevron-right" />
                </button>
              </li>
            </ul>
          </nav>

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

export default Snacks;
