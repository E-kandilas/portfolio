import headShot3 from "./Assets/Images/headShot3.jpg";
import aboutText from "./Assets/Text/aboutText";

//Images Import
import GitHub from "./Assets/Images/Icons/github-brands.svg";
import Linkedin from "./Assets/Images/Icons/linkedin-brands.svg";
import Email from "./Assets/Images/Icons/envelope-solid.svg";
import Resume from "./Assets/Images/Icons/file-alt-solid.svg";

const AboutMe = () => {
  return (
    <div className="content">
      <div className="row justify-content-center">
        <div className="col-md ">
          <div className="profile-image">
            <img className="" src={headShot3} />
          </div>
        </div>

        <div className="col-xl">
          <h3>Welcome</h3>
          <p className="text-justify text-body">{aboutText}</p>
          <div className="homepage-links">
            <a href="https://github.com/E-kandilas" target="_blank">
              <img src={GitHub} className="home-icon" alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/manny-kan-code/"
              target="_blank"
            >
              <img src={Linkedin} className="home-icon" alt="LinkedIn" />
            </a>
            <a href="" target="_blank">
              <img src={Email} className="home-icon" alt="Email" />
            </a>
            <a href="" target="_blank">
              <img src={Resume} className="home-icon" alt="Resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
