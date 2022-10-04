import React, { useState } from 'react'
import style from './StarRating.module.css';

function StarRating({ setStars }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
    <div className={style.rating}>
        {[...Array(5)].map((star, index) => {
            index += 1;        
            return (
                <div className={style.star}>
                <button
                type="button"
                key={index}
                className={index <= ((rating && hover) || hover ) ? `${style.on}` : `${style.off}`}
                onClick={() => setRating(index) && setStars(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                >    
            <span>&#9733;</span>
            </button>
            </div>             
            );
        })}
    </div>
    )
}

export default StarRating;