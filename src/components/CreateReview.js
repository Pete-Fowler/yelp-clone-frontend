import React, { useState } from "react"
import StarRating from "./StarRating"
import BusinessDetails, { name } from "./BusinessDetails"
import "../CreateReview.css"

function CreateReview({ addReview,  }) {

    const [comment, setComment] = useState('')
    const [business, setBusiness] = useState('')
    const [name, setName] = useState('')
    const [stars, setStars] = useState('')

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleStarChange(event) {
        console.log(StarRating.index)
    }

    function handleBusinessChange(event) {
        setBusiness(event.target.value)   
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault()

        const newReview = {
            "user_id": name,
            "business_id": business,
            "comment": comment,
            "star_rating": stars,
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
            <p>{/*BusinessDetails.name*/}</p>
            <StarRating />  
            <input type="text" name="description" placeholder="description" onChange={handleCommentChange} />
            <input type="submit" value="Add Review"  />
        </form>
    )


}

export default CreateReview;