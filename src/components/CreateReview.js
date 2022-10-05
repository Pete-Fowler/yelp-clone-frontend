import React, { useEffect, useState } from "react"
import StarRating from "./StarRating"
import style from "./CreateReview.module.css"
import { useNavigate, useParams } from "react-router-dom";

function CreateReview({ userId, sessionCookie }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [bizName, setBizName] = useState("");
  const [color, setColor] = useState('#FFD56A');

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
        if (rating == 0) {
            return "Select your rating"
        }
        else if (rating == 1) {
            return "Not good"
        }
        else if (rating == 2) {
            return "Could've been better"
        }
        else if (rating == 3) {
            return "OK"
        }
        else if (rating == 4) {
            return "Good"
        }
        else if (rating == 5) {
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

  const starAverage = rating;

  const fullStars = Math.floor(starAverage);

  const starArr = [];

  for(let i = 1; i <= fullStars; i++)
  {
    starArr.push(1);
  }

    if(starAverage < 5) {
    const partialStar = starAverage - fullStars;
    starArr.push(partialStar);
    
    const emptyStars = 5 - starArr.length;
      for(let i=1; i<=emptyStars; i++) {
      starArr.push(0);
      }
    }
  
  const colors = ['#FFD56A', '#FFA448', '#ff7e42', '#ff523d', '#f43939'];

  const starRatingPicker = starArr.map((val, index) => {
    return <div key={index}
    className={style.starBox}
    onClick={() => setRating(index + 1)}
    onMouseEnter={() => {
      setRating(index + 1);
      setColor(colors[index]);
      }
    } 
    onMouseLeave={() => {
      setRating(index + 1);
      setColor(colors[index]);
      }
    }
    style={{background: `linear-gradient(90deg, ${color}, ${color} ${val * 100}%, #bbbac0 ${val * 100}%)`}}>★</div>
  })

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h2>{bizName}</h2>
      <div className={style.textareaBox}>
        <div className={style.rating}> {starRatingPicker}  <p className={style.hoverText}>{hoverRating()}</p></div>
        <textarea type="text" placeholder="I’ve been coming to this place for 3 years now and it’s all you can ask for in a pub with TVs, a jukebox and an outdoor patio. It’s a great spot to catch a Warriors game or just grab drinks with friends. Never been a huge Bloody Mary fan, but after watching the bartender make a few here I had to try one and... wow. They’re legit. The Spicy Mule also gets the job done. Tons of beer on tap, which just adds to the appeal. Head to the back deck and you can kill a whole day before you even realize it." onChange={handleCommentChange} className={style.textbox}/>
      </div>
      <button type="submit" className="red" onSubmit={handleSubmit}>Post Review</button>
    </form>
    )
}

export default CreateReview;