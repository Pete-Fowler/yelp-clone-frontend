import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BusinessResult.module.css';

export default function BusinessResult({ id, name, type, address, reviews, price, image_url }) {
 
  const starTotal = reviews.reduce((last, current) => {
    return last + current.star_rating;
  }, reviews[0].star_rating);

  const starAverage = starTotal / reviews.length;

  return <div className={styles.listing}>
    <Link className={styles.link} to={`/business/${id}`}>{name}</Link>
    <img src={image_url} alt='Restaurant or food' style={{width: '220px', height: '220px'}}/>
    <div>{starAverage} Stars ({reviews.length} reviews)</div>
    <div className={styles.type}>{type}</div><span className={styles.price}>{price}</span>
    <div>{address}</div>
  </div>
}

// function avgStars() {
  
//   return (
//   <div className="star-rating">
//         {[...Array(5)].map((star, index) => {
//             index += 1;        
//             return (
//                 <button
//                 type="button"
//                 key={index}
//                 className={index <= ((rating && hover) || hover ) ? "on" : "off"}
//                 onClick={() => setRating(index)}
//                 onMouseEnter={() => setHover(index)}
//                 onMouseLeave={() => setHover(rating)}
//                 >    
//             <span className="star">&#9733;</span>
//             </button>             
//             );
//         })}
//     </div>
//     )
//   }