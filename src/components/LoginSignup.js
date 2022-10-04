import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginSignup({setSessionCookie, isLogin}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [errorText, setErrorText] = useState("")

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (username==="")
    { setErrorText("Username must be filled"); return }
    else if (password.length < 6)
    { setErrorText("Password must be atleast 6 characters in length"); return }
    else
    { setErrorText("") }

    fetch(`http://localhost:9292/${isLogin?"login":"signup"}`,{
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(r=>r.json()).then((data)=>{
      if (typeof data == "string") {
        setErrorText(data)
      } else {
        // send user back to home
        setSessionCookie(data["session_cookie"])
        navigate("/")
      }
    })
  }

  return (
    <div className="row centered">
      <form className="centered col" onSubmit={handleSubmit} style={{marginRight:"2rem"}}>
        <label htmlFor="username">Username</label>
        <input onChange={(e)=>{setUsername(e.target.value)}} value={username} name="username" type="text"/>

        <label htmlFor="password">Password</label>
        <input onChange={(e)=>{setPassword(e.target.value)}} value={password} name="password" type="password" style={{marginBottom:"1rem"}}/>

        <span style={{color:"red"}}>{errorText}</span>

        <button className="red" type="submit">{isLogin?"Log In":"Sign Up"}</button>

        <span>
          {isLogin?"New to Yelp? ":"Already on Yelp? "}
          <span style={{color:"#1a0dab", textDecoration:"underline"}} onClick={ () => {isLogin? navigate("/signup"):navigate("/login") } }>{isLogin?"Sign Up":"Log In"}</span>
        </span>
      </form>
      <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"/>
    </div>
  )
}

export default LoginSignup