import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const handleHistory = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("passworld").value;

    if (email == "blackpink" && password == "1234") {
    } else {
      alert("error");
    }
  };
  return (
    <div className="container">
      <h1 className="header-title">Login</h1>
      <form className="form-con">
        <div className="user-name">
          <label>UserName</label>
          <input type="text" id="email" />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" id="passworld" />
        </div>
        <div className="button">
          <input type="submit" value="login" onClick={handleHistory} />
        </div>
      </form>
    </div>
  );
}

export default Login;
