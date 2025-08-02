import React, { useState } from "react";
import "./Home.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/loggedin");
    } catch (error) {
      alert("Invalid credentials");
      setLoginEmail("");
      setLoginPassword("");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      alert("Account created successfully!");
      setSignupEmail("");
      setSignupPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="main-page">
      <h1 className="main-head" style={{ marginBottom: "20px" }}>Login and Signup Page</h1>

      <div className="main-container">
        <div className="login-box">
          <i
            className="fas fa-right-to-bracket"
            style={{ color: "#007bff", fontSize: "34px", marginBottom: "10px" }}
          ></i>

          <div className="heading">
            <h1>Welcome!</h1>
          </div>
          <h4 className="heading">Log in to your Account</h4>

          <form id="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>
            <br />

            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                whiteSpace: "nowrap",
              }}
            >
              <input type="checkbox" /> Remember Me?
            </label>

            <br />

            <a href=" ">Forgot Password?</a>
          </form>
        </div>

        <div className="create-box">
          <i
            className="fas fa-light fa-circle-user"
            style={{ color: "#007bff", fontSize: "34px", marginBottom: "10px" }}
          ></i>
          <div className="heading">
            <h1>Create Account!</h1>
          </div>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <br />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;  
