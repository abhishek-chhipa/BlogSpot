import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/login", inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };


  return (
    <div className="auth">
      <h1>Logn</h1>
      <form action="">
        <input type="text" placeholder="username" name="username" onChange={handleChange}/>
        <input type="password" placeholder="password" name = "password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>

        {error && <p>{error}</p>}

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
