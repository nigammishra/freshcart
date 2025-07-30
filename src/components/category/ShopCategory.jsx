import React from 'react'
import { Link } from 'react-router-dom'
import attaricedal from "../../assets/pagesimage/home/atta-rice-dal.png";
import petcare from "../../assets/pagesimage/home/pet-care.png";
import cleaningessentials from "../../assets/pagesimage/home/cleaning-essentials.png";
import babycare from "../../assets/pagesimage/home/baby-care.png";
import chickenmeatfish from "../../assets/pagesimage/home/chicken-meat-fish.png";
import colddrinksjuices from "../../assets/pagesimage/home/cold-drinks-juices.png";
import teacoffeedrinks from "../../assets/pagesimage/home/tea-coffee-drinks.png";
import instantfood from "../../assets/pagesimage/home/instant-food.png";
import bakerybiscuits from "../../assets/pagesimage/home/bakery-biscuits.png";
import snackmunchies from "../../assets/pagesimage/home/snack-munchies.png";
import fruitsvegetables from "../../assets/pagesimage/home/fruits-vegetables.png";
import dairybreadeggs from "../../assets/pagesimage/home/dairy-bread-eggs.png";
import { Zoom } from 'react-awesome-reveal';

const ShopCategory = () => {
  return (
    <div>
        <>
              {/* section category */}
              <section className="my-lg-14 my-8">
                <div className="container ">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-6">
                        {/* heading    */}
                        <div className="section-head text-center mt-8">
                          <h3
                            className="h3style"
                            data-title="Shop Popular Categories"
                          >
                            Shop Popular Categories
                          </h3>
                          <div className="wt-separator bg-primarys"></div>
                          <div className="wt-separator2 bg-primarys"></div>
                          {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/bakery">
                              <img
                                src={dairybreadeggs}
                                alt="dairy-bread-eggs"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="/bakery" className="text-inherit">
                                  Bakery & Milk
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/vegetables">
                              <img
                                src={fruitsvegetables}
                                alt="fruits-vegetables"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            <div className="mt-4">
                              {/* text */}
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="/vegetables" className="text-inherit">
                                Vegetables
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/snacks">
                              <img
                                src={snackmunchies}
                                alt="snack-munchies"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="/snacks" className="text-inherit">
                                  Snack &amp; Munchies
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                          
                            <Link to="/snacks">
                              <img
                                src={bakerybiscuits}
                                alt="bakery-biscuits"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                               
                                <Link to="/snacks" className="text-inherit">
                                  Bakery &amp; Biscuits
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/instantsfood">
                              <img
                                src={instantfood}
                                alt="instant-food"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="/instantsfood" className="text-inherit">
                                  Instant Food
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/berverages">
                              <img
                                src={teacoffeedrinks}
                                alt="tea-coffee-drinks"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="/berverages" className="text-inherit">
                                  Tea, Coffee &amp; Drinks
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/berverages">
                              <img
                                src={colddrinksjuices}
                                alt="cold-drinks-juices"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="/berverages" className="text-inherit">
                                  Cold Drinks &amp; Juices
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/meatandeggs">
                              <img
                                src={chickenmeatfish}
                                alt="chicken-meat-fish"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="/meatandeggs" className="text-inherit">
                                  Chicken, Meat &amp; Fish
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        {/* text */}
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/babyCare">
                              <img
                                src={babycare}
                                alt="baby-care"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="/babyCare" className="text-inherit">
                                  Baby Care
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/household">
                              <img
                                src={cleaningessentials}
                                alt="cleaning-essentials"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* img */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="/household" className="text-inherit">
                                  Cleaning Essentials
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/petCare">
                              <img
                                src={petcare}
                                alt="pet-care"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="/petCare" className="text-inherit">
                                  Pet Care
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="/riceandoilandmasala">
                              <img
                                src={attaricedal}
                                alt="atta-rice-dal"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="/riceandoilandmasala" className="text-inherit">
                                  Atta, Rice &amp; Dal
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* section */}
            </>
    </div>
  )
}

export default ShopCategory