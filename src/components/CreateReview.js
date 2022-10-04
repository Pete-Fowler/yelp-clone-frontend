import React, { useState } from "react"
import StarRating from "./StarRating"
import style from "./CreateReview.module.css"

function CreateReview({ addReview, bizId, bizName }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [comment, setComment] = useState('')
    const [user, setUser] = useState(1)
   


    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function hoverRating() {
        if (hover == 0) {
            return "Select your rating"
        }
        else if (hover == 1) {
            return "Not good"
        }
        else if (hover == 2) {
            return "Could've been better"
        }
        else if (hover == 3) {
            return "OK"
        }
        else if (hover == 4) {
            return "Good"
        }
        else if (hover == 5) {
            return "Great"
        }
    }


    function handleSubmit(event) {
        event.preventDefault()

        const newReview = {
            "user_id": user,
            "business_id": bizId,
            "comment": comment,
            "star_rating": rating,
        }

    fetch("http://localhost:9292/review/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),   
    })
    .then(r => r.json())
    .then(promisedReview => addReview(promisedReview))

  }

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <p>{/*User.id*/}</p>
            <h2>{bizName}</h2>
            <div className={style.rating} >
                {[...Array(5)].map((star, index) => {
                    index += 1;        
                    return (
                        <button
                        type="button"
                        key={index}
                        className={index <= ((rating && hover) || hover ) ? `${style.on}` : `${style.off}`}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        >    
                    <span>&#9733;</span>
                    </button>             
                    );
                })}
                <p className={style.hoverText}>{hoverRating()}</p>
            </div>
            <input type="textbox" className={style.textbox} name="description" placeholder="description" onChange={handleCommentChange} />
            <input type="submit" value="Post Review"  className="submitButton"/>
   
        </form>
    )


}

export default CreateReview;