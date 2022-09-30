import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import LoginSignup from './LoginSignup';

function App() {
  const [sessionCookie, setLocalSessionCookie] = useState(localStorage.getItem("sessionCookie"))
  const setSessionCookie = (val) => {setLocalSessionCookie(val); localStorage.setItem("sessionCookie", val)}

  const isLoggedIn = sessionCookie !== null
  console.log(sessionCookie, isLoggedIn)

  return (
    <div className="App col">
      <Header isLoggedIn={isLoggedIn} logOut={()=>{setSessionCookie(null)}}/>
      <Routes>
        <Route path="/" element={<div/>}/>
        <Route path="/login" element={<LoginSignup setSessionCookie={setSessionCookie}/>}/>

        <Route path="/businesses" element={<div/>}/>
        <Route path="/business" element={<div/>}/>
      </Routes>
    </div>
  );
}

export default App;
