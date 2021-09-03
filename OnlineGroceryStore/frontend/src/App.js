import React from 'react';
import data from './data';
import './App.css'


function App() {

  const openMenu= () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu= () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
    <header className="header">             
        <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Online Grocery Store</a>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
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
        <ul className="products">
          {
            data.products.map(product =>
            <li >
                <div className="product">
                    <img src={product.image} alt="product" className="product-image"/>
                    <div className="product-name">
                        <a href="product.html">{product.name}</a>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}</div>
                    <div className="product-rating">{product.rating} Stars {product.reviews}</div>
                </div>
            </li> )                           
          } 
        </ul>
    
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
  );
}

export default App;
