import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function ProductScreen(props) { 

    const product = data.products.find(x => x._id === props.match.params.id);
    
    return <div>        
        <div>
            <Link to="/">Back to result</Link>
        </div>
        <div className="productdetails">
            <div className="productdetails-image">
                <img className="product-image" src={product.image} alt="product"></img>
            </div>
            <div className="productdetails-all">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.reviews})
                    </li>
                    <li>
                        ${product.price}
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>            
            </div> 
        </div>
    </div>
}

export default ProductScreen;