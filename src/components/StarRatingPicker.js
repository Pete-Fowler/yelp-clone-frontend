import React, { useEffect } from 'react';
import style from './StarRatingPicker.module.css';

export default function StarRatingPicker({ rate, rating, changeColor, color, parent }) {

  const colors = ['#FFD56A', '#FFA448', '#ff7e42', '#ff523d', '#f43939'];

  useEffect(() => {
    const i = colors[Math.floor(rating - 1)];
    changeColor(i)
  }, [])

  function hoverRating() {
    if (rating === 0) {
        return "Select your rating"
    }
    else if (rating === 1) {
        return "Not good"
    }
    else if (rating === 2) {
        return "Could've been better"
    }
    else if (rating === 3) {
        return "OK"
    }
    else if (rating === 4) {
        return "Good"
    }
    else if (rating === 5) {
        return "Great"
    }
  }

  const starAverage = rating;

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
  
  const starRatingPicker = starArr.map((val, index) => {
    return <div key={index}
    className={style.starBox}
    onClick={() => rate(index + 1)}
    onMouseEnter={() => {
      rate(index + 1);
      changeColor(colors[index]);
      }
    } 
   
    style={{background: `linear-gradient(90deg, ${color} ${val * 100}%, #bbbac0 ${val * 100}%)`}}>★</div>
  })

  return <div className={style.rating + ' ' + parent}>{starRatingPicker}
    <p className={style.hoverText}>{hoverRating()}</p>
    </div>
}