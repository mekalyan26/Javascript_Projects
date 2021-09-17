import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setqty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty={qty}`);
  };
  return (
    <div>
      <div className="productdetails-back-to-results">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading ...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="productdetails">
          <div className="productdetails-image-section">
            <img
              className="productdetails-img"
              src={product.image}
              alt="product"
            ></img>
          </div>
          <div className="productdetails-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Stars ({product.reviews}) reviews
              </li>
              <li>Price: ${product.price}</li>
              <li>
                Description:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="productdetails-action">
            <ul>
              <li>Price : {product.price}</li>
              <li>Status:{' '}
                  {product.countInStock > 0 ? (
                      <span className="success">In Stock</span> 
                  ):( <span className="error">Unavailable</span>                  
                  )}
              </li>
              <li>
                  Qty:{' '}
                  <select
                    value={qty}
                    onChange={(e) => {
                      setqty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                {product.countInStock > 0 && (
                    <button className="button primary" onClick={addToCartHandler}>Add to cart</button>
                    )}                 
                </li>              
            </ul>            
          </div>                    
        <div className="productdetails-info-banner">
            <h3>Available Offers</h3>            
               <h4>Comming Soon... </h4>           
        </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
