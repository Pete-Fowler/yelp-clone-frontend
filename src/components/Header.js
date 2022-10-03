import React from 'react';
import logo from '../images/yelpLogo.svg';
import styles from './Header.module.css';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";

function Header({ isLoggedIn, logOut, handleSearch }) {
  let userArea = (<Link to="/login">Log In</Link>)
  if (isLoggedIn) {
    userArea = ( <button onClick={logOut}> Log Out </button> )
  }

  return (
    <nav className={styles.nav}>
      <Link to="/"><img className={styles.logo} src={logo} alt='Yelp logo' /></Link>
      <SearchBar handleSearch={handleSearch}/> 
      <Link to="/businesses">Businesses</Link>
      {userArea}
    </nav>
  )
}

export default Header