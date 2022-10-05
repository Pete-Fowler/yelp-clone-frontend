import { render } from "@testing-library/react"
import React from "react"
import StarRating from "./StarRating"

function Review({review:{comment, star_rating, user}}) {
  const {username, profile_picture} = user

  const starArray = Array(star_rating).fill(1)

  let index = 0

  const results = starArray.map((star) => {
    return <span key={index ++} className='star-average'>&#9733;</span>
  })

  return (
    <div className="col" style={{margin:"1rem 0rem"}}>
      <div className="row">
        <img style={{borderRadius:"50%", width:"4rem", height:"4rem", marginRight:"0.5rem", marginBottom:"0.5rem"}}  src={profile_picture} alt={`${username}'s icon`}/>
        <span style={{fontSize:"1.25rem"}}>{username}</span>
        <span>{results}</span>
      </div>
      <span>{comment}</span>
    </div>
  )
}

export default Review