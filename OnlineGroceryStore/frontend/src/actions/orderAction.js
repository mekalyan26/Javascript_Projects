import {ORDER_CREATE_REQUEST, ORDER_CREATE_FAIL, ORDER_CREATE_SUCCESS, ORDER_CREATE_RESET} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({type: ORDER_CREATE_REQUEST, payload: order});
    try{

    } catch(error){
        dispatch({type:ORDER_CREATE_FAIL, payload: error.response && error.response.data.message})
    }


}