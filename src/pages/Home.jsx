import slider1 from "../assets/pagesimage/home/slide-1.jpg";
import abouticon from "../assets/pagesimage/home/about-icons-1.svg";
import slider2 from "../assets/pagesimage/home/slider-2.jpg";
import slider3 from '../assets/pagesimage/home/bannerimage1.png'
import adbanner1 from "../assets/pagesimage/home/ad-banner-1.jpg";
import adbanner2 from "../assets/pagesimage/home/ad-banner-2.jpg";
import adbanner3 from "../assets/pagesimage/home/ad-banner-3.jpg";
import grocerybanner from "../assets/pagesimage/home/grocery-banner.png";
import grocerybanner2 from "../assets/pagesimage/home/grocery-banner-2.jpg";
import map from "../assets/pagesimage/home/map.png";
import iphone from "../assets/pagesimage/home/iphone-2.png";
import googleplay from "../assets/pagesimage/home/googleplay-btn.svg";
import appstore from "../assets/pagesimage/home/appstore-btn.svg";
import bannerdeal from "../assets/pagesimage/home/banner-deal1.jpg";
// import product11 from "../assets/pagesimage/home/product-img-11.jpg";
// import product12 from "../assets/pagesimage/home/product-img-12.jpg";
// import product13 from "../assets/pagesimage/home/product-img-13.jpg";

import clock from "../assets/pagesimage/home/clock.svg";
import gift from "../assets/pagesimage/home/gift.svg";
import package1 from "../assets/pagesimage/home/package.svg";
import refresh from "../assets/pagesimage/home/refresh-cw.svg";
// import product1 from "../images/category-baby-care.jpg";
// import product2 from "../images/category-atta-rice-dal.jpg";
// import product3 from "../images/category-bakery-biscuits.jpg";
// import product4 from "../images/category-chicken-meat-fish.jpg";
// import product5 from "../images/category-cleaning-essentials.jpg";
// import product6 from "../images/category-dairy-bread-eggs.jpg";
// import product7 from "../images/category-instant-food.jpg";
// import product8 from "../images/category-pet-care.jpg";
// import product9 from "../images/category-snack-munchies.jpg";
// import product10 from "../images/category-tea-coffee-drinks.jpg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import ProductItem from "../ProductList/ProductItem";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Slide, Zoom } from "react-awesome-reveal";
// import { useEffect } from "react";
// import { PulseLoader } from 'react-spinners';
import { MagnifyingGlass } from "react-loader-spinner";
import FAQ from "../components/FooterElements/Faq";
import ShopCategory from "../components/category/ShopCategory";
import ProductItem from "../components/Products.jsx";
import ProductShow from "../components/Animations/ProductShow.jsx";
// import ProductShow from "../Component/ProductShow";

import QuickViewModal from "../components/Model/QuickViewModal.jsx";

import product1 from "../assets/pagesimage/home/category-snack-munchies.jpg";
import product2 from "../assets/pagesimage/home/category-bakery-biscuits.jpg";
import product3 from "../assets/pagesimage/home/category-instant-food.jpg";
const Home = () => {




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
];

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);


  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // const settings2 = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 2,
  //   initialSlide: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1600,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  

  return (
    <div>
      <div>
        {loaderStatus ? (
          <div className="loader-container">
            {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperclassName="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#0aad0a"
            />
          </div>
        ) : (
          <>
            <>
              <div className="scroll-to-top">
                <button
                  onClick={scrollToTop}
                  className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
                >
                  ↑
                </button>
              </div>
              <section className="hero-section">
                <div className="container mt-8">
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                    data-bs-interval="3000" // ← this enables auto-slide
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div
                          style={{
                            background: `url(${slider1}) no-repeat`,
                            backgroundSize: "cover",
                            borderRadius: ".5rem",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center" style={{zIndex:"999",marginLeft:"70px"}}>
                            <span className="badge text-bg-warning">
                              Opening Sale Discount 50%
                            </span>
                            <h2 className="text-dark display-5 fw-bold mt-4">
                              SuperMarket Daily <br /> Fresh Grocery
                            </h2>
                            <p className="lead">
                              Introduced a new model for online grocery shopping
                              and convenient home delivery.
                            </p>
                            <Link to="/shop" className="btn btn-dark mt-3" >
                              Shop Now{" "}
                              <i className="feather-icon icon-arrow-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div
                          style={{
                            background: `url(${slider2}) no-repeat`,
                            backgroundSize: "cover",
                            borderRadius: ".5rem",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center" style={{zIndex:"999",marginLeft:"70px"}}>
                            <span className="badge text-bg-warning">
                              Free Shipping - orders over $100
                            </span>
                            <h2 className="text-dark display-5 fw-bold mt-4">
                              Free Shipping on <br /> orders over{" "}
                              <span className="text-primary">$100</span>
                            </h2>
                            <p className="lead">
                              Free Shipping to First-Time Customers Only, After
                              promotions and discounts are applied.
                            </p>
                            <Link to="/shop" className="btn btn-dark mt-3">
                              Shop Now{" "}
                              <i className="feather-icon icon-arrow-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div
                          style={{
                            background: `url(${slider3}) no-repeat`,
                            backgroundSize: "cover",
                            borderRadius: ".5rem",
                            backgroundPosition: "center",
                            
                         
                          }}
                        >
                          <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center" style={{zIndex:"999",marginLeft:"70px"}}>
                            <span className="badge text-bg-warning">
                              Free Shipping - orders over $100
                            </span>
                            <h2 className="text-dark display-5 fw-bold mt-4">
                              Free Shipping on <br /> orders over{" "}
                              <span className="text-primary">$100</span>
                            </h2>
                            <p className="lead" style={{color:"#fff"}}>
                              Free Shipping to First-Time Customers Only, After
                              promotions and discounts are applied.
                            </p>
                            <Link to="/shop" className="btn btn-dark mt-7">
                              Shop Now{" "}
                              <i className="feather-icon icon-arrow-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="carousel-control-prev"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </Link>
                    <Link
                      className="carousel-control-next"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </Link>
                  </div>
                </div>
              </section>
            </>
            <>
              <section className="mt-8">
                {/* contianer */}
                <div className="container ">
                  <div className="row">
                    {/* col */}
                    <Slide direction="down">
                      <div className="col-12">
                        {/* cta */}
                        <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 rounded-3 text-center text-lg-start">
                          {/* img */}
                          <div className="d-lg-flex align-items-center">
                            <img
                              src={abouticon}
                              alt="about-icon"
                              className="img-fluid"
                            />
                            {/* text */}
                            <div className="ms-lg-4">
                              <h1 className="fs-2 mb-1">
                                Welcome to FreshCart
                              </h1>
                              <span>
                                Download the app get free food &amp;{" "}
                                <span className="text-primary">$30</span> off on
                                your first order.
                              </span>
                            </div>
                          </div>
                          <div className="mt-3 mt-lg-0">
                            {/* btn */}
                            <Link to="#" className="btn btn-dark">
                              Download FreshCart App
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </div>
              </section>
            </>
            <>
              {/* section */}
              <section className="mt-8">
                <div className="container">
                  {/* row */}
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 fade-in-left">
                      <Slide direction="left">
                        <div className=" banner mb-3">
                          {/* Banner Content */}
                          <div className="position-relative">
                            {/* Banner Image */}
                            <img
                              src={adbanner1}
                              alt="ad-banner"
                              className="img-fluid rounded-3 w-100"
                            />
                            <div className="banner-text">
                              <h3 className="mb-0 fw-bold">
                                10% cashback on <br />
                                personal care{" "}
                              </h3>
                              <div className="mt-4 mb-5 fs-5">
                                <p className="mb-0">Max cashback: $12</p>
                                <span>
                                  Code:{" "}
                                  <span className="fw-bold text-dark">
                                    CARE12
                                  </span>
                                </span>
                              </div>
                              <Link to="/Shop" className="btn btn-dark">
                                Shop Now
                              </Link>
                            </div>
                            {/* Banner Content */}
                          </div>
                        </div>
                      </Slide>
                    </div>

                    <div className="col-lg-4 col-md-6  col-12 slide-in-top">
                      <Zoom>
                        <div className="banner mb-3 ">
                          {/* Banner Content */}
                          <div className="position-relative">
                            {/* Banner Image */}
                            <img
                              src={adbanner2}
                              alt="ad-banner-2"
                              className="img-fluid rounded-3 w-100"
                            />
                            <div className="banner-text">
                              {/* Banner Content */}
                              <h3 className=" fw-bold mb-2">
                                Say yes to <br />
                                season’s fresh{" "}
                              </h3>
                              <p className="fs-5">
                                Refresh your day <br />
                                the fruity way
                              </p>
                              <Link to="/Shop" className="btn btn-dark mt-2">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-lg-4 col-12 fade-in-left ">
                      <Slide direction="right">
                        <div className="banner mb-3">
                          <div className="banner-img">
                            {/* Banner Image */}
                            <img
                              src={adbanner3}
                              alt="ad-banner-3"
                              className="img-fluid rounded-3 w-100"
                            />
                            {/* Banner Content */}
                            <div className="banner-text">
                              <h3 className="fs-2 fw-bold lh-1 mb-2">
                                When in doubt,
                                <br />
                                eat ice cream{" "}
                              </h3>
                              <p className="fs-5">
                                Enjoy a scoop of
                                <br />
                                summer today
                              </p>
                              <Link to="/Shop" className="btn btn-dark">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              </section>
              {/* section */}
            </>
            <>
            <ShopCategory/>
            </>
            <>
              <section>
                <div className="container ">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-3 mb-lg-0  fade-in-left">
                      <Slide direction="left">
                        <div>
                          <div
                            className="py-10 px-8 rounded-3"
                            style={{
                              background: `url(${grocerybanner}) no-repeat`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div>
                              <h3 className="fw-bold mb-1">
                                Fruits &amp; Vegetables
                              </h3>
                              <p className="mb-4">
                                Get Upto <span className="fw-bold">30%</span>{" "}
                                Off
                              </p>
                              <Link to="/vegetables" className="btn btn-dark">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                    <div className="col-12 col-lg-6 fade-in-left ">
                      <Slide direction="right">
                        <div>
                          <div
                            className="py-10 px-8 rounded-3"
                            style={{
                              background: `url(${grocerybanner2}) no-repeat`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div>
                              <h3 className="fw-bold mb-1">
                                Freshly Baked Buns
                              </h3>
                              <p className="mb-4">
                                Get Upto <span className="fw-bold">25%</span>{" "}
                                Off
                              </p>
                              <Link to="/bakery" className="btn btn-dark">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <>
              <ProductItem/>
            </>
            <>
              {/* cta section */}
              <section>
                <div
                  className="container"
                  style={{
                    background: `url(${map})no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  {/* <hr className="my-lg-14 my-8"> */}
                  {/* row */}
                  <div className="row align-items-center text-center justify-content-center">
                    <div className=" col-lg-6 col-md-6 fade-in-left">
                      <Slide direction="left">
                        <div className="mb-6">
                          <div className="mb-7">
                            {/* heading */}
                            <h1>Get the FreshCart app</h1>
                            <h5 className="mb-0">
                              We will send you a link, open it on your phone to
                              download the app.
                            </h5>
                          </div>
                          <div className="mb-5">
                            {/* form check */}
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Email
                              </label>
                            </div>
                            {/* form check */}
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                              >
                                Phone
                              </label>
                            </div>
                            {/* form */}
                            {/* <form className="row g-3 mt-2">

          
          <div className="col-6 ">
            
            <input type="text" className="form-control" placeholder="Phone">
          </div>
           
          <div className="col-6">
            <button type="submit" className="btn btn-primary mb-3">Share app link</button>
          </div>
        </form> */}
                          </div>
                          <div>
                            {/* app */}
                            {/* <small>Download app from</small> */}
                            <ul className="list-inline mb-0 mt-2 ">
                              {/* list item */}
                              <li className="list-inline-item">
                                {/* img */}
                                <Link to="#!">
                                  {" "}
                                  <img
                                    src={appstore}
                                    alt="appstore"
                                    style={{ width: 140 }}
                                  />
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                {/* img */}
                                <Link to="#!">
                                  {" "}
                                  <img
                                    src={googleplay}
                                    alt="googleplay"
                                    style={{ width: 140 }}
                                  />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Slide>
                    </div>
                    <div className=" offset-lg-2 col-lg-4 col-md-6 fade-zoom">
                      <Slide direction="right">
                        <div className="text-lg-start">
                          {/* img */}
                          <img
                            src={iphone}
                            alt="iphone"
                            className=" img-fluid"
                          />
                        </div>
                      </Slide>
                    </div>
                  </div>
                  {/* <hr className="my-lg-14 my-8"> */}
                </div>
              </section>
            </>
            <>
             <section className="my-lg-14 my-8">
      <div className="container">
         <div className="row">
                    <div className="col-md-12 mb-6">
                      <div className="section-head text-center mt-8">
                        <h3 className="h3style" data-title="Daily Best Sells">
                          Daily Best Sells
                        </h3>
                        <div className="wt-separator bg-primarys"></div>
                        <div className="wt-separator2 bg-primarys"></div>
                        {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-md-3 fade-in-left">
                      <div
                        className=" pt-8 px-8 rounded-3"
                        style={{
                          background: `url(${bannerdeal})no-repeat`,
                          backgroundSize: "cover",
                          height: 300,
                        }}
                      >
                        <div>
                          <h3 className="fw-bold text-white">
                            100% Organic Coffee Beans.
                          </h3>
                          <p className="text-white">
                            Get the best deal before close.
                          </p>
                          <Link to="/" className="btn btn-primary">
                            Shop Now{" "}
                            <i className="feather-icon icon-arrow-right ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    

        <div className="mt-5 col-md-9">
          <Slider {...settings1}>
            {products.map((product) => (
              <div className="px-2" key={product.id}>
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="mb-3 img-fluid"
                      />
                      <div className="card-product-action">
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
          </Slider>
        </div>
        </div>

        {showModal && selectedProduct && (
          <QuickViewModal
            product={selectedProduct}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </section>
            </>

            <>
              <div className="mt-5">
               <ProductShow/>
              </div>
            </>

            <>
              <section className="my-lg-14 my-8">
                <div className="container" style={{ marginTop: 50 }}>
                  <div
                    className="row justify-content-center  g-4"
                    style={{ textAlign: "center" }}
                  >
                    <div className="col-md-3 col-sm-6 fade-zoom ">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={refresh} alt="refresh" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">Easy Returns</h3>
                              <p>
                                Not satisfied with a product? Return it at the
                                doorstep &amp; get a refund within hours. No
                                questions asked
                                <Link to="#!">policy</Link>.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={package1} alt="package" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">Wide Assortment</h3>
                              <p>
                                Choose from 5000+ products across food, personal
                                care, household, bakery, veg and non-veg &amp;
                                other categories.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={gift} alt="gift" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">
                                Best Prices &amp; Offers
                              </h3>
                              <p>
                                Cheaper prices than your local supermarket,
                                great cashback offers to top it off. Get best
                                pricess &amp; offers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={clock} alt="clock" />
                              </div>
                            </div>
                            <div className="icon-content">
                              {/* <h4 className="wt-tilte">Reports</h4> */}
                              <h3 className="h5 mb-3">10 minute grocery now</h3>
                              <p>
                                Get your order delivered to your doorstep at the
                                earliest from FreshCart pickup
                                <span> stores near you.</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <>
              <FAQ />
            </>
            <>
              {/* <div className="container">
                <Slider {...settings2}>
                  {/* <div className="images swiper-slide p-4">
    <div className="item">
      <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product6} alt="Grocery Ecommerce Template" className="mb-3 style={{paddingLeft:'40px'}} " />
            <div>Dairy, Bread &amp; Eggs</div>
          </div>
        </div>
     </Link>
    </div>
  </div>
  <div className="images swiper-slide p-4">
    <div className="item"> 
    <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product9} alt="Grocery Ecommerce Template" className="mb-3"style={{paddingLeft:'40px'}} />
            <div>Snack &amp; Munchies</div>
          </div>
        </div>
     </Link></div>
  </div>
  <div className="images swiper-slide p-4">
    <div className="item">
       <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product3} alt="Grocery Ecommerce Template" className="mb-3"style={{paddingLeft:'40px'}} />
            <div>Bakery &amp; Biscuits</div>
          </div>
        </div>
     </Link></div>
  </div>
  <div className="images swiper-slide p-4">
    <div className="item"> 
    <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product7} alt="Grocery Ecommerce Template " className="mb-3 " style={{paddingLeft:'40px'}} />
            <div>Instant Food</div>
          </div>
        </div>
     </Link></div>
  </div>
  <div className="images swiper-slide p-4">
    <div className="item"> 
    <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product10} alt="Grocery Ecommerce Template" className="mb-3"style={{paddingLeft:'40px'}} />
            <div>Tea, Coffee &amp; Drinks</div>
          </div>
        </div>
     </Link></div>
  </div>
  <div className="images swiper-slide p-4">
    <div className="item">
      <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product2} alt="Grocery Ecommerce Template" className="mb-3" style={{paddingLeft:'40px'}}/>
            <div>Atta, Rice &amp; Dal</div>
          </div>
        </div>
     </Link></div>
  </div>
  <div className="images swiper-slide p-4">
    <div className="item">
       <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product1} alt="Grocery Ecommerce Template" className="mb-3" style={{paddingLeft:'40px'}}/>
            <div>Baby Care</div>
          </div>
        </div>
     </Link></div>
  </div>
  <div className="images swiper-slide p-4">
    <div className="item"> 
    <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product4} alt="Grocery Ecommerce Template" className="mb-3" style={{paddingLeft:'40px'}}/>
            <div>Chicken, Meat &amp; Fish</div>
          </div>
        </div>
     </Link></div>
  </div>
  <div className="images swiper-slide p-4">
    <div className="item"> 
    <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product5} alt="Grocery Ecommerce Template" className="mb-3" style={{paddingLeft:'40px'}}/>
            <div>Cleaning Essentials</div>
          </div>
        </div>
     </Link></div>
  </div>
  <div className="images swiper-slide p-4">
    <div className="item">
      <Link to="#" className="text-decoration-none text-inherit">
        <div className="card card-product mb-4">
          <div className="card-body text-center py-8">
            <img src={product8} alt="Grocery Ecommerce Template" className="mb-3" style={{paddingLeft:'40px'}}/>
            <div>Pet Care</div>
          </div>
        </div>
     </Link>
    </div>
  // </div> 



                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product1}
                        style={{ objectFit: "cover" }}
                        className="img-fluid "
                        alt="product"
                      />
                      <h6 className="card-title partner">
                      <div>Baby Care</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product2}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                        alt="product"
                      />
                       <h6 className="card-title">
                       <div>Atta, Rice &amp; Dal</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product3}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                        alt="product"
                      />
                       <h6 className="card-title">
                       <div>Bakery &amp; Biscuits</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product4}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                        alt="product"
                      />
                       <h6 className="card-title">
                       <div>Chicken, Meat &amp; Fish</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product5}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                        alt="product"
                      />
                       <h6 className="card-title">
                       <div>Cleaning Essentials</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product6}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                        alt="product"
                      />
                       <h6 className="card-title">
                       <div>Dairy, Bread &amp; Eggs</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product7}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                        alt="product"
                      />
                       <h6 className="card-title">
                       <div>Instant Food</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product8}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                        alt="product"
                      />
                       <h6 className="card-title">
                      <div>Pet Care</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product9}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                        alt="product"
                      />
                       <h6 className="card-title">
                       <div>Snack &amp; Munchies</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={product10}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                        alt="product"
                      />
                       <h6 className="card-title">
                       <div>Tea, Coffee &amp; Drinks</div>
                      </h6>
                    </div>
                  </div>
                </Slider>
              </div> */}
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
