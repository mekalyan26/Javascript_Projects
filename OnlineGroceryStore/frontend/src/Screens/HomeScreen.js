import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {listProducts} from '../actions/productActions';

function HomeScreen(props) {
    const  productList = useSelector((state) => state.productList);
    const  {products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts());
     },[dispatch]);     
      
    return (
      loading ? (<div>Loading ...</div>):
      error ? (<div>{error}</div>): (   
    <ul className="products">
    {
      products.map(product =>
      <li key={product._id} >
          <div className="product">
                <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.product_image_path} alt="product"/>              
                </Link>  
              <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.product_name}</Link>                  
              </div>
              <div className="product-brand">{product.product_brand}</div>
              <div className="product-price">${product.product_price}</div>
              <div className="product-rating">{product.product_rating} Stars {product.product_review}</div>
          </div>
      </li> )                           
    } 
  </ul>)
);
  }

export default HomeScreen;