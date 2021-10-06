import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions.js";

export default function RegisterScreen(props) {
  const [customer_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  onst [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.locations.search.split("=")[1]
    : "/";

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error} = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert('Password not matching')
    }
    else {
      dispatch(register(customer_name, email, password));
    }    
  };
  useEffect( () => {
    if(userInfo){
      props.history.push(redirect);
    }

  }, [userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Register</h1>
        </div>
        <div>
          <label htmlFor="customer_name">Customer Name</label>
          <input
            type="text"
            id="customer_name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            placeholder="Enter confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="button primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account? <Link to="/signin">Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
