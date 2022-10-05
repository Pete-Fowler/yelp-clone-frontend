import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { array } from 'yargs';
import chat from '../images/chatBubble.svg';
import styles from './BusinessResult.module.css';
import StarRating from './StarRating'

export default function BusinessResult({ id, name, type, address, reviews, price, image_url }) {
  const navigate = useNavigate()

  let comment = "no reviews have yet been written"
  if (reviews.length !== 0) {
    comment = truncate(reviews[0].comment)
  }

  function truncate(str) {
    return str.length > 125 ? str.substring(0, 125) + '...' : str;
  }

  return <div onClick={()=>{navigate(`/business/${id}`)}} className={`${styles.listing} softBottomBorder centered`}>
    <img className={styles.img} src={image_url} alt='Restaurant or food' />
    <div className={styles.content}>
      <p className={styles.link} to={`/business/${id}`}> {name}</p>
      <div><StarRating reviews={reviews}/></div>
      <div>
        <span className={styles.type}>{type} </span>
        <span className={styles.price}>{price}</span>
      </div>
      <div className={styles.commentBox}>
        <img className={styles.chatIcon} src={chat} alt='Chat bubble' style={{height: '15px'}} />
        <div className={styles.comment}>"{comment}" <Link to={`/business/${id}`}>more</Link></div>
      </div>
      <div>{address}</div>
    </div>
  </div>
}