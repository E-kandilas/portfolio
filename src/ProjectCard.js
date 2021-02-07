import Projects from "./Projects";

const ProjectCard = (props) => {
  const { picture, title, description } = props;

  return (
    <div className="col-md pt-3">
      <div className="card h-100 bg-light rounded ">
        <img className="card-img-top" src={picture} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
