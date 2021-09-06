import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data'

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div>
        <div>
            <Link to="/">Back to result</Link>
        </div>
        <div className="product__details">
            <div className="product__details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="product__details-all">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.reviews})
                    </li>
                    <li>
                        {product.price}
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
        <h1>{product.name}</h1>
    </div>
}
export default ProductScreen;