import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import BusinessDetails from './BusinessDetails';
import Header from './Header';
import LoginSignup from './LoginSignup';
import CreateReview from './CreateReview';
import SearchResults from './SearchResults';
import Footer from './footer';
import Home from './Home';
import StarRating from './StarRating';
import Review from './Review';

function App() {
  const [sessionCookie, setSessionCookie] = useState(JSON.parse(localStorage.getItem("sessionCookie")))
  useEffect(() => { localStorage.setItem("sessionCookie", JSON.stringify(sessionCookie));
  }, [sessionCookie]);
  const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("userId")))
  useEffect(() => { localStorage.setItem("userId", userId == null? "0" : JSON.stringify(userId));
  }, [userId]);

  const isLoggedIn = sessionCookie !== null

  return (
    <div className="App col">
      <Header isLoggedIn={isLoggedIn} logOut={()=>{setSessionCookie(null)}}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginSignup setSessionCookie={setSessionCookie} isLogin={true} setUserId={setUserId}/>}/>
        <Route path="/signup" element={<LoginSignup setSessionCookie={setSessionCookie} isLogin={false} setUserId={setUserId}/>}/>
        <Route path="/businesses" element={<div/>}/>

        <Route path="/review/:bizId" element={<CreateReview userId={userId} sessionCookie={sessionCookie}/>}/>
        <Route path="/search/:term" element={<SearchResults/>} />
        <Route path="/business/:id" element={<BusinessDetails isLoggedIn={isLoggedIn} userId={userId} sessionCookie={sessionCookie}/>} />
        <Route path="/starrating/" element={<StarRating />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
