import React, { useEffect, useState } from "react"
import StarRating from "./StarRating"
import style from "./CreateReview.module.css"
import { useNavigate, useParams } from "react-router-dom";

function CreateReview({ userId, sessionCookie }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [comment, setComment] = useState('')
  const [bizName, setBizName] = useState("")

  const { bizId } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:9292/business/${bizId}`)
    .then(r=>r.json()).then((data)=>{
      setBizName(data.name)
    })
  }, [bizId])

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
            "user_id": userId,
            "business_id": bizId,
            "comment": comment,
            "star_rating": rating,
            "session_cookie": sessionCookie
        }

        console.log(newReview)

    fetch("http://localhost:9292/review/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
    .then(r => r.json())
    .then(newReview => {
      navigate(`/business/${bizId}`)
    })
  }

  const percent = hover /5 * 100

  const gradient = {background: `linear-gradient(90deg, #ff643d, #ff643d ${percent}%, #bbbac0 ${percent}%)`};

  const starRatingPicker = [...Array(5)].map((star, index) => {
    index += 1;
    return (
        <div>
      <button type="button" key={index}
      className={index <= ((rating && hover) || hover ) ? `${style.starBox}` : `${style.starBox}` }
      onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}>
        <div >★</div>
      </button>
      </div>
    );
  })

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h2>{bizName}</h2>
      <div className={style.rating} style={gradient}> {starRatingPicker} </div> <p className={style.hoverText}>{hoverRating()}</p>
      <textarea type="text" placeholder="I’ve been coming to this place for 3 years now and it’s all you can ask for in a pub with TVs, a jukebox and an outdoor patio. It’s a great spot to catch a Warriors game or just grab drinks with friends. Never been a huge Bloody Mary fan, but after watching the bartender make a few here I had to try one and... wow. They’re legit. The Spicy Mule also gets the job done. Tons of beer on tap, which just adds to the appeal. Head to the back deck and you can kill a whole day before you even realize it." onChange={handleCommentChange} className={style.textbox}/>
      <input type="submit" value="Post Review"  />
    </form>
    )
}


export default CreateReview;