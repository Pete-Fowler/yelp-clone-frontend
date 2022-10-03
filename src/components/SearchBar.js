import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar () {

  return <div className={styles.searchBar}>
    <form>

      <input type='text' placeholder="tacos, cheap dinner, Max's"></input>
      <input type='text' placeholder="Denver, CO 80203"></input>
    </form>
  </div>
}