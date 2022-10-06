import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import style from "./BusinessDetails.module.css"
import Review from "./Review";
import StarRating from "./StarRating";

function BusinessDetails({isLoggedIn, userId, sessionCookie, history, setHistory}) {

  const [bizObject, setBizObject] = useState({reviews:[], })

  const navigate = useNavigate()
  const { id } = useParams();

  const ref = useRef(history);

  useEffect(() => {
    fetch(`http://localhost:9292/business/${id}`)
    .then(r=>r.json()).then((data)=>{
      setBizObject(data)
    })
  }, [id])

  
  useEffect(() => {
    if (history === true) {
    return handleLoad
  }
  else window.scrollTo(0, 0) 
  }, [history])
  

  const handleLoad = () => {
    ref.current &&
   ref.current.scrollIntoView({behavior: 'smooth'});
  };

  const reviewNodes = bizObject.reviews.map(review=>(<Review review={review} key={review.id} userId={userId} sessionCookie={sessionCookie} isLoggedIn={isLoggedIn}/>))

  return (
    <div className="col">
      <div id={style.photoHeader} style={{ background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.75)), url(${bizObject.image_url})`, position:"relative"}}>
        <div className="col" style={{bottom:0, left:0, position:"absolute"}}>
          <h1>{bizObject.name}</h1>
          <span className={style.headerSpan}>{bizObject.reviews.length !== 0 ? <StarRating reviews={bizObject.reviews}/> : null}</span>
          <span className={style.headerSpan}> {bizObject.price} • {bizObject.business_type} </span>
        </div>
      </div>
      <div className="row centered" id={style.page}>
        <div className="col" id={style.mainContent}>
          <div className="row" id={style.controls}>
            <button className="red" onClick={()=>{isLoggedIn? navigate(`/review/${id}`): navigate(`/login`)}}>
              <span role="img"><svg width="24" height="24" className="icon_svg"><path d="M17.87 22a.93.93 0 01-.46-.12L12 19.08l-5.41 2.84a1 1 0 01-1-.08 1 1 0 01-.4-1l1-6-4.39-4.26a1 1 0 01.56-1.7L8.4 8l2.7-5.48a1 1 0 011.8 0L15.6 8l6 .88a1 1 0 01.56 1.7l-4.38 4.27 1 6a1 1 0 01-1 1.17l.09-.02zM12 17c.163.002.323.04.47.11l4.07 2.15-.78-4.54a1 1 0 01.29-.89l3.3-3.21-4.56-.72a1 1 0 01-.79-.54l-2-4.14-2 4.14a1 1 0 01-.75.54l-4.56.67L8 13.78a1 1 0 01.29.89l-.78 4.54 4.07-2.15A1.12 1.12 0 0112 17z"></path></svg></span>
              {isLoggedIn? "Write a review" : "Log In to review"}
            </button>
            <button>
              <span role="img"><svg width="24" height="24" className="icon_svg"><path d="M16 2a1 1 0 01.95.68L17.72 5H20a3 3 0 013 3v11a3 3 0 01-3 3H4a3 3 0 01-3-3V8a3 3 0 013-3h2.28l.77-2.32A1 1 0 018 2h8zm-.72 2H8.72L8 6.32A1 1 0 017 7H4a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1h-3a1 1 0 01-.95-.68L15.28 4zM12 7.5a5.5 5.5 0 015.5 5.5 5.51 5.51 0 01-5.5 5.5 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"></path></svg></span>
              Add photo
            </button>
            <button>
              <span role="img"><svg width="24" height="24" className="icon_svg"><path d="M13 5.414V17a1 1 0 01-2 0V5.414L9.707 6.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L13 5.414zM17 11a1 1 0 010-2h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2v-9a2 2 0 012-2h3a1 1 0 110 2H4v9h16v-9h-3z"></path></svg></span>
              Share
            </button>
            <button>
              <span role="img"><svg width="24" height="24" className="icon_svg"><path d="M19 22a.994.994 0 01-.581-.186L12 17.229l-6.419 4.585A1 1 0 014 21V5a3.003 3.003 0 013-3h10a3.003 3.003 0 013 3v16a1 1 0 01-1 1zm-7-7c.208 0 .412.065.581.187L18 19.056V5a1 1 0 00-1-1H7a1 1 0 00-1 1v14.057l5.419-3.87A.998.998 0 0112 15z"></path></svg></span>
              Save
            </button>
          </div>
          <div ref={ref}>
            <h2 style={{marginTop:"2rem"}}>Recommended Reviews</h2>
            {reviewNodes.reverse()}
          </div>
        </div>
        <div className="col">
          <div className={`col outlineBox`}>
            <h3>Make a Reservation</h3>
            <select style={{width:"100%"}}>
              <option>Mon, Oct 3</option>
            </select>
            <div className="row">
              <select style={{width:"100%"}}>
                <option>7:00 pm</option>
              </select>
              <select style={{width:"100%"}}>
                <option>2 people</option>
              </select>
            </div>
            <button className="red" style={{width:"100%"}}>
              Find a Table
            </button>
          </div>
          <div className={`col outlineBox`}>
            <div className="row">
              <a className="centered" href="/">{bizObject.website}</a>
              <div style={{flex:1}}/>
              <svg width="24" height="24"><path d="M20.47 3.07a.5.5 0 01.53.46v6a.5.5 0 01-.39.49.58.58 0 01-.19 0 .47.47 0 01-.35-.15L17.8 7.6l-5 5a1 1 0 01-1.41 0 1 1 0 010-1.41l5-5-2.27-2.27a.5.5 0 01.35-.85h6zM20 21H4a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 010 2H5v14h14v-5a1 1 0 012 0v6a1 1 0 01-1 1z"></path></svg>
            </div>
            <hr/>
            <div className="row">
              <span className="centered">{bizObject.phone_number}</span>
              <div style={{flex:1}}/>
              <svg width="24" height="24"><path d="M13.59 23.07A7 7 0 018.64 21L3 15.36a7 7 0 010-9.9l1.39-1.41a1 1 0 011.42 0l5 5a1 1 0 010 1.41 2.001 2.001 0 002.83 2.83 1 1 0 011.41 0l4.95 5a1 1 0 010 1.42L18.54 21a7 7 0 01-4.95 2.07zM5.1 6.17l-.71.71a5 5 0 000 7.07l5.66 5.66a5 5 0 007.07 0l.71-.71-3.63-3.63a4 4 0 01-4.86-.61 4 4 0 01-.61-4.86L5.1 6.17zm12.78 5.95a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 6 6 0 016 6 1 1 0 01-1 1zm4.19 0a1 1 0 01-1-1 8.19 8.19 0 00-8.19-8.19 1 1 0 010-2c5.625.006 10.184 4.565 10.19 10.19a1 1 0 01-1 1z"></path></svg>
            </div>
            <hr/>
            <div className="row">
              <div className="col">
                <a href={"https://www.google.com/maps/dir/?api=1&destination=" + bizObject.address}>Get Directions</a>
                <span style={{color:"rgba(110,112,114,1)", fontSize:"16px"}}>{bizObject.address}</span>
              </div>
              <div style={{flex:1}}/>
              <svg width="24" height="24" viewBox="0 0 22 22"><path d="M11 22a3 3 0 01-2.12-.88l-8-8a3 3 0 010-4.24l8-8a3 3 0 014.24 0l8 8a3 3 0 010 4.24l-8 8A3 3 0 0111 22zm0-20a1 1 0 00-.71.29l-8 8a1 1 0 000 1.42l8 8a1 1 0 001.42 0l8-8a1 1 0 000-1.42l-8-8A1 1 0 0011 2zm4.85 8.15a.48.48 0 010 .66l-3 3a.47.47 0 01-.35.15.43.43 0 01-.19 0 .5.5 0 01-.31-.46v-2.05a1 1 0 01-.25.05h-2a1 1 0 00-1 1v1a1 1 0 11-2 0v-1a3 3 0 013-3h2a1 1 0 01.25.05V7.5a.5.5 0 01.31-.5.47.47 0 01.54.15l3 3z"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BusinessDetails