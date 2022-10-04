import React from "react"
import StarRating from "./StarRating"

function Review({review:{comment, star_rating, user}}) {
  console.log(user)
  const {username, profile_picture} = user
  return (
    <div className="col" style={{margin:"1rem 0rem"}}>
      <div className="row">
        <img style={{borderRadius:"50%", width:"4rem", height:"4rem", marginRight:"0.5rem", marginBottom:"0.5rem"}}  src={profile_picture} alt={`${username}'s icon`}/>
        <span style={{fontSize:"1.25rem"}}>{username}</span>
        {/* star */}
      </div>
      <span>{comment}</span>
    </div>
  )
}

export default Review