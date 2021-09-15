import React from 'react';

export default function Cart(props){
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('=')[1]): 1
    return (
        <div>
            <h1>cart screen</h1>
            <p>Add to cart: Productid: {productId} Qty:{qty}</p>
        </div>
        );
}