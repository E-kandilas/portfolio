import headShot3 from "./Assets/Images/headShot3.jpg";
import aboutText from "./Assets/Text/aboutText";

const AboutMe = () => {
  return (
    <div className="container-xl">
      <div className="row justify-content-around">
        <div className="col-md">
          <img className="profile-picture" src={headShot3} />
        </div>

        <div className="col-xl">
          <h3>Emmanuel Kandilas</h3>
          <p className="text-justify">{aboutText}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
