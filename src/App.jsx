// react 
import React from "react";
// css
import "./App.css";
// browserrouter 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import ProductShow from "./components/Animations/ProductShow.jsx";
import Header from "./components/Header.jsx";

// About pages

// Shop pages
import Shop from "./pages/shopItems/Shop.jsx";
import ShopGridCol3 from "./pages/shopItems/ShopComponents/ShopGridCol3.jsx";
import ShopListCol from "./pages/shopItems/ShopComponents/ShopListCol.jsx";
import ShopWishList from "./pages/shopItems/ShopComponents/ShopWishList.jsx";
import ShopCheckOut from "./pages/shopItems/ShopComponents/ShopCheckOut.jsx";
import ShopCart from "./pages/shopItems/ShopComponents/ShopCart.jsx";

// Store pages
import StoresDetails from "./pages/Stores/StoresDetails.jsx";
import SingleStore from "./pages/Stores/SingleStore.jsx";

// Account pages
import OrderHistory from "./pages/settings/OrderSettings/OrderHistory.jsx";
import Settings from "./pages/settings/OrderSettings/Settings.jsx";
import Notification from "./pages/settings/OrderSettings/Notification.jsx";
import PaymentMethod from "./pages/settings/OrderSettings/PaymentMethod.jsx";
import Address from "./pages/settings/OrderSettings/Address.jsx";
import ForgotPassword from "./pages/settings/AccountSettings/ForgotPassword.jsx";
import SignIn from "./pages/settings/AccountSettings/SignIn.jsx";
import SignUp from "./pages/settings/AccountSettings/SignUp.jsx";

// About pages
import BlogCategories from "./pages/abouts/BlogCategories.jsx";
import Abouts from "./pages/abouts/Abouts.jsx";
import Contacts from "./pages/abouts/Contacts.jsx";

// Footer Elements
import FAQ from "./components/FooterElements/Faq.jsx";
import Careers from "./components/FooterElements/Careers.jsx";
import Coupons from "./components/FooterElements/Coupons.jsx";
import HelpCenter from "./components/FooterElements/HelpCenter.jsx";
import Footer from "./components/Footer.jsx";

// Other Product Showing UI Effects and Animations
import Home from "./pages/Home.jsx";



// Category pages 



import Bakery from "./components/category/Bakery.jsx";
import BabyCare from "./components/category/BabyCare.jsx";
import Berverages from "./components/category/Berverages.jsx";
import Dairy from "./components/category/Dairy.jsx";
import Fruits from "./components/category/Fruits.jsx";
import Vegetables from "./components/category/Vegetables.jsx";
import HouseHold from "./components/category/HouseHold.jsx";
import MeatAndEggs from "./components/category/MeatAndEggs.jsx";
import PetCare from "./components/category/PetCare.jsx";
import Snacks from "./components/category/Snacks.jsx";
import InstantsFood from "./components/category/InstantsFood.jsx";
import FoodGrainAndOilAndMasala from "./components/category/FoodGrainAndOilAndMasala.jsx";


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshcart" element={<Home />} />
          {/* Shop pages */}
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ShopGridCol3" element={<ShopGridCol3 />} />
          <Route path="/ShopListCol" element={<ShopListCol />} />
          <Route path="/ShopWishList" element={<ShopWishList />} />
          <Route path="/ShopCheckOut" element={<ShopCheckOut />} />
          <Route path="/ShopCart" element={<ShopCart />} />
          {/* Store pages */}
          <Route path="/StoreList" element={<StoresDetails />} />
          <Route path="/SingleShop" element={<SingleStore />} />
          {/* Accounts pages */}
          <Route path="/MyAccountOrder" element={<OrderHistory />} />
          <Route path="/MyAccountSetting" element={<Settings />} />
          <Route path="/MyAcconutNotification" element={<Notification />} />
          <Route path="/MyAcconutPaymentMethod" element={<PaymentMethod />} />
          <Route path="/MyAccountAddress" element={<Address />} />
          <Route path="/MyAccountForgetPassword" element={<ForgotPassword />} />
          <Route path="/MyAccountSignIn" element={<SignIn />} />
          <Route path="/MyAccountSignUp" element={<SignUp />} />
          {/* About pages */}
          <Route path="/Blog" element={<BlogCategories />} />
          {/* <Route path="/BlogCategory" element={<BlogCategory />} /> */}
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/AboutUs" element={<Abouts />} />
          {/* Footer Elements */}
          <Route path="/Faq" element={<FAQ />} />
          <Route path="/Coupons" element={<Coupons />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          {/* Other Product Showing UI Effects and Animations*/}
          <Route path="/productShow" element={<ProductShow />} />
          {/* category pages */}

          <Route path="/bakery" element={<Bakery />} />
          <Route path="/babyCare" element={<BabyCare />} />
          <Route path="/berverages" element={<Berverages />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/household" element={<HouseHold />} />
          <Route path="/meatandeggs" element={<MeatAndEggs />} />
          <Route path="/petCare" element={<PetCare />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/instantsfood" element={<InstantsFood />} />
          <Route path="/riceandoilandmasala" element={<FoodGrainAndOilAndMasala />} />
          
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
