import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import chat from '../images/chatBubble.svg';
import styles from './BusinessResult.module.css';
import StarRating from './StarRating'

export default function BusinessResult({ id, name, type, address, reviews, price, image_url, transactions }) {
  const navigate = useNavigate()

  let comment = "no reviews have yet been written"
  if (reviews.length !== 0) {
    comment = truncate(reviews[0].comment)
  }

  function truncate(str) {
    return str.length > 125 ? str.substring(0, 125) + '...' : str;
  }

  const transactionsArray = JSON.parse(transactions);

  const svg = <svg width="16" height="16" className="icon_svg"><path fill='#2eb187' d="M6.308 11.763a.748.748 0 01-.53-.22l-2.641-2.64a.75.75 0 011.06-1.061l2.11 2.11 5.496-5.495a.75.75 0 111.06 1.06l-6.025 6.026a.748.748 0 01-.53.22z"></path></svg>;

  const transactionsJsx = transactionsArray.map(t => <div key={id} className={styles.transaction}>{svg}{t === "restaurant_reservation" ? 'Reservations' : t[0].toUpperCase() + t.slice(1)}</div>);
  console.log(id)
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
      <div className={styles.transactionBox}>{transactionsJsx}
      </div>
    </div>
  </div>
}