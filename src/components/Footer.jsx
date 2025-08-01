import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import groceryshop from "../../src/assets/fresh-cart-logo.png";
import amazonpay from "../../src/assets/pagesimage/home/amazonpay.svg";
import american from "../../src/assets/pagesimage/home/american-express.svg";
import mastercard from "../../src/assets/pagesimage/home/mastercard.svg";
import paypal from "../../src/assets/pagesimage/home/paypal.svg";
import visa from "../../src/assets/pagesimage/home/visa.svg";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <>
        <footer className="footer mt-8">
          <div className="overlay" />
          <div className="container">
            <div className="row footer-row">
              <div className="col-sm-6 col-lg-3 mb-30">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="/">
                      <img
                        src={groceryshop}
                        style={{ width: 250, padding: 20,  }}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <p className="mb-30">
                    We deliver more than your expectations and help you to grow
                    your business exponentially by providing customized
                    applications. So, don’t just think, get ready to convert
                    your ideas into reality.
                  </p>
                </div>
                <div className="dimc-protect">
                  <div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
                    <h4>Payment Partners</h4>
                    <ul className="list-inline d-flex mb-0">
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={amazonpay} alt="footerfreshcart" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={american} alt="footerfreshcart" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={mastercard} alt="footerfreshcart" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={paypal} alt="footerfreshcart" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={visa} alt="footerfreshcart" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-30">
                <div className="footer-widget mb-0">
                  <h4>All Category</h4>
                  <div className="line-footer" />
                  <div className="row">
                    <div className="col">
                      <ul className="footer-link mb-0">
                        <li>
                          <Link to="/bakery">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Bakery
                          </Link>
                        </li>
                        <li>
                          <Link to="/snacks">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Snacks &amp; Munchies
                          </Link>
                        </li>
                        <li>
                          <Link to="/vegetables">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Fruits &amp; Vegetables
                          </Link>
                        </li>
                        <li>
                          <Link to="/berverages">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Cold Drinks &amp; Juices
                          </Link>
                        </li>
                        <li>
                          <Link to="/instantsfood">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Breakfast &amp; Instant Food
                          </Link>
                        </li>
                        <li>
                          <Link to="/bakery">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Bakery &amp; Biscuits
                          </Link>
                        </li>
                        <li>
                          <Link to="/meatandeggs">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Chicken, Meat &amp; Fish
                          </Link>
                        </li>
                        {/* <li>
                              <Link to=" ">
                                  <span><i className="fa fa-angle-right"></i></span> Privacy Policy
                              </Link>
                          </li>
                          <li>
                              <Link to="">
                                  <span><i className="fa fa-angle-right"></i></span> Faqs
                              </Link>
                          </li>
                          <li>
                              <Link to="">
                                  <span><i className="fa fa-angle-right"></i></span> Career
                              </Link>
                          </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-30">
                <div className="footer-widget mb-0">
                  <h4>For Consumers</h4>
                  <div className="line-footer" />
                  <div className="row">
                    <div className="col">
                      <ul className="footer-link mb-0">
                        <li>
                          <Link to="/Careers">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link to="/Coupons">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Promos &amp; coupons
                          </Link>
                        </li>
                        <li>
                          <Link to="/MyAccountOrder">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>
                            Shipping
                          </Link>
                        </li>
                        <li>
                          <Link to="/MyAccountOrder">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Product Returns
                          </Link>
                        </li>
                        <li>
                          <Link to="/MyAcconutPaymentMethod">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Payments
                          </Link>
                        </li>
                        <li>
                          <Link to="/Faq">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-30">
                <div className="footer-widget mb-0">
                  <h4>Get to know us</h4>
                  <div className="line-footer" />
                  <div className="row">
                    <div className="col">
                      <ul className="footer-link mb-0">
                        <li>
                          <Link to="/AboutUs">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Company
                          </Link>
                        </li>
                        <li>
                          <Link to="/AboutUs">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            About
                          </Link>
                        </li>
                        <li>
                          <Link to="/Blog">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/helpcenter">
                            <span>
                              <i className="fa fa-angle-right" />{" "}
                            </span>{" "}
                            Help Center
                          </Link>
                        </li>
                        <li>
                          <Link to="/Blog">
                            <span>
                              <i className="fa fa-angle-right" />
                            </span>{" "}
                            Our Value
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-widget mt-8">
                  <div className="newsletter-item">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="form-control form-control-lg"
                      required
                    />
                    <button type="submit">
                      <i className="fa fa-paper-plane" />
                    </button>
                  </div>
                  <ul
                    className="social-media"
                    style={{ display: "flex", gap: 10 }}
                  >
                    <li>
                      <Link to="#" className="facebook ">
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter">
                        <i className="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="instagram ">
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="linkedin">
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bar ">
            <div className="container text-center">
              <div className="footer-copy">
                <div className="copyright">
                  © {year} All Rights Reserved By _
                  
                  <Link
                    to="https://nigammishra.github.io/FrontendAce/"
                    target="_blank"
                  >
                     @nigammishra
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;
