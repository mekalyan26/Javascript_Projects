import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SearchBox from './components/SearchBox';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Online Grocery Store</Link>
          </div>
          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div >
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            &nbsp;&nbsp;
            <Link to="signin">Sign in</Link>
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
            <Route path="/" exact={true} component={HomeScreen} />
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
