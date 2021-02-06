import ProjectCard from "./ProjectCard";
import mindOverMatterDash from "./Assets/Images/MindOverMatter/DashBoard.png";

const Projects = () => {
  return (
    <div className="card-deck pt-5 ">
      <ProjectCard picture={mindOverMatterDash} />
      <ProjectCard picture={mindOverMatterDash} />
      <ProjectCard picture={mindOverMatterDash} />
    </div>
  );
};

export default Projects;
