//Component Imports
import ProjectCard from "./ProjectCard";

//Image Imports
import mindOverMatterDash from "./Assets/Images/Projects/DashBoard.png";
import battleBoggleLogo from "./Assets/Images/Projects/BattleBoggle.png";
import glife1 from "./Assets/Images/Projects/GLifeHome.png";

//Description Imports


const Projects = () => {
  const gLifeDescription = `An internal administrative application built for Gesture Inc. Using React,
  Express, and Firebase`;

  const mindOverMatterDescription = `Mindfulness application providing dynamic real-time charts using data gathered facial expressions`;

  const battleBoggleDescription = `Live interpretation of the family classic Boggle with touch functionality and user competition`;

  return (
    <div className="row pt-5 pb-4 col-lg-11 mx-auto ">
      <ProjectCard
        picture={glife1}
        title={"Gesture Life"}
        description={gLifeDescription}
      />
      <ProjectCard
        picture={mindOverMatterDash}
        title={"Mind Over Matter"}
        description={mindOverMatterDescription}
      />
      <ProjectCard
        picture={battleBoggleLogo}
        title={"Battle Boggle"}
        description={battleBoggleDescription}
      />
    </div>
  );
};

export default Projects;
