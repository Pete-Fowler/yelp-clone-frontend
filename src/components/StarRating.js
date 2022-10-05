import React, { useEffect, useState } from 'react'
import style from './StarRating.module.css';

function StarRating({ reviews }) {
console.log(reviews);
  const starTotal = reviews.reduce((last, current) => {
    return last + current.star_rating;
  }, reviews[0].star_rating);

  let index = 0

  const starAverage = Math.round(starTotal / reviews.length * 10) / 10;
    
  const displayStars = Array.from(String(starAverage), Number);

  const results = displayStars.map((star) => {
    return <span key={index ++} className='star-average'>&#9733;</span>
  })

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