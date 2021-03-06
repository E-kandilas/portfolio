//Import face picture
import headShot3 from "./Assets/Images/headShot3.jpg";

//Import About me Text
import aboutText from "./Assets/Text/aboutText";

//Resume Import
import resume from "./Assets/Text/Emmanuel Kandilas Resume 2021.pdf";

//Sprites Imports
import GitHub from "./Assets/Images/Icons/github-brands.svg";
import Linkedin from "./Assets/Images/Icons/linkedin-brands.svg";
import Resume from "./Assets/Images/Icons/file-alt-solid.svg";
// import Email from "./Assets/Images/Icons/envelope-solid.svg";

const AboutMe = () => {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md ">
        <div className="profile-image">
          <img className="" src={headShot3} />
        </div>
      </div>
      <div className="col-lg about-text">
        <h3 className="change">Welcome, traveler</h3>
        {/* <p className="text-justify text-body pt-3 change">{aboutText}</p> */}
        <div className="text-justify text-body pt-3 change">{aboutText}</div>

        <div className="homepage-links pt-5">
          <a href="https://github.com/E-kandilas" target="_blank">
            <img src={GitHub} className="home-icon" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/manny-kan-code/" target="_blank">
            <img src={Linkedin} className="home-icon" alt="LinkedIn" />
          </a>
          {/* <a href="mailto:ekandilas@gmail.com">
            <img src={Email} className="home-icon" alt="Email" />
          </a> */}
          <a href={resume} target="_blank">
            <img src={Resume} className="home-icon" alt="Resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
