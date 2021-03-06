import Projects from "./Projects";

const ProjectCard = (props) => {
  const { picture, title, description, deployedLink, repoLink } = props;

  let flags;

  if (!deployedLink && !repoLink) {
    flags = (
      <h6>
        <span className="badge badge-warning">Private Repository</span>
      </h6>
    );
  } else if (!deployedLink && repoLink) {
    flags = (
      <h6>
        <a href={repoLink} target="_blank" className="badge badge-info">
          GitHub
        </a>
      </h6>
    );
  } else {
    flags = (
      <h6>
        <a href={repoLink} target="_blank" className="badge badge-info m-1">
          GitHub
        </a>
        <a href={deployedLink} target="_blank" className="badge badge-success">
          Deployed
        </a>
      </h6>
    );
  }

  return (
    <div className="col-md pt-3">
      <div className="card h-100 bg-light rounded ">
        <img className="card-img-top" src={picture} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5> {flags}
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
