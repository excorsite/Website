// Click event = An interaction when a user clicks onn a specific element
// we can respond to click by passing a callback to the onClick event handler.

function ProfilePicture() {
  const imageUrl = "./src/assets/profile.jpg";

  const handleClick = (e) => (e.target.style.display = "none");

  return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
}

export default ProfilePicture;
