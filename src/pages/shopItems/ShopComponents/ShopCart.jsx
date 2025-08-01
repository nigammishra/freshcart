import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../components/Animations/ScrollToTop";

const ShopCart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [loaderStatus, setLoaderStatus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoaderStatus(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  };

  const subtotal = calculateSubtotal();
  const serviceFee = cartItems.length > 0 ? 30 : 0;
  const total = subtotal + serviceFee;

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card py-1 border-0 mb-8">
                    <h1 className="fw-bold">Shop Cart</h1>
                    <p className="mb-0">Shopping in 382480</p>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* CART ITEMS */}
                <div className="col-lg-8 col-md-7">
                  <div className="py-3">
                    {cartItems.length === 0 ? (
                      <div className="alert alert-warning">
                        Your cart is empty.
                      </div>
                    ) : (
                      <ul className="list-group list-group-flush">
                        {cartItems.map((item) => (
                          <li
                            key={item.id}
                            className="list-group-item py-3 py-lg-0 px-0 border-top"
                          >
                            <div className="row align-items-center">
                              <div className="col-3 col-md-2">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-4 col-md-6">
                                <h6 className="mb-0">{item.title}</h6>
                                <small className="text-muted">
                                  ₹{item.price} × {item.quantity || 1}
                                </small>
                                <div className="mt-2 small">
                                  <a
                                    href="#!"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      removeFromCart(item.id);
                                    }}
                                    className="text-decoration-none text-danger"
                                  >
                                    <i className="fa fa-trash me-1" />
                                    Remove
                                  </a>
                                </div>
                              </div>
                              <div className="col-2 text-lg-end text-md-end col-md-2">
                                <span className="fw-bold">
                                  ₹{item.price * (item.quantity || 1)}
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="d-flex justify-content-between mt-4">
                      <Link to="/Shop" className="btn btn-primary">
                        Continue Shopping
                      </Link>
                      <Link to="/Shop" className="btn btn-dark">
                        Update Cart
                      </Link>
                    </div>
                  </div>
                </div>

                {/* SUMMARY SIDEBAR */}
                <div className="col-12 col-lg-4 col-md-5">
                  <div className="card mb-5 mt-6">
                    <div className="card-body p-6">
                      <h2 className="h5 mb-4">Summary</h2>
                      <ul className="list-group list-group-flush mb-2">
                        <li className="list-group-item d-flex justify-content-between">
                          <div>Item Subtotal</div>
                          <span>₹{subtotal}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <div>Service Fee</div>
                          <span>₹{serviceFee}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <div className="fw-bold">Total</div>
                          <span className="fw-bold">₹{total}</span>
                        </li>
                      </ul>

                      {cartItems.length > 0 && (
                        <Link
                          to="/ShopCheckOut"
                          className="btn btn-primary btn-lg d-grid"
                        >
                          Go to Checkout{" "}
                          <span className="fw-bold ms-2">₹{total}</span>
                        </Link>
                      )}

                      <p className="mt-3">
                        <small>
                          By placing your order, you agree to Freshcart{" "}
                          <Link to="#">Terms of Service</Link> and{" "}
                          <Link to="#">Privacy Policy</Link>.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ShopCart;
