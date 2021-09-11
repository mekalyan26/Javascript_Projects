import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
import axios from 'axios';

const listProducts = () => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const {data} = await axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    }
    catch(error)
    {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });

    }
    

}

const detailsProduct = (productid) => (dispatch) => {

    try{
        dispatch({ type: PRODUCT_LIST_REQUEST, payload: productid });
        const {data} = await axios.get("/api/products/" + productid);
        dispatch({ type:PRODUCT_DETAILS_REQUEST, payload: data });
    }
    catch(error){
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });

    }
}

export {listProducts, detailsProduct}