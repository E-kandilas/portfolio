import ProjectCard from "./ProjectCard";
import mindOverMatterDash from "./Assets/Images/Projects/DashBoard.png";
import battleBoggleLogo from "./Assets/Images/Projects/BattleBoggle.png";
import glife1 from "./Assets/Images/Projects/GLifeHome.png"


const Projects = () => {
  return (
    <div className="card-deck pt-5 pl-2 w-75">
      <ProjectCard picture={glife1} title={"Gesture Life"} />
      <ProjectCard picture={mindOverMatterDash} title={"Mind Over Matter"} />
      <ProjectCard picture={battleBoggleLogo} title={"Battle Boggle"}/>
    </div>
  );
};

export default Projects;
