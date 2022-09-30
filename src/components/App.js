import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import LoginSignup from './LoginSignup';

function App() {
  const [sessionCookie, setSessionCookie] = useState(JSON.parse(localStorage.getItem("sessionCookie")))
  useEffect(() => { localStorage.setItem("sessionCookie", JSON.stringify(sessionCookie));
  }, [sessionCookie]);

  const isLoggedIn = sessionCookie !== null

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
