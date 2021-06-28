function add_to_cart(product_id, auth=false){
    if(auth != 'None') {
        $.post("/cart", {"product_id": product_id}, (response) => {
            document.location.reload()
        })
    }
    else{
        document.location.href = '/login'
    }
}

function remove_from_cart(cart_id){
    $.post("/remove-cart", {"id": cart_id}, (response) => {
        document.location.reload()
    })
}

function get_product_by_price(){
    let value = $('#range-slider').val();
    var priceArr = value.split(';');
    console.log(priceArr);
    $.post("/searchbyprice", {"product_id": product_id},{"category_id": product_category_id},{"product_price": priceArr[1]}, (response) => {
            document.location.reload()
        })
}


