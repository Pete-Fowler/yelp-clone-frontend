import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginSignup({ setSessionCookie, isLogin, setUserId }) {
  const url = process.env.REACT_APP_URL;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "") {
      setErrorText("Username must be filled");
      return;
    } else if (password.length < 6) {
      setErrorText("Password must be atleast 6 characters in length");
      return;
    } else {
      setErrorText("");
    }

    fetch(`${url}/${isLogin ? "login" : "signup"}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (typeof data == "string") {
          setErrorText(data);
        } else {
          // send user back to home
          setSessionCookie(data["session_cookie"]);
          setUserId(data["id"]);
          navigate("/");
        }
      });
  }

  return (
    <div className="row centered" style={{ marginTop: "2rem" }}>
      <form
        className="centered col"
        onSubmit={handleSubmit}
        style={{ marginRight: "2rem", maxWidth: "20rem" }}
      >
        <h2 className="centered" style={{ color: "var(--red)" }}>
          {isLogin ? "Log in to" : "Sign up for"} Yelp
        </h2>
        <h4 className="centered">Connect with great local businesses</h4>
        <p className="legalText" style={{ marginBottom: "1rem" }}>
          By continuing, you agree to Yelp’s Terms of Service and acknowledge
          Yelp’s Privacy Policy.
        </p>

        <input
          style={{ marginBottom: "0.5rem" }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="username"
          value={username}
          type="text"
        />

        <input
          style={{ marginBottom: "0.5rem" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          value={password}
          type="password"
        />

        <button
          className="red"
          type="submit"
          style={{ marginBottom: "0.5rem" }}
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <span style={{ color: "red" }}>{errorText}</span>

        <span style={{ fontSize: "12px", marginLeft: "auto", color: "#999" }}>
          {isLogin ? "New to Yelp? " : "Already on Yelp? "}
          <span
            style={{ color: "#1a0dab", textDecoration: "underline" }}
            onClick={() => {
              isLogin ? navigate("/signup") : navigate("/login");
            }}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </span>
      </form>
      <img
        src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
        alt="signup illustration"
      />
    </div>
  );
}

export default LoginSignup;
