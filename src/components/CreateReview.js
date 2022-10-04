import React, { useEffect, useState } from "react"
import StarRating from "./StarRating"
import style from "./CreateReview.module.css"
import { useNavigate, useParams } from "react-router-dom";

function CreateReview({userId}) {
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
        }

    fetch("http://localhost:9292/review/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
    .then(r => r.json())
    .then(promisedReview => {
      navigate(`/business/${bizId}`)
    })
  }

  const starRatingPicker = [...Array(5)].map((star, index) => {
    index += 1;
    return (
        <div className={style.star}>
      <button type="button" key={index}
      className={index <= ((rating && hover) || hover ) ? `${style.on}` : `${style.off}` }
      onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}>
        <span>&#9733;</span>
      </button>
      </div>
    );
  })

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h2>{bizName}</h2>
      <div className={style.rating}> {starRatingPicker} </div> <p className={style.hoverText}>{hoverRating()}</p>
      <input type="text" onChange={handleCommentChange} className={style.textbox}/>
      <input type="submit" value="Add Review"  />
    </form>
    )
}


export default CreateReview;