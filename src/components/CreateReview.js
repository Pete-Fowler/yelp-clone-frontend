import React, { useState } from "react"

function CreateReview({ addReview }) {

    const [comment, setComment] = useState('')
    const [business, setBusiness] = useState('')
    const [name, setName] = useState('')
    const [stars, setStars] = useState('')

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleStarChange(event) {
        setStars(event.target.value)
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
        <form onSubmit={handleSubmit} className="red">
            <input type="text" name="user" placeholder="User ID" onChange={handleNameChange} />
            <input type="text" name="businessId" placeholder="Business ID" onChange={handleBusinessChange} />
            <input type="text" name="starRating" placeholder="Star Rating" onChange={handleStarChange} />   
            <input type="text" name="description" placeholder="description" onChange={handleCommentChange} />
            <input type="submit" value="Add Review"  />
        </form>
    )


}

export default CreateReview;