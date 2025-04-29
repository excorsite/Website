import profile from "./assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profile} alt="Profile picture" />
      <h2 className="card-title">Luffy</h2>
      <p className="card-text">
        My name is Monkey D. Luffy. I am going to become a pirate king one day.
        I love to eat meat.My dreams is to me a pirate king.
      </p>
    </div>
  );
}

export default Card;
