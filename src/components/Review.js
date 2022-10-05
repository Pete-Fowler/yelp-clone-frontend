import { render } from "@testing-library/react"
import React, { useState } from "react"
import StarRating from "./StarRating"
import style from "./Review.module.css"

function Review({review:{comment, star_rating, user, id}, userId, sessionCookie}) {
  const { username, profile_picture } = user

  const [patch, setPatch] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const percent = hover /5 * 100

  const gradient = {background: `linear-gradient(90deg, #ff643d, #ff643d ${percent}%, #bbbac0 ${percent}%)`};

  const starRatingPicker = [...Array(5)].map((star, index) => {
    index += 1;
    return (
        
      <button type="button" key={index}
      className={style.starBox}
      onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}>
        ★
      </button>
    );
  })

  function handleCommentChange(event) {
    setNewComment(event.target.value)
  }


  function startPatch( ) {

    setPatch(!patch)

    }
    

    function handlePatch() {

      const updatedReview = {
        "user_id": userId,
        "session_cookie": sessionCookie,
        "star_rating": rating,
        "comment": newComment
      }

      console.log(updatedReview)

      fetch(`http://localhost:9292/review/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      })
      .then(r => r.json())
      .then(() => {
        window.location.reload()
      })
      
    }

  function handleDelete() {

    console.log(id)

      const userData = {
      "user_id": userId,
      "session_cookie": sessionCookie
    }

      fetch(`http://localhost:9292/review/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
      })
      
      .then(() => {
        window.location.reload()
      })
  }

  return (
    <div className="col" style={{margin:"1rem 0rem"}}>
      <div className="row">
        <img style={{borderRadius:"50%", width:"4rem", height:"4rem", marginRight:"0.5rem", marginBottom:"0.5rem"}}  src={profile_picture} alt={`${username}'s icon`}/>
        <div className="col">
          <div className={style.edit}>{user.id === userId ?  <div><button onClick={startPatch}>Edit</button></div>  : "" }</div>
          <div className={style.delete}>{user.id === userId ?  <div><button onClick={handleDelete}>Delete</button></div>  : "" }</div>
          <span style={{fontSize:"1.25rem"}}>{username}</span>
          <span>{patch ? "" : <StarRating reviews={[{star_rating: star_rating}]} displayDetails={false}/>}</span>
        </div>
      </div>
      <div className={style.rating} style={gradient}> {patch ? starRatingPicker : ""} </div>
      <span>{patch ? <textarea className={style.textbox} onChange={handleCommentChange}>{comment}</textarea>: comment}</span>
      <div>{patch ? <button onClick={handlePatch} type="submit">Post Edit</button> : "" }</div>
    </div>
  )
}

export default Review