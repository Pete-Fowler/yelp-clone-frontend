import React, { useState } from "react"
import StarRating from "./StarRating"
import "../CreateReview.css"

function CreateReview({ addReview, bizId, bizName }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [comment, setComment] = useState('')
    const [user, setUser] = useState(1)
    const [stars, setStars] = useState(0)


    function handleCommentChange(event) {
        setComment(event.target.value)
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
        <form onSubmit={handleSubmit} className="form">
            <p>{/*User.id*/}</p>
            <h2>{bizName}</h2>
            <p>Rating: {rating}</p>
            <div className="star-rating" >
                {[...Array(5)].map((star, index) => {
                    index += 1;        
                    return (
                        <button
                        type="button"
                        key={index}
                        className={index <= ((rating && hover) || hover ) ? "on" : "off"}
                        onClick={() => setRating(index) && setStars(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        >    
                    <span>&#9733;</span>
                    </button>             
                    );
                })}
            </div>
            <input type="text" name="description" placeholder="description" onChange={handleCommentChange} />
            <input type="submit" value="Add Review"  />
   
        </form>
    )


}

export default CreateReview;