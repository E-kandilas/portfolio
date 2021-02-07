import ProjectCard from "./ProjectCard";
import mindOverMatterDash from "./Assets/Images/Projects/DashBoard.png";
import battleBoggleLogo from "./Assets/Images/Projects/BattleBoggle.png";
import glife1 from "./Assets/Images/Projects/GLifeHome.png";

const Projects = () => {
  const gLifeDescription = `An internal administrative application built for Gesture Inc. Using React,
  Express, and Firebase`;
  return (
    <div className="row pt-5 col-lg-9 mx-auto">
      <ProjectCard
        picture={glife1}
        title={"Gesture Life"}
        description={gLifeDescription}
      />
      <ProjectCard picture={mindOverMatterDash} title={"Mind Over Matter"} />
      <ProjectCard picture={battleBoggleLogo} title={"Battle Boggle"} />
    </div>
  );
};

export default Projects;
