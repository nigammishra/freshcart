import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bloglarge from "../../assets/pagesimage/blog/blog-large.jpg";
import blog1 from "../../assets/pagesimage/blog/blog-img-1.jpg";
import blog2 from "../../assets/pagesimage/blog/blog-img-2.jpg";
import blog3 from "../../assets/pagesimage/blog/blog-img-4.jpg";
import blog4 from "../../assets/pagesimage/blog/blog-img-5.jpg";
import blog5 from "../../assets/pagesimage/blog/blog-img-6.jpg";
import blog7 from "../../assets/pagesimage/blog/blog-img-7.jpg";
import blog8 from "../../assets/pagesimage/blog/blog-img-8.jpg";
import blog9 from "../../assets/pagesimage/blog/blog-img-9.jpg";
import { MagnifyingGlass } from "react-loader-spinner";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import ScrollToTop from "../../components/Animations/ScrollToTop";

const blogPosts = [
  {
    image: blog1,
    category: "Recipes",
    title: "Harissa Chickpeas with Whipped Feta",
    description:
      "In et eros dapibus, facilisis ipsum sit amet, tempor dolor. Donec sed nisi gravida, molestie dolor.",
    date: "22 April 2023",
    readTime: "12min",
  },
  {
    image: blog2,
    category: "Recipes",
    title: "Almond Butter Chocolate Chip Zucchini Bars",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet ligula in ultrices congue.",
    date: "20 April 2023",
    readTime: "8min",
  },
  {
    image: blog1,
    category: "Company",
    title: "Spicy Shrimp Tacos Garlic Cilantro Lime Slaw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet ligula in ultrices congue.",
    date: "18 April 2023",
    readTime: "5min",
  },
  {
    image: blog3,
    category: "Recipes",
    title: "Red Chile Chicken Tacos with Creamy Corn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet ligula in ultrices congue.",
    date: "16 April 2023",
    readTime: "9min",
  },
  {
    image: blog4,
    category: "Retailer",
    title: "Basic + Awesome Broccoli Cheese Soup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet ligula in ultrices congue.",
    date: "12 April 2023",
    readTime: "12min",
  },
  {
    image: blog5,
    category: "Recipes",
    title: "No-Boil Baked Penne with Meatballs",
    description:
      "Nulla consectetur sapien a libero imperdiet posuere. Donec sollicitudin turpis sit amet.",
    date: "14 April 2023",
    readTime: "6min",
  },
  {
    image: blog7,
    category: "Recipes",
    title: "Red Chile Chicken Tacos with Creamy Corn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet ligula in ultrices congue.",
    date: "16 April 2023",
    readTime: "9min",
  },
  {
    image: blog8,
    category: "Retailer",
    title: "Basic + Awesome Broccoli Cheese Soup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet ligula in ultrices congue.",
    date: "12 April 2023",
    readTime: "12min",
  },
  {
    image: blog9,
    category: "Recipes",
    title: "No-Boil Baked Penne with Meatballs",
    description:
      "Nulla consectetur sapien a libero imperdiet posuere. Donec sollicitudin turpis sit amet.",
    date: "14 April 2023",
    readTime: "6min",
  },
];

const BlogCategories = () => {
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => setLoaderStatus(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogPosts.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(blogPosts.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container d-flex justify-content-center align-items-center ">
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

          {/* section */}
          <section className="mt-8">
            <div className="container">
              <div className="row">
                {/* logo */}
                <div className="col-12">
                  <h1 className="fw-bold">FreshCart Blog</h1>
                </div>
              </div>
            </div>
          </section>

          {/* section */}
          <section className="mt-6 mb-lg-14 mb-8">
            {/* container */}
            <div className="container">
              <div className="row d-flex align-items-center mb-8">
                <div className="col-12 col-md-12 col-lg-8">
                  <Link to="#!">
                    {/* img */}
                    <Fade>
                      <div className="img-zoom">
                        <img
                          src={bloglarge}
                          alt="blog"
                          className="img-fluid rounded-3 w-100"
                        />
                      </div>
                    </Fade>
                  </Link>
                </div>

                {/* text */}
                <div className="col-12 col-md-12 col-lg-4">
                  <Slide direction="down">
                    <div className="ps-lg-8 mt-8 mt-lg-0">
                      <h2 className="mb-3">
                        <Link to="#!" className="text-inherit">
                          Garlic Cream Bucatini with Peas and Asparagus
                        </Link>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac erat ut neque
                        bibendum egestas sed quis justo. Integer non rhoncus diam. Nullam eget dapibus
                        lectus, vitae condimentum sem.
                      </p>
                      <div className="d-flex justify-content-between text-muted">
                        <span>
                          <small>25 April 2023</small>
                        </span>
                        <span>
                          <small>
                            Read time: <span className="text-dark fw-bold">6min</span>
                          </small>
                        </span>
                      </div>
                    </div>
                  </Slide>
                </div>
              </div>

              {/* Blog cards */}
              <div className="row">
                {currentCards.map((card, index) => (
                  <div className="col-12 col-md-6 col-lg-4 mb-8" key={index}>
                    <Zoom>
                      <div className="mb-4">
                        <Link to="#!">
                          <div className="img-zoom">
                            <img
                              src={card.image}
                              alt="blog"
                              className="img-fluid rounded-3 w-100"
                            />
                          </div>
                        </Link>
                      </div>
                    </Zoom>
                    <div className="mb-3">
                      <Link to="#!">{card.category}</Link>
                    </div>
                    <div>
                      <h2 className="h5">
                        <Link to="#!" className="text-inherit">
                          {card.title}
                        </Link>
                      </h2>
                      <p>{card.description}</p>
                      <div className="d-flex justify-content-between text-muted mt-4">
                        <span>
                          <small>{card.date}</small>
                        </span>
                        <span>
                          <small>
                            Read time:{" "}
                            <span className="text-dark fw-bold">{card.readTime}</span>
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-12">
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                          className="page-link mx-1 rounded-3"
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          <i className="fa fa-chevron-left" />
                        </button>
                      </li>

                      {[...Array(totalPages)].map((_, idx) => (
                        <li
                          key={idx}
                          className={`page-item ${currentPage === idx + 1 ? "active" : ""}`}
                        >
                          <button
                            className="page-link mx-1 rounded-3"
                            onClick={() => handlePageChange(idx + 1)}
                          >
                            {idx + 1}
                          </button>
                        </li>
                      ))}

                      <li
                        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                      >
                        <button
                          className="page-link mx-1 rounded-3"
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          <i className="fa fa-chevron-right" />
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default BlogCategories;
