import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';
import searchIcon from '../images/searchIcon.svg';

export default function SearchBar () {
  const [ searchTerm, setSearchTerm ] = useState("")

  const navigate = useNavigate();

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  }

  return <div className={styles.searchBar}>
    <form className={`${styles.form} row`} onSubmit={handleSubmit}>
      <input type='text' className={styles.inputL} value={searchTerm} onChange={handleChange}placeholder="tacos, cheap dinner, Max's"></input>
      <div className={`row ${styles.borderPillContainer}`}><div className={`centered ${styles.borderPill}`} /></div>
      <input type='text' className={styles.inputR} placeholder="Denver, CO 80203"></input>
      <button className={styles.searchBtn} type='submit'><img src={searchIcon} className={styles.searchIcon} alt='Search icon' /></button>
    </form>
  </div>
}