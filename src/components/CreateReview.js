import React, { useEffect, useState } from "react";
import StarRatingPicker from "./StarRatingPicker";
import style from "./CreateReview.module.css";
import { useNavigate, useParams } from "react-router-dom";

function CreateReview({ userId, sessionCookie, setHistory }) {
  const url = process.env.REACT_APP_URL;

  const [rating, setRating] = useState(0);
  const [color, setColor] = useState("#FFD56A");
  const [comment, setComment] = useState("");
  const [bizName, setBizName] = useState("");

  const { bizId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/businesses/${bizId}`)
      .then((r) => r.json())
      .then((data) => {
        setBizName(data.name);
      });
  }, [bizId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newReview = {
      user_id: userId,
      business_id: bizId,
      comment: comment,
      star_rating: rating,
      session_cookie: sessionCookie,
    };

    fetch(`${url}/review/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then(setHistory(true))
      .then((newReview) => {
        navigate(`/businesses/${bizId}`);
      });
  }

  // Passed to StarRatingPicker to update state
  function rate(value) {
    setRating(value);
  }

  // Passed to StarRatingPicker to update state
  function changeColor(value) {
    setColor(value);
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h2>{bizName}</h2>
      <div className={style.textareaBox}>
        <StarRatingPicker
          rate={rate}
          rating={rating}
          changeColor={changeColor}
          color={color}
          parent={"createReview"}
        />
        <textarea
          type="text"
          placeholder="I’ve been coming to this place for 3 years now and it’s all you can ask for in a pub with TVs, a jukebox and an outdoor patio. It’s a great spot to catch a Warriors game or just grab drinks with friends. Never been a huge Bloody Mary fan, but after watching the bartender make a few here I had to try one and... wow. They’re legit. The Spicy Mule also gets the job done. Tons of beer on tap, which just adds to the appeal. Head to the back deck and you can kill a whole day before you even realize it."
          onChange={handleCommentChange}
          className={style.textbox}
        />
      </div>
      <button type="submit" className="red" onSubmit={handleSubmit}>
        Post Review
      </button>
    </form>
  );
}

export default CreateReview;
