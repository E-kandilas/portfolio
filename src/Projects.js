import ProjectCard from "./ProjectCard";
import mindOverMatterDash from "./Assets/Images/MindOverMatter/DashBoard.png";

const Projects = () => {
  return (
    <div className="row">
      <ProjectCard
        picture1={mindOverMatterDash}
        picture2={mindOverMatterDash}
        picture3={mindOverMatterDash}
      />
      <ProjectCard
        picture1={mindOverMatterDash}
        picture2={mindOverMatterDash}
        picture3={mindOverMatterDash}
      />
      <ProjectCard
        picture1={mindOverMatterDash}
        picture2={mindOverMatterDash}
        picture3={mindOverMatterDash}
      />
    </div>
  );
};

export default Projects;
