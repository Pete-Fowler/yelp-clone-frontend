import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import LoginSignup from './LoginSignup';
import CreateReview from './CreateReview';
import StarRating from './StarRating';

function App() {
  const [sessionCookie, setSessionCookie] = useState(JSON.parse(localStorage.getItem("sessionCookie")))
  useEffect(() => { localStorage.setItem("sessionCookie", JSON.stringify(sessionCookie));
  }, [sessionCookie]);
  

  const isLoggedIn = sessionCookie !== null

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/")
    .then((response) => response.json())
    .then((data) => setReviews(data));
}, []);

function addReview(newReview) {
    setReviews([...reviews, newReview])
}

  return (
    <div className="App col">
      <Header isLoggedIn={isLoggedIn} logOut={()=>{setSessionCookie(null)}}/>
      <Routes>
        <Route path="/" element={<div/>}/>
        <Route path="/login" element={<LoginSignup setSessionCookie={setSessionCookie}/>}/>

        <Route path="/businesses" element={<div/>}/>
        <Route path="/business" element={<div/>}/>
        <Route path="/review" element={<CreateReview  addReview={addReview} />}/>
      </Routes>
      <StarRating />
    </div>
  );
}

export default App;
