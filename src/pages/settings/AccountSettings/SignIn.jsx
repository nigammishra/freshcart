import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const handleSignUpClick = () => {
    setIsSignUp(true);
    document.body.classList.add("active");
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    document.body.classList.remove("active");
  };

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
        <>
          <div className="container">
            <div className="row mt-5">
              <div className="col-12">
                <h1 className="section-title">Welcome Back to FreshCart!</h1>
                <p className="section-description">
                  Sign in to manage your grocery orders, track deliveries, and access exclusive offers tailored for you.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="body-style">
              <div className="container con-style">
                <div className="blueBg">
                  <div className="box signin">
                    <h2>Already Have An Account?</h2>
                    <button class="signinBtn custom-btn btn-9" onClick={handleSignInClick}>Sign In</button>
                  </div>
                  <div className="box signup">
                    <h2>New to FreshCart?</h2> 
                    <button class="signinBtn custom-btn btn-9" onClick={handleSignUpClick}>Sign Up</button>
                  </div>
                </div>

                <div className={`formBx ${isSignUp ? "active" : ""}`}>
                  {/* Sign In Form */}
                  <div className="form signinForm">
                    <form>
                      <h3>Sign In to FreshCart</h3>
                      <input type="text" placeholder="Email or Username" />
                      <input type="password" placeholder="Password" />
                      <div className="social">
                        <i className="bx bxl-facebook-circle facebook"></i>
                        <i className="bx bxl-google google"></i>
                        <i className="bx bxl-twitter twitter"></i>
                        <i className="bx bxl-linkedin-square linkedin"></i>
                      </div>
                      <input type="submit" value="Login" />
                      <Link to="/MyAccountForgetPassword" className="forgot">
                        Forgot Password?
                      </Link>
                    </form>
                  </div>

                  {/* Sign Up Form */}
                  <div className="form signupForm">
                    <form>
                      <h3>Create Your Grocery Account</h3>
                      <input type="text" placeholder="Full Name" />
                      <input type="text" placeholder="Email Address" />
                      <input type="text" placeholder="Phone Number" />
                      {/* <input type="text" placeholder="Delivery Address" /> */}
                      <input type="password" placeholder="Create Password" />
                      <input type="password" placeholder="Confirm Password" />
                      <input type="submit" value="Sign Up" />
                      <Link to="" className="forgot" onClick={handleSignInClick}>
                        Already have an account?
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Signin;
