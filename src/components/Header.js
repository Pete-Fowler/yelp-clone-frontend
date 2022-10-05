import React, { useState, useEffect } from 'react';
import logoWhite from '../images/yelpLogoWhite.svg';
import logoColor from '../images/yelpLogo.svg';
import styles from './Header.module.css';
import SearchBar from './SearchBar';
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, logOut }) {
  const [ onHome, setOnHome ] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/")
      setOnHome(true);
    else
      setOnHome(false);
  }, [window.location.pathname])

  const headerClass = onHome ? styles.absolute : `${styles.sticky} softBottomBorder`;
  const logoSrc = onHome ? logoWhite : logoColor;
  const loginClass = onHome ? styles.headerBtn : styles.stickyBtn;

  const navigate = useNavigate()

  let userArea = (
    <div className={"row " + styles.userArea}>
      <button className={'login ' + loginClass} onClick={()=>{navigate("/login")}}>Log In</button>
      <button className={'red ' + styles.signUp + ' ' + styles.headerBtn} onClick={()=>{navigate("/signup")}}>Sign Up</button>
    </div>
  )
  if (isLoggedIn) {
    userArea = ( <button onClick={logOut}> Log Out </button> )
  }



  return (
    <nav className={styles.nav + ' ' + headerClass}>
        <Link to="/"><img className={styles.logo} src={logoSrc} alt='Yelp logo' /></Link>
        <SearchBar />
      {userArea}
    </nav>
  )
}

export default Header