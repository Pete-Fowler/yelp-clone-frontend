import React, { useState, useEffect } from "react";
import logoWhite from "../images/yelpLogoWhite.svg";
import logoColor from "../images/yelpLogo.svg";
import styles from "./Header.module.css";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, logOut, setHistory }) {
  const [onHome, setOnHome] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/") setOnHome(true);
    else setOnHome(false);
  }, [window.location.pathname]);

  const headerClass = onHome
    ? styles.absolute
    : `${styles.sticky} softBottomBorder`;
  const logoSrc = onHome ? logoWhite : logoColor;
  const loginClass = onHome
    ? `${styles.headerBtn} ${styles.login}`
    : styles.stickyBtn;

  const navigate = useNavigate();

  let userArea = (
    <div className={"row"} id={styles.userArea}>
      <button
        className={loginClass}
        onClick={() => {
          navigate("/login");
        }}
      >
        Log In
      </button>
      <button
        className={"red " + styles.signUp + " " + styles.headerBtn}
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign Up
      </button>
    </div>
  );
  if (isLoggedIn) {
    userArea = (
      <div id={styles.userArea}>
        <button
          className={"red " + styles.signUp + " " + styles.headerBtn}
          onClick={logOut}
        >
          {" "}
          Log Out{" "}
        </button>
      </div>
    );
  }

  return (
    <nav className={styles.nav + " " + headerClass}>
      <Link to="/">
        <img className={styles.logo} src={logoSrc} alt="Yelp logo" />
      </Link>
      <div style={{ flex: 1 }} />
      <SearchBar setHistory={setHistory} />
      <div style={{ flex: 1 }} />
      {userArea}
    </nav>
  );
}

export default Header;
