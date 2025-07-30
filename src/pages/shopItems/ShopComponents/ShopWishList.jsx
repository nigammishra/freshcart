import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import productimage15 from '../../../assets/products/fruits/apple.webp';
import productimage16 from '../../../assets/products/fruits/product-img-16.jpg';
import productimage17 from '../../../assets/products/fruits/product-img-17.jpg';
import productimage18 from '../../../assets/products/fruits/banana.webp';
import productimage19 from '../../../assets/products/fruits/product-img-19.jpg';
import { MagnifyingGlass } from 'react-loader-spinner';
import ScrollToTop from "../../../components/Animations/ScrollToTop";

const ShopWishList = () => {
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [showAll, setShowAll] = useState(false); // new state

  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  const wishlistItems = [
    {
      image: productimage18,
      name: "Organic Banana",
      unit: "$.98 / lb",
      price: "$35.00",
      status: "In Stock",
    },
    {
      image: productimage17,
      name: "Fresh Kiwi",
      unit: "4 no",
      price: "$20.97",
      status: "Out of Stock",
    },
    {
      image: productimage16,
      name: "Golden Pineapple",
      unit: "2 no",
      price: "$35.00",
      status: "In Stock",
    },
    {
      image: productimage19,
      name: "BeatRoot",
      unit: "1 kg",
      price: "$29.00",
      status: "In Stock",
    },
    {
      image: productimage15,
      name: "Fresh Apple",
      unit: "2 kg",
      price: "$70.00",
      status: "In Stock",
    },
    {
      image: productimage19,
      name: "BeatRoot",
      unit: "1 kg",
      price: "$29.00",
      status: "In Stock",
    },
    {
      image: productimage15,
      name: "Fresh Apple",
      unit: "2 kg",
      price: "$70.00",
      status: "In Stock",
    },
    // Add more items here if needed
  ];

  const itemsToShow = showAll ? wishlistItems : wishlistItems.slice(0, 5);

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="magnifying-glass-loading"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <section className="my-14">
            <div className="container">
              <div className="row">
                <div className="offset-lg-1 col-lg-10">
                  <div className="mb-8">
                    <h1 className="mb-1">My Wishlist</h1>
                    <p>There are {wishlistItems.length} products in this wishlist.</p>
                  </div>
                  <div className="table-responsive">
                    <table className="table text-nowrap">
                      <thead className="table-light">
                        <tr>
                          <th>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </th>
                          <th />
                          <th>Product</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemsToShow.map((item, index) => (
                          <tr key={index}>
                            <td className="align-middle">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                              </div>
                            </td>
                            <td className="align-middle">
                              <Link to="#">
                                <img
                                  src={item.image}
                                  className="img-fluid icon-shape icon-xxl"
                                  alt={item.name}
                                />
                              </Link>
                            </td>
                            <td className="align-middle">
                              <div>
                                <h5 className="fs-6 mb-0">
                                  <Link to="#" className="text-inherit">
                                    {item.name}
                                  </Link>
                                </h5>
                                <small>{item.unit}</small>
                              </div>
                            </td>
                            <td className="align-middle">{item.price}</td>
                            <td className="align-middle">
                              <span
                                className={`badge ${
                                  item.status === "In Stock" ? "bg-success" : "bg-danger"
                                }`}
                              >
                                {item.status}
                              </span>
                            </td>
                            <td className="align-middle">
                              <div
                                className={`btn btn-${
                                  item.status === "In Stock" ? "primary" : "dark"
                                } btn-sm`}
                              >
                                {item.status === "In Stock" ? "Add to Cart" : "Contact us"}
                              </div>
                            </td>
                            <td className="align-middle text-center">
                              <Link to="#" className="text-muted" title="Delete">
                                <i className="fas fa-trash-alt"></i>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Show More / Show Less Button */}
                  {wishlistItems.length > 5 && (
                    <div className="text-center mt-3">
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => setShowAll(!showAll)}
                      >
                        {showAll ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ShopWishList;
