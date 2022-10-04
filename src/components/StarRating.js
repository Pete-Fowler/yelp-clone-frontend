import React, { useEffect, useState } from 'react'
import style from './StarRating.module.css';

function StarRating({ id, name, type, address, reviews, price, image_url }) {

  const starTotal = reviews.reduce((last, current) => {
    return last + current.star_rating;
  }, reviews[0].star_rating);

  const starAverage = Math.round(starTotal / reviews.length * 10) / 10;
    
  const displayStars = Array.from(String(starAverage), Number);

  const results = displayStars.map((star) => {
    return <span className='star-average'>&#9733;</span>
  })

    
   

    return (   
   <div>{results}</div>
    )
  
}

export default StarRating;