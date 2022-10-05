import React, { useState } from "react";
import StarRating from './StarRating';
import StarRatingPicker from "./StarRatingPicker";
import style from "./Review.module.css";

function Review({review:{comment, star_rating, user, id}, userId, sessionCookie}) {
  const { username, profile_picture } = user

  let pfp = profile_picture==null? "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png" : profile_picture
  console.log(pfp)

  const [patch, setPatch] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [color, setColor] = useState('#FFD56A');
  const [rating, setRating] = useState(0);

  // Passed to StarRatingPicker to update state
  function rate(value) {
    setRating(value);
  }

  // Passed to StarRatingPicker to update state
  function changeColor(value) {
    setColor(value);
  }

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
    <div className="col" style={{margin:"1rem 0rem", position:"relative"}}>
      <div className="row">
        <img style={{borderRadius:"50%", width:"4rem", height:"4rem", marginRight:"0.5rem", marginBottom:"0.5rem"}}  src={pfp} alt={`${username}'s icon`}/>
        <div className="col">
          <div className={style.edit}>{user.id === userId ?  <div><button onClick={startPatch}>Edit</button></div>  : "" }</div>
          <div className={style.delete}>{user.id === userId ?  <div><button onClick={handleDelete}>Delete</button></div>  : "" }</div>
          <span style={{fontSize:"1.25rem"}}>{username}</span>
          <span>{patch ? "" : <StarRating reviews={[{star_rating: star_rating}]} displayDetails={false}/>}</span>
        </div>
      </div>
      <div className={style.rating}> {patch 
        ? <StarRatingPicker rate={rate} rating={rating} changeColor={changeColor} color={color}/> 
        : ""} </div>
      <span>{patch 
        ? <textarea className={style.textbox} onChange={handleCommentChange}>{comment}</textarea> 
        : comment}</span>
      <div>{patch ? <button className="red" onClick={handlePatch} type="submit">Post Edit</button> 
        : "" }</div>
    </div>
  )
}

export default Review