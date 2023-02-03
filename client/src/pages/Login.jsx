import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Logn</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>

        <p>this is an error message</p>

        <span>
          Dont You have an Account?
          <div>
            <Link to="/register">Register</Link>
          </div>
        </span>
      </form>
    </div>
  );
};

export default Login;
