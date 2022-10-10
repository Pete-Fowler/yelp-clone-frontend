import React from 'react'
import style from './StarRating.module.css';

function StarRating({ reviews, displayDetails = true }) {
  if (reviews.length === 0) {
    return <div className={style.starComponent}>(0 reviews)</div>
  }

  let starTotal = 0;
  let starAverage;
  
  reviews.forEach(review => starTotal += review.star_rating);
  starAverage = (Math.round(starTotal / reviews.length * 10) / 10);

  const fullStars = Math.floor(starAverage);

  const starArr = [];

  for(let i = 1; i <= fullStars; i++)
  {
    starArr.push(1);
  }

  if(starAverage < 5) {
  const partialStar = starAverage - fullStars;
  starArr.push(partialStar);

  const emptyStars = 5 - starArr.length;
    for(let i=1; i<=emptyStars; i++) {
    starArr.push(0);
    }
  }

  const stars = starArr.map((val, i) => {
    return <div key={i} className={style.starBox} style={{background: `linear-gradient(90deg, #ff643d ${val * 100}%, #bbbac0 ${val * 100}%)`}}>★</div>
  })

  

  const details = displayDetails ? <div className={style.data}>
    <b className={style.average}>{starAverage > 5 ? 5 : starAverage}</b> ({reviews.length} reviews)</div>
    : null;

  return (
  <div className={style.starComponent}>
    <div className={style.starsBox} >
      {stars}
    </div>
    {details}
  </div>
  )

}

export default StarRating;