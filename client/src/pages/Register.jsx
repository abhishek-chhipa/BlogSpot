import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
      <h1>Logn</h1>
      <form action="">
        <input required type="text" placeholder="Username" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <button>Register</button>

        <p>this is an error message</p>

        <span>
          Do You have an Account?
          <div>
            <Link to="/login">Login</Link>
          </div>
        </span>
      </form>
    </div>
  );
}

export default Register
