import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../images/searchIcon.svg';

export default function SearchBar () {
  const [ searchTerm, setSearchTerm ] = useState("") 

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    
  }

  return <div className={styles.searchBar}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type='text' className={styles.input} value={searchTerm} onChange={handleChange}placeholder="tacos, cheap dinner, Max's"></input>
      <input type='text' className={styles.input} placeholder="Denver, CO 80203"></input>
      <button className={styles.searchBtn} type='submit'><img src={searchIcon} className={styles.searchIcon} alt='Search icon' /></button>
    </form>
  </div>
}