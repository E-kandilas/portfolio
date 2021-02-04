import headShot3 from "./Assets/Images/headShot3.jpg";
import aboutText from "./Assets/Text/aboutText";

const AboutMe = () => {
  return (
    <div className="container-xl">
      <div className="row justify-content-center">
        <div className="col-md ">
          <div className="profile-image">
            <img className="" src={headShot3} />
          </div>
        </div>

        <div className="col-xl justify-content-center">
          <h3>Emmanuel Kandilas</h3>
          <p className="text-justify">{aboutText}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
