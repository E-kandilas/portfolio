//Component Imports
import ProjectCard from "./ProjectCard";

//Image Imports
import mindOverMatterDash from "./Assets/Images/Projects/DashBoard.png";
import battleBoggleLogo from "./Assets/Images/Projects/BattleBoggle.png";
import glife1 from "./Assets/Images/Projects/GLifeHome.png";

//Description Imports
import gLifeDescription from "./Assets/Text/GestureLifeText";
import mindOverMatterText from "./Assets/Text/MindOverMatterText";
import BattleBoggleText from "./Assets/Text/BattleBoggleText";

const Projects = () => {
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
        description={mindOverMatterText}
        deployedLink={"https://mind-over-matter.herokuapp.com/"}
        repoLink={"https://github.com/FullstackHeroes/Mind-Over-Matter"}
      />
      <ProjectCard
        picture={battleBoggleLogo}
        title={"Battle Boggle"}
        description={BattleBoggleText}
        deployedLink={null}
        repoLink={"https://github.com/ZeroSumGames/BattleBoggle"}
      />
    </div>
  );
};

export default Projects;
