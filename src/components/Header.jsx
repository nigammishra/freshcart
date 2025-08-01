import React, { useState } from "react";
import Grocerylogo from "../assets/fresh-cart-logo.png";
// import menubanner from "../images/menu-banner.jpg";
// import productimage1 from "../assets/products/snacks/5-star-choco.jpg";
// import productimage2 from "../assets/products/snacks/Nutichoice-biscuit.jpg";
// import productimage3 from "../assets/products/snacks/lays.jpg";
// import productimage4 from "../assets/products/snacks/popcorn.jpg";
// import productimage5 from "../assets/products/snacks/snacks-alubhuji.jpg";
import {
  FaSignInAlt,
  FaUserPlus,
  FaKey,
  FaBoxOpen,
  FaCogs,
  FaMapMarkedAlt,
  FaCreditCard,
  FaBell,
} from "react-icons/fa";
import {
  FaCarrot,
  FaAppleAlt,
  FaCheese,
  FaCookieBite,
  FaWineBottle,
  FaBaby,
  FaPumpSoap,
  FaHome,
  FaDrumstickBite,
  FaEarlybirds,
} from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const calculateSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
 // Total item count (quantity-wise)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <>
        <div className="border-bottom pb-5">
          <div className="bg-light py-1">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-10 col-12 d-flex "
                  style={{ alignItems: "center" }}
                >
                  <span> Super Value Deals - Save more with coupons</span>
                </div>
                <div
                  className="col-md-2 col-xxl-1 text-end d-none d-lg-block"
                  style={{ marginLeft: "20px" }}
                >
                  <div className="list-inline">
                    <div className="list-inline-item">
                      <Link
                        to="/ShopWishList"
                        className="text-muted position-relative"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-heart"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          5
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div className="list-inline-item">
                      <Link
                        to="#!"
                        className="text-muted"
                        data-bs-toggle="modal"
                        data-bs-target="#userModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </Link>
                    </div>
                     <div className="list-inline-item">
      <Link
        className="text-muted position-relative"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        to="#"
        role="button"
        aria-controls="offcanvasRight"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shopping-bag"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1={3} y1={6} x2={21} y2={6} />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>

        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            {totalItems}
            <span className="visually-hidden">cart items</span>
          </span>
        )}
      </Link>
    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="container  displaydesign">
          <div className="row g-4">
            <div className="col-8 col-sm-4 col-lg-9 py-2 ">
              <input
                className="form-control "
                style={{ width: "100%" }}
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search..."
              />
            </div>
            <div
              className="col-4 col-sm-4 col-lg-3 py-2 d-flex"
              style={{ justifyContent: "center" }}
            >
              {/* Button trigger modal */}
              {/* <button
            type="button"
            className="btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="/ShoplocationModal"
          >
            <i className="feather-icon icon-map-pin me-2" />
            Location
          </button> */}
              <div className="list-inline">
                <div className="list-inline-item">
                  <Link
                    to="/ShopWishList"
                    className="text-muted position-relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    to="#!"
                    className="text-muted"
                    data-bs-toggle="modal"
                    data-bs-target="#userModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    className="text-muted position-relative "
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    to="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasRight"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      1<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/freshcart">
            <img
              src={Grocerylogo}
              style={{ width: 150, marginBottom: 10, marginLeft: "-15px" }}
              alt="eCommerce HTML Template"
            />
          </Link>
          <input
            className="form-control responsivesearch "
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            fdprocessedid="9icrif"
            style={{ width: "35%" }}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div
              className={`containerr ${isOpen ? "change" : ""}`}
              onClick={handleClick}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>

          <div className="collapse navbar-collapse" id="mobile_nav">
            <ul className="navbar-nav m4-auto mt-2 ml-4 mt-lg-0 float-md-right"></ul>
            <ul
              className="navbar-nav navbar-light"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/freshcart">
                  Home
                </Link>
              </li>
              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link class="dropdown-item" to="/Blog">
                    Daliy Blog
                  </Link>
                  {/* <Link className="dropdown-item" to="pages/blog-single.html">
                    Blog Single
                  </Link> */}
                  {/* <Link className="dropdown-item" to="/BlogCategory">
                Blog Category
              </Link> */}
                  <Link className="dropdown-item" to="/AboutUs">
                    About us
                  </Link>
                  {/* <Link className="dropdown-item" to="pages/404error.html">
                    404 Error
                  </Link> */}
                  <Link className="dropdown-item" to="/Contact">
                    Contact
                  </Link>
                </div>
              </li>
              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="me-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-grid"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </span>{" "}
                  All Category
                </Link>
                <div
                  className="dropdown-menu sm-menu megamenu fade-in p-4"
                  aria-labelledby="navbarDropdown"
                >
                  <h6 className="dropdown-header mb-3 text-primary">
                    Popular Categories
                  </h6>
                  <div className="row">
                    <div className="col-6">
                      <Link className="dropdown-item" to="/vegetables">
                        <FaCarrot className="icon" /> Vegetables
                      </Link>
                      <Link className="dropdown-item" to="/fruits">
                        <FaAppleAlt className="icon" /> Fruits
                      </Link>
                      <Link className="dropdown-item" to="/dairy">
                        <FaCheese className="icon" /> Dairy
                      </Link>
                      <Link className="dropdown-item" to="/snacks">
                        <FaCookieBite className="icon" /> Snacks
                      </Link>
                      {/* <Link className="dropdown-item" to="/berverages">
            <FaWineBottle className="icon" /> Beverages
          </Link> */}
                    </div>
                    <div className="col-6">
                      {/* <Link className="dropdown-item" to="/petCare">
            <FaPumpSoap className="icon" /> PetCare  
          </Link> */}
                      <Link className="dropdown-item" to="/bakery">
                        <GiCakeSlice className="icon" /> Bakery
                      </Link>
                      <Link className="dropdown-item" to="/household">
                        <FaHome className="icon" /> Household
                      </Link>
                      <Link
                        className="dropdown-item "
                        to="/meatandeggs"
                      >
                        <FaEarlybirds className="icon" />
                        Meat & Eggs
                      </Link>

                      <Link className="dropdown-item" to="/babyCare">
                        <FaBaby className="icon" /> Baby Care
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/Shop">
                    Shop
                  </Link>
                  <Link className="dropdown-item" to="/ShopWishList">
                    Shop Wishlist
                  </Link>
                  <Link className="dropdown-item" to="/ShopCart">
                    Shop Cart
                  </Link>
                  <Link className="dropdown-item" to="/ShopCheckOut">
                    Shop Checkout
                  </Link>
                </div>
              </li>

              {/* <li className="nav-item dmenu dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Stores
            </Link>
            <div
              className="dropdown-menu sm-menu"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item" to="/StoreList">
                Store List
              </Link>
              {/* <Link className="dropdown-item" to="pages/store-grid.html">
                    Store Grid
                  </Link> *
              <Link className="dropdown-item" to="/SingleShop">
                Single Store
              </Link>
            </div>
          </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/StoreList">
                  Stores Details
                </Link>
              </li>
              {/* <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link class="dropdown-item" to="pages/blog.html">
                    Blog
                  </Link>
                  <div>
                    <Link className="dropdown-item" to="pages/blog-single.html">
                      Blog Single
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="pages/blog-category.html"
                    >
                      Blog Category
                    </Link>
                    <Link className="dropdown-item" to="pages/about.html">
                      About us
                    </Link>
                    <Link className="dropdown-item" to="pages/404error.html">
                      404 Error
                    </Link>
                    <Link className="dropdown-item" to="pages/contact.html">
                      Contact
                    </Link>
                  </div>
                </div>
              </li> */}

              {/* <li className="nav-item dropdown megamenu-li dmenu">
            <Link
              className="nav-link dropdown-toggle"
              to="/Shop"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All Services
            </Link>
            <div
              className="dropdown-menu megamenu sm-menu border-top"
              aria-labelledby="dropdown01"
            >
              <div className="row">
                <div className="col-sm-6 col-lg-3 border-right mb-4">
                  <div>
                    <h6 className="text-primary ps-3">
                      Dairy, Bread &amp; Eggs
                    </h6>
                    <Link className="dropdown-item" to="/Shop">
                      Butter
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Milk Drinks
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Curd &amp; Yogurt
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Eggs
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Buns &amp; Bakery
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Cheese
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Condensed Milk
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Dairy Products
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 border-right mb-4">
                  <div>
                    <h6 className="text-primary ps-3">
                      Breakfast &amp; Instant Food
                    </h6>
                    <Link className="dropdown-item" to="/Shop">
                      Breakfast Cereal
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      {" "}
                      Noodles, Pasta &amp; Soup
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Frozen Veg Snacks
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      {" "}
                      Frozen Non-Veg Snacks
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      {" "}
                      Vermicelli
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      {" "}
                      Instant Mixes
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      {" "}
                      Batter
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      {" "}
                      Fruit and Juices
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div>
                    <h6 className="text-primary ps-3">
                      Cold Drinks &amp; Juices
                    </h6>
                    <Link className="dropdown-item" to="/Shop">
                      Soft Drinks
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Fruit Juices
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Coldpress
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Water &amp; Ice Cubes
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Soda &amp; Mixers
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Health Drinks
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Herbal Drinks
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Milk Drinks
                    </Link>
                  </div>
                </div>

               
                <div className="col-sm-6 col-lg-3 border-right mb-4">
                  <div className="card border-0">
                    <img
                      src={menubanner}
                      style={{ width: "90%" }}
                      alt="eCommerce HTML Template"
                      className="img-fluid rounded-3"
                    />
                    <div className="position-absolute ps-6 mt-8">
                      <h5 className=" mb-0 ">
                        Dont miss this <br />
                        offer today.
                      </h5>
                      <Link
                        to="/Shop"
                        className="btn btn-primary btn-sm mt-3"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </li> */}

              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <div
                  className="dropdown-menu sm-menu p-3"
                  aria-labelledby="navbarDropdown"
                >
                  {/* Order Settings */}
                  <h6 className="dropdown-header">Order Settings</h6>
                  <Link className="dropdown-item" to="/MyAccountOrder">
                    <FaBoxOpen className="me-2" /> Orders
                  </Link>
                  <Link className="dropdown-item" to="/MyAccountSetting">
                    <FaCogs className="me-2" /> Settings
                  </Link>
                  <Link className="dropdown-item" to="/MyAccountAddress">
                    <FaMapMarkedAlt className="me-2" /> Address
                  </Link>
                  <Link className="dropdown-item" to="/MyAcconutPaymentMethod">
                    <FaCreditCard className="me-2" /> Payment Method
                  </Link>
                  <Link className="dropdown-item" to="/MyAcconutNotification">
                    <FaBell className="me-2" /> Notification
                  </Link>

                  <div className="dropdown-divider"></div>

                  {/* Account Settings */}
                  <h6 className="dropdown-header">Account Settings</h6>
                  <Link className="dropdown-item" to="/MyAccountSignIn">
                    <FaSignInAlt className="me-2" /> Sign in
                  </Link>
                  <Link className="dropdown-item" to="/MyAccountSignIn">
                    <FaUserPlus className="me-2" /> Signup
                  </Link>
                  <Link className="dropdown-item" to="/MyAccountForgetPassword">
                    <FaKey className="me-2" /> Forgot Password
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/MyAccountSignIn">
                  <button class="custom-btn btn-12">
                    <span>Sign Up</span>
                    <span>Sign In</span>
                  </button>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="">
                  Contact us
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block">
            
          </div> */}
        </div>
      </nav>
      <>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="userModal"
            tabIndex={-1}
            aria-labelledby="userModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4">
                <div className="modal-header border-0">
                  <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                    Sign Up
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email address"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        required
                      />
                      <small className="form-text">
                        By Signup, you agree to our{" "}
                        <Link to="#!">Terms of Service</Link> &amp;{" "}
                        <Link to="#!">Privacy Policy</Link>
                      </small>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </form>
                </div>
                <div
                  className="modal-footer border-0 justify-content-center"
                  data-bs-dismiss="modal"
                >
                  Already have an account?{" "}
                  <Link to="/MyAccountSignIn">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
         <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header border-bottom">
        <div className="text-start">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
            Shop Cart
          </h5>
          <small>Location in 382480</small>
        </div>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>

      <div className="offcanvas-body">
        <div className="alert alert-danger" role="alert">
          You’ve got FREE delivery. Start checkout now!
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center text-muted py-5">Your cart is empty.</div>
        ) : (
          <>
            <ul className="list-group list-group-flush py-3">
              {cartItems.map((item) => (
                <li
                  className="list-group-item py-3 px-0 border-bottom"
                  key={item.id}
                >
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img src={item.image} alt={item.title} className="img-fluid" />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">{item.title}</h6>
                      <small className="text-muted">Qty: {item.quantity}</small>
                      <div className="mt-2 small">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="btn btn-link p-0 text-danger"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2 me-1"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="col-3 text-center">
                      <span className="fw-bold">₹{item.price}</span>
                    </div>
                    <div className="col-2 text-end">
                      <span className="text-muted small">x{item.quantity}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="d-grid mt-4">
              <Link
                to="/ShopCheckOut"
                className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
              >
                Go to Checkout{" "}
                <span className="fw-bold">₹{calculateSubtotal()}</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="locationModal"
            tabIndex={-1}
            aria-labelledby="locationModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-sm modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body p-6">
                  <div className="d-flex justify-content-between align-items-start ">
                    <div>
                      <h5 className="mb-1" id="locationModalLabel">
                        Choose your Delivery Location
                      </h5>
                      <p className="mb-0 small">
                        Enter your address and we will specify the offer you
                        area.{" "}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="my-5">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search your area"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">Select Location</h6>
                    <Link
                      to="#"
                      className="btn btn-outline-gray-400 text-muted btn-sm"
                    >
                      Clear All
                    </Link>
                  </div>
                  <div>
                    <div data-simplebar style={{ height: 300 }}>
                      <div className="list-group list-group-flush">
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active"
                        >
                          <span>Alabama</span>
                          <span>Min:$20</span>
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                        >
                          <span>Alaska</span>
                          <span>Min:$30</span>
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                        >
                          <span>Arizona</span>
                          <span>Min:$50</span>
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                        >
                          <span>California</span>
                          <span>Min:$29</span>
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                        >
                          <span>Colorado</span>
                          <span>Min:$80</span>
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                        >
                          <span>Florida</span>
                          <span>Min:$90</span>
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                        >
                          <span>Arizona</span>
                          <span>Min:$50</span>
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                        >
                          <span>California</span>
                          <span>Min:$29</span>
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                        >
                          <span>Colorado</span>
                          <span>Min:$80</span>
                        </Link>
                        <Link
                          to="#"
                          className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                        >
                          <span>Florida</span>
                          <span>Min:$90</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Header;
