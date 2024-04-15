import profile from "../assets/profile.jpg";
const Person = ({ name, nickName = "shakeAndBake", images }) => {
  // before optional chaining

  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || profile;
  const img = images?.[0]?.small?.url || profile;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
};
export default Person;
