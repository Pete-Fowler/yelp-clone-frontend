import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';
import searchIcon from '../images/searchIcon.svg';

export default function SearchBar ({ setHistory }) {
  const [ searchTerm, setSearchTerm ] = useState("")

  useEffect(() => {
    const url = window.location.href.split("/")
    if (url[url.length-2]==="search"){
      setSearchTerm(url[url.length-1])
    }
  }, [window.location.href])

  const navigate = useNavigate();

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setHistory(false);
    if (searchTerm === "") {
      setSearchTerm("all")
    }
    navigate(`/search/${searchTerm}/page/1`);
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