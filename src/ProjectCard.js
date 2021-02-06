import Projects from "./Projects";

const ProjectCard = (props) => {
  const { picture } = props;

  return (
    <div className="col-md pt-5">
      <div className="card">
        <img className="card-img-top" src={picture} />
        <div className="card-body">
          <h5 className="card-title">Mind Over Matter</h5>
          <p className="card-text">Sphynx of black quartz judge my vow</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
