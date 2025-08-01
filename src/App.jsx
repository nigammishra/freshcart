// react 
import React from "react";
// css
import "./App.css";
// browserrouter 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import ProductShow from "./components/Animations/ProductShow.jsx";
import Header from "./components/Header.jsx";

// Shop pages
import Shop from "./pages/shopItems/Shop.jsx";
import ShopGridCol3 from "./pages/shopItems/ShopComponents/ShopGridCol3.jsx";
import ShopListCol from "./pages/shopItems/ShopComponents/ShopListCol.jsx";
import ShopWishList from "./pages/shopItems/ShopComponents/ShopWishList.jsx";
import ShopCheckOut from "./pages/shopItems/ShopComponents/ShopCheckOut.jsx";
import ShopCart from "./pages/shopItems/ShopComponents/ShopCart.jsx";

// Store pages
import StoresDetails from "./pages/Storepages/StoresDetails.jsx";
import SingleStore from "./pages/Storepages/SingleStore.jsx";

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

// Other
import Home from "./pages/Home.jsx";

// Category pages
import Bakery from "./components/category/Bakery.jsx";
import BabyCare from "./components/category/BabyCare.jsx";
import Dairy from "./components/category/Dairy.jsx";
import Fruits from "./components/category/Fruits.jsx";
import Vegetables from "./components/category/Vegetables.jsx";
import HouseHold from "./components/category/HouseHold.jsx";
import MeatAndEggs from "./components/category/MeatAndEggs.jsx";
import Snacks from "./components/category/Snacks.jsx";
import InstantsFood from "./components/category/InstantsFood.jsx";
import FoodGrainAndOilAndMasala from "./components/category/FoodGrainAndOilAndMasala.jsx";

// 🔒 Auth-protected route wrapper
import PrivateRoute from "./context/PrivateRoute.jsx"; // ✅ Create this component

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/freshcart" element={<Home />} />
          <Route path="/MyAccountSignIn" element={<SignIn />} />
          <Route path="/MyAccountSignUp" element={<SignUp />} />
          <Route path="/MyAccountForgetPassword" element={<ForgotPassword />} />
          <Route path="/Blog" element={<BlogCategories />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/AboutUs" element={<Abouts />} />
          <Route path="/Faq" element={<FAQ />} />
          <Route path="/Coupons" element={<Coupons />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/productShow" element={<ProductShow />} />
          <Route path="/StoreList" element={<StoresDetails />} />
          <Route path="/SingleShop" element={<SingleStore />} />

           {/* 🔒 Protected Category pages */}
      <Route path="/bakery" element={<PrivateRoute><Bakery /></PrivateRoute>} />
      <Route path="/babyCare" element={<PrivateRoute><BabyCare /></PrivateRoute>} />
      <Route path="/dairy" element={<PrivateRoute><Dairy /></PrivateRoute>} />
      <Route path="/fruits" element={<PrivateRoute><Fruits /></PrivateRoute>} />
      <Route path="/household" element={<PrivateRoute><HouseHold /></PrivateRoute>} />
      <Route path="/meatandeggs" element={<PrivateRoute><MeatAndEggs /></PrivateRoute>} />
      <Route path="/snacks" element={<PrivateRoute><Snacks /></PrivateRoute>} />
      <Route path="/vegetables" element={<PrivateRoute><Vegetables /></PrivateRoute>} />
      <Route path="/instantsfood" element={<PrivateRoute><InstantsFood /></PrivateRoute>} />
      <Route path="/riceandoilandmasala" element={<PrivateRoute><FoodGrainAndOilAndMasala /></PrivateRoute>} />

          {/* 🔒 Protected Routes (require sign in) */}
          <Route path="/Shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
          <Route path="/ShopGridCol3" element={<PrivateRoute><ShopGridCol3 /></PrivateRoute>} />
          <Route path="/ShopListCol" element={<PrivateRoute><ShopListCol /></PrivateRoute>} />
          <Route path="/ShopWishList" element={<PrivateRoute><ShopWishList /></PrivateRoute>} />
          <Route path="/ShopCheckOut" element={<PrivateRoute><ShopCheckOut /></PrivateRoute>} />
          <Route path="/ShopCart" element={<PrivateRoute><ShopCart /></PrivateRoute>} />
          <Route path="/MyAccountOrder" element={<PrivateRoute><OrderHistory /></PrivateRoute>} />
          <Route path="/MyAccountSetting" element={<PrivateRoute><Settings /></PrivateRoute>} />
          <Route path="/MyAcconutNotification" element={<PrivateRoute><Notification /></PrivateRoute>} />
          <Route path="/MyAcconutPaymentMethod" element={<PrivateRoute><PaymentMethod /></PrivateRoute>} />
          <Route path="/MyAccountAddress" element={<PrivateRoute><Address /></PrivateRoute>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
