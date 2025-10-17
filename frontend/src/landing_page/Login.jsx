import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://zerodha-clone-q795.onrender.com/login",
        { email, password },
        { withCredentials: true }
      );
      
      alert("Login successful!");
      window.location.href = "https://zerodha-clone-okb8.vercel.app"; // 👈 redirect to dashboard
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-3">
          <h3 className="fw-bold text-primary">Welcome Back</h3>
          <p className="text-muted small mb-0">Please login to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0 text-muted small">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-primary text-decoration-none fw-semibold"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
