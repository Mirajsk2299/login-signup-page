import React from "react";
import "./Loggedin.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Loggedin = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="big-box">
      <div className="card-div">
        <i
          className="fas fa-circle-check"
          style={{ color: "#15b315", fontSize: "115px", marginBottom: "20px" }}
        ></i>
        <div>
          <h1 style={{ marginBottom: "40px" }}>Successfully Logged in!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Loggedin;
