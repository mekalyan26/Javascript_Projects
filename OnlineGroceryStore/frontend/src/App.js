import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import { signout } from "./actions/userActions.js";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Online Grocery Store</Link>
          </div>

          <div className="brand">
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="signin">Sign in</Link>
            )}
            &nbsp;&nbsp;
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Catagories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="index.html">Fruits</a>
            </li>
            <li>
              <a href="index.html">Vegetables</a>
            </li>
            <li>
              <a href="index.html">Dairy</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/shipping" component={ShippingAddressScreen} />
            <Route path="/payment" component={PaymentMethodScreen} />
          </div>
          <div></div>
          <div className="recommend-products-main">
            <h3 className="recommend-products-h3">Recommended Products </h3>
            <ul className="recommend-products">
              <li>
                <div className="recommend-product">
                  <img
                    src="/images/olive.png"
                    alt="recommend-product"
                    className="recommend-product-image"
                  />
                  <div className="recommend-product-name">
                    <a href="product.html">Olive</a>
                  </div>
                  <div className="recommend-product-brand">Black</div>
                  <div className="recommend-product-price">$1/lb</div>
                  <div className="recommend-product-rating">4.5 Stars</div>
                </div>
              </li>
              <li>
                <div className="recommend-product">
                  <img
                    src="/images/olive.png"
                    alt="recommend-product"
                    className="recommend-product-image"
                  />
                  <div className="recommend-product-name">
                    <a href="product.html">Olive</a>
                  </div>
                  <div className="recommend-product-brand">Black</div>
                  <div className="recommend-product-price">$1/lb</div>
                  <div className="recommend-product-rating">4.5 Stars</div>
                </div>
              </li>
              <li>
                <div className="recommend-product">
                  <img
                    src="/images/olive.png"
                    alt="recommend-product"
                    className="recommend-product-image"
                  />
                  <div className="recommend-product-name">
                    <a href="product.html">Olive</a>
                  </div>
                  <div className="recommend-product-brand">Black</div>
                  <div className="recommend-product-price">$1/lb</div>
                  <div className="recommend-product-rating">4.5 Stars</div>
                </div>
              </li>
              <li>
                <div className="recommend-product">
                  <img
                    src="/images/olive.png"
                    alt="recommend-product"
                    className="recommend-product-image"
                  />
                  <div className="recommend-product-name">
                    <a href="product.html">Olive</a>
                  </div>
                  <div className="recommend-product-brand">Black</div>
                  <div className="recommend-product-price">$1/lb</div>
                  <div className="recommend-product-rating">4.5 Stars</div>
                </div>
              </li>
            </ul>
          </div>
        </main>
        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
