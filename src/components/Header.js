import React from 'react';
import logo from '../images/yelpLogo.svg';
import styles from './Header.module.css';
import SearchBar from './SearchBar';
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, logOut, handleSearch }) {
  const navigate = useNavigate()

  let userArea = (
    <div className="row">
      <button onClick={()=>{navigate("/login")}}>Log In</button>
      <button className="red" onClick={()=>{navigate("/signup")}}>Sign Up</button>
    </div>
  )
  if (isLoggedIn) {
    userArea = ( <button onClick={logOut}> Log Out </button> )
  }

  return (
    <nav className={styles.nav}>
      <Link to="/"><img className={styles.logo} src={logo} alt='Yelp logo' /></Link>
      <SearchBar handleSearch={handleSearch}/>
      {userArea}
    </nav>
  )
}

export default Header