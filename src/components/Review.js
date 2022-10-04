function Review({review:{comment, star_rating, user}}) {
  console.log(user)
  const {username, profile_picture} = user
  return (
    <div className="col" style={{margin:"1rem 0rem"}}>
      <div className="row">
        <img style={{borderRadius:"50%", width:"5rem"}}  src={profile_picture} alt={`${username}'s icon`}/>
        <span style={{fontSize:"1.5rem"}}>{username}</span>
      </div>
      {/* add star rating component here */}
      <span>{comment}</span>
    </div>
  )
}

export default Review