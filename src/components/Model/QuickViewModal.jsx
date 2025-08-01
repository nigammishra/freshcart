import React from "react";
import Swal from "sweetalert2";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import "./QuickViewModal.css"; // Create this for additional styles

const QuickViewModal = ({ product, onClose }) => {
  // const handleAddClick = () => {
  //   Swal.fire({
  //     icon: "success",
  //     title: "Added to Cart",
  //     text: "Product has been added to your cart!",
  //     showConfirmButton: true,
  //     timer: 2500,
  //   });
  // };

  const handleBuyNow = () => {
    Swal.fire("Redirecting to payment gateway...", "", "info");
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={"full" + i} color="#ffc107" />);
    if (halfStar) stars.push(<FaStarHalfAlt key="half" color="#ffc107" />);
    for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={"empty" + i} color="#ffc107" />);
    return stars;
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content p-3">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title fw-bold">{product.title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body row">
            <div className="col-md-5 text-center border-end">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
              <div className="mt-3">
                {/* <button className="btn  me-2 w-100 mb-2"style={{backgroundColor:"blue", color:"#fff", }} onClick={handleAddClick}>
                  Add to Cart
                </button> */}
                <button className="btn  w-100" style={{backgroundColor:"Green",color:"#fff" }} onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-md-7 ps-md-4">
              <div className="mb-2">
                <strong>Special Price:</strong>{" "}
                <span className="fs-4 fw-bold text-success">₹{product.price}</span>{" "}
                {product.oldPrice && (
                  <span className="text-muted text-decoration-line-through ms-2">
                    ₹{product.oldPrice}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <strong>Category:</strong> {product.category}
              </div>
              <div className="mb-2">
                <strong>Rating:</strong> <span className="me-2">{renderStars(product.rating)}</span>
                ({product.reviews} reviews)
              </div>
              <div className="mb-2 text-success">
                <strong>Offers:</strong> 10% Instant Discount on XYZ Bank Cards
              </div>
              <div className="mb-2">
                <strong>Delivery:</strong> Delivery by Tomorrow | <span className="text-success">Free</span>
              </div>
              <div className="mt-3">
                <strong>Description:</strong>
                <p className="small text-muted">
                  {product.description?.length > 0
                    ? product.description
                    : "High-quality product from trusted sellers. Grab this deal before it's gone!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
