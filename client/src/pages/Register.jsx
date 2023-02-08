import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error,setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  // console.log(inputs);

  return (
    <div className="auth">
      <h1>Logn</h1>
      <form action="">
        <input
          required
          name="username"
          onChange={handleChange}
          type="text"
          placeholder="Username"
        />
        <input
          required
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          required
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Register</button>

        {error && <p>{error}</p>}

        <span>
          Do You have an Account?
          <div>
            <Link to="/login">Login</Link>
          </div>
        </span>
      </form>
    </div>
  );
};

export default Register;
