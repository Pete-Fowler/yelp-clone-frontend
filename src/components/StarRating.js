import React, { useEffect, useState } from 'react'
import style from './StarRating.module.css';

function StarRating({ reviews }) {
console.log(reviews);

  if (reviews.length === 0)
    return;

  const starTotal = reviews.reduce((last, current) => {
    return last + current.star_rating;
  }, reviews[0].star_rating);

  const starAverage = Math.round(starTotal / reviews.length * 10) / 10;

  const percent = starAverage /5 * 100
   
  const gradient = {background: `linear-gradient(90deg, #ff643d, #ff643d ${percent}%, #bbbac0 ${percent}%)`};

    return (   
    <div className={style.starsBox} style={gradient} >
      <div className={style.starBox}>★</div>
      <div className={style.starBox}>★</div>
      <div className={style.starBox}>★</div>
      <div className={style.starBox}>★</div>
      <div className={style.starBox}>★</div>
    </div>
    )
  
}

export default StarRating;