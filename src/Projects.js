import ProjectCard from "./ProjectCard";
import mindOverMatterDash from "./Assets/Images/MindOverMatter/DashBoard.png";
import battleBoggleLogo from "./Assets/Images/BattleBoggle/BattleBoggle.png";
import glife1 from "./Assets/Images/GestureLife/GLifeHome.png"
import glife2 from "./Assets/Images/GestureLife/GLifeSkus.png"


const Projects = () => {
  return (
    <div className="card-deck pt-5 pl-2 ">
      <ProjectCard picture={glife1} title={"Gesture Life"} />
      <ProjectCard picture={mindOverMatterDash} title={"Mind Over Matter"} />
      <ProjectCard picture={battleBoggleLogo} title={"Battle Boggle"}/>
    </div>
  );
};

export default Projects;
