import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BusinessResult.module.css';

export default function BusinessResult({ id, name, type, address, reviews, price, image_url }) {
 
  const starTotal = reviews.reduce((last, current) => {
    return last + current.star_rating;
  }, reviews[0].star_rating);

  const starAverage = starTotal / reviews.length;

  const comment = truncate(reviews[0].comment)

  function truncate(str) {
    return str.length > 125 ? str.substring(0, 125) + '...' : str;
  }

  return <div className={styles.listing}>
    <img className={styles.img} src={image_url} alt='Restaurant or food' />
    <div className={styles.content}>
      <Link className={styles.link} to={`/business/${id}`}> {name}</Link>
      <div>{starAverage} Stars ({reviews.length} reviews)</div>
      <div>
        <span className={styles.type}>{type} </span>
        <span className={styles.price}>{price}</span>
      </div>
      <div className={styles.comment}>"{comment}" <Link to={``}>more</Link></div>
      <div>{address}</div>
    </div>
  </div>
}