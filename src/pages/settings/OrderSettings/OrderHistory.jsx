import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import productimg1 from "../../../assets/products/vegetables/capsicum-green.webp";
import productimg2 from "../../../assets/products/vegetables/carrot-orange.webp";
import productimg3 from "../../../assets/products/vegetables/ladies-finger.webp";
import productimg4 from "../../../assets/products/snacks/5-star-choco.jpg";
import productimg5 from "../../../assets/products/snacks/Nutichoice-biscuit.jpg";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../../../components/Animations/ScrollToTop";

const ORDERS_DATA = [
  {
    id: "#14899",
    productImg: productimg1,
    name: "Fresh Green Capsicum",
    details: "500g",
    date: "March 5, 2023",
    items: 1,
    status: "Processing",
    statusClass: "bg-warning",
    amount: "$15.00",
  },
  {
    id: "#14658",
    productImg: productimg2,
    name: "Organic Orange Carrot",
    details: "1kg",
    date: "July 9, 2023",
    items: 2,
    status: "Completed",
    statusClass: "bg-success",
    amount: "$45.00",
  },
  {
    id: "#13778",
    productImg: productimg3,
    name: "Fresh Ladies Finger (Okra)",
    details: "500g",
    date: "Oct 03, 2023",
    items: 4,
    status: "Completed",
    statusClass: "bg-success",
    amount: "$99.00",
  },
  {
    id: "#13746",
    productImg: productimg4,
    name: "Cadbury 5 Star Chocolate Bar",
    details: "100g",
    date: "March 5, 2023",
    items: 1,
    status: "Completed",
    statusClass: "bg-success",
    amount: "$12.00",
  },
  {
    id: "#13566",
    productImg: productimg5,
    name: "Britannia NutriChoice Biscuits",
    details: "2 Packs",
    date: "July 9, 2023",
    items: 2,
    status: "Cancel",
    statusClass: "bg-danger",
    amount: "$6.00",
  },
];

const MyAccountOrder = () => {
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [orders, setOrders] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setOrders(ORDERS_DATA);
      setLoaderStatus(false);
    }, 1500);
  }, []);

  const handleToggle = () => {
    if (visibleCount >= orders.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  return (
    <div>
      <ScrollToTop />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12 border-end d-none d-md-block">
              <div className="pt-10 pe-lg-10">
                <ul className="nav flex-column nav-pills nav-pills-dark">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/MyAccountOrder">
                      <i className="fas fa-shopping-bag me-2" /> Your Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/MyAccountSetting">
                      <i className="fas fa-cog me-2" /> Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/MyAccountAddress">
                      <i className="fas fa-map-marker-alt me-2" /> Address
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/MyAcconutPaymentMethod">
                      <i className="fas fa-credit-card me-2" /> Payment Method
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/MyAcconutNotification">
                      <i className="fas fa-bell me-2" /> Notification
                    </Link>
                  </li>
                  <li className="nav-item">
                    <hr />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Grocery-react/">
                      <i className="fas fa-sign-out-alt me-2" /> Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
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
                  <div className="p-6 p-lg-10">
                    <h2 className="mb-6">Your Orders</h2>
                    <div className="table-responsive border-0">
                      <table className="table mb-0 text-nowrap">
                        <thead className="table-light">
                          <tr>
                            <th className="border-0">&nbsp;</th>
                            <th className="border-0">Product</th>
                            <th className="border-0">Order</th>
                            <th className="border-0">Date</th>
                            <th className="border-0">Items</th>
                            <th className="border-0">Status</th>
                            <th className="border-0">Amount</th>
                            <th className="border-0" />
                          </tr>
                        </thead>
                        <tbody>
                          {orders.slice(0, visibleCount).map((order) => (
                            <tr key={order.id}>
                              <td className="align-middle border-top-0 w-0">
                                {order.productImg && (
                                  <Link to="#">
                                    <img
                                      src={order.productImg}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                )}
                              </td>
                              <td className="align-middle border-top-0">
                                <Link to="#" className="fw-semi-bold text-inherit">
                                  <h6 className="mb-0">{order.name}</h6>
                                </Link>
                                <span>
                                  <small className="text-muted">{order.details}</small>
                                </span>
                              </td>
                              <td className="align-middle border-top-0">
                                <Link to="#" className="text-inherit">
                                  {order.id}
                                </Link>
                              </td>
                              <td className="align-middle border-top-0">{order.date}</td>
                              <td className="align-middle border-top-0">{order.items}</td>
                              <td className="align-middle border-top-0">
                                <span className={`badge ${order.statusClass}`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="align-middle border-top-0">{order.amount}</td>
                              <td className="text-muted align-middle border-top-0">
                                <Link to="#" className="text-inherit">
                                  <i className="feather-icon icon-eye" />
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {orders.length > 3 && (
                        <div className="text-center mt-4 mb-4">
                          <button className="custom-btn btn-12" onClick={handleToggle}>
                            <span>{visibleCount >= orders.length ? "Show Less" : "Show More"}</span>
                            <span>{visibleCount >= orders.length ? "Show Less" : "Show More"}</span>
                          </button>
                        </div>
                      )}
                      {orders.length === 0 && (
                        <div className="text-center my-3 text-muted">
                          No orders found.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAccountOrder;
