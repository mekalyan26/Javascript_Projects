import React from 'react';
import data from '../data'

function HomeScreen(props) {
    return <ul className="products">
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
}

export default HomeScreen;