import Axios from 'axios';
import {
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_FAILURE,
    USER_SIGNIN_SUCCESS,
} from '../constants/userConstants';

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type:USER_SIGNIN_REQUEST,payload: {email, password}});
    try {
        const {data} = await Axios.post('api/users/signin', {email, password});
        dispatch({ type:USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userinfo', JSON.stringify(data));
    } catch(error) {
        dispatch({ type:USER_SIGNIN_FAILURE, 
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        });
    }
}