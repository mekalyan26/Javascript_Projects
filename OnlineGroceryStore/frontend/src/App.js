import React from 'react';
import data from './data';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {

  const openMenu= () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu= () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">             
        <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Online Grocery Store</Link>            
        </div>
        <div className="header-links">
            <a href="cart.html">Cart </a>
            <a href="signin.html">Sign in</a>
        </div>        
    </header>
    <aside className="sidebar">
        <h3>Shopping Catagories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>X</button>
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
      <Route path="/products/:id" component={ProductScreen} />
      <Route path="/" exact={true} component={HomeScreen} />      
    
        <div> 
          Recommended Products           
            <ul className="recommend-products">
                <li>
                    <div className="recommend-product" >                      
                        <img src="/images/olive.png" alt="recommend-product" className="recommend-product-image"/>                                             
                      <div className="recommend-product-name">
                            <a href="product.html">Olive</a>
                      </div>
                      <div className="recommend-product-brand">Black</div>
                      <div className="recommend-product-price">$1/lb</div>
                      <div className="recommend-product-rating">4.5 Stars</div>
                    </div>

                </li>
                <li>
                    <div className="recommend-product" >                      
                        <img src="/images/olive.png" alt="recommend-product" className="recommend-product-image"/>                                             
                      <div className="recommend-product-name">
                            <a href="product.html">Olive</a>
                      </div>
                      <div className="recommend-product-brand">Black</div>
                      <div className="recommend-product-price">$1/lb</div>
                      <div className="recommend-product-rating">4.5 Stars</div>
                    </div>

                </li>  
                <li>
                    <div className="recommend-product" >                      
                        <img src="/images/olive.png" alt="recommend-product" className="recommend-product-image"/>                                             
                      <div className="recommend-product-name">
                            <a href="product.html">Olive</a>
                      </div>
                      <div className="recommend-product-brand">Black</div>
                      <div className="recommend-product-price">$1/lb</div>
                      <div className="recommend-product-rating">4.5 Stars</div>
                    </div>

                </li>  
                <li>
                    <div className="recommend-product" >                      
                        <img src="/images/olive.png" alt="recommend-product" className="recommend-product-image"/>                                             
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
    </div>
    </main>
    <footer className="footer">All rights reserved.</footer>
</div>
</BrowserRouter>
  );
}

export default App;
