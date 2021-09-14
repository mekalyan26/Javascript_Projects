import React , {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {detailsProduct} from '../actions/productActions';


function ProductScreen(props) { 

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct());
    },[dispatch]);       
        return( 
     <div>        
        <div className="productdetails-back-to-results">
            <Link to="/">Back to result</Link>
        </div>
        {loading? <div>Loading ...</div>:
         error? <div>{error}</div>:
         (
            <div className="productdetails">
            <div className="productdetails-image">
                <img className="productdetails-image" src={product.image} alt="product"></img>
            </div>
            <div className="productdetails-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.reviews})
                    </li>
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>            
            </div>
            <div className="productdetails-action">
                <ul>
                    <li>
                        Price : {product.price}
                    </li>
                    <li>
                        Status : {product.status}
                    </li>
                    <li>
                        Qty : <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button className="productdetails-addtocart-button">Add to cart</button>
                    </li>
                </ul>
            
            </div> 
        </div>
         )
         }</div>
        );        
}

export default ProductScreen;