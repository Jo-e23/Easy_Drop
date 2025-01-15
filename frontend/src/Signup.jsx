import React, { useRef } from "react";
import "./App.css";
import { useNavigate } from "react-router";

let email = useRef('');
let password =useRef('');


function SignUp() {

  let navigate = useNavigate();

 
  function move()
  
    { 
  
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "email": email.current.value,
  "password": password.current.value
});

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:6000/users", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result.data))
  .catch((error) => console.error(error));
  
      

     console.log("api",move());
         navigate('/Dashboard');
    }

  return (
    <div className="signup-form">
      <form action="/examples/actions/confirmation.php" method="post" className="form-horizontal">
        <div className="row">
          <div className="col-8 offset-4">
            <h2>Sign Up</h2>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-4">Username</label>
          <div className="col-8">
            <input type="text" className="form-control" name="username" required />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-4">Email Address</label>
          <div className="col-8">
            <input type="email" className="form-control" name="email" required />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-4">Password</label>
          <div className="col-8">
            <input type="password" className="form-control" name="password" required />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-4">Confirm Password</label>
          <div className="col-8">
            <input type="password" className="form-control" name="confirm_password" required />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-8 offset-4">
            <p>
              <label className="form-check-label">
                <input type="checkbox" required /> I accept the <a href="#">Terms of Use</a> &amp;{" "}
                <a href="#">Privacy Policy</a>.
              </label>
            </p>
            <button onClick={move}type="submit" className="btn btn-primary btn-lg" name="action" value="user_signup">
              Sign Up
            </button>
            <br></br>
            <button type="submit" className="btn btn-primary btn-lg" name="action" value="vendor_signup">
              As a Vendor
            </button>
          </div>
        </div>
      </form>
      <div className="text-center">
        Already have an account? <a href="#">Login here</a>
      </div>
    </div>
  );
}

export default SignUp;
