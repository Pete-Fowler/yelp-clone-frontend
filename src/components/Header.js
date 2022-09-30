import { Link } from "react-router-dom";

function Header({isLoggedIn, logOut}) {
  let userArea = (<Link to="/login">Log In</Link>)
  if (isLoggedIn) {
    userArea = ( <button onClick={logOut}> Log Out </button> )
  }

  return (
    <nav className="centered row">
      <Link to="/">Home</Link>
      <Link to="/businesses">Businesses</Link>
      {userArea}
    </nav>
  )
}

export default Header