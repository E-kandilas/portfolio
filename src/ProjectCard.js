import Projects from "./Projects";

const ProjectCard = (props) => {
  const { picture1, picture2, picture3 } = props;

  return (
    <div className="col-sm">
      <div className="card">
        <div
          id="carouselExampleIndicators2"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={picture1} alt="image" />
            </div>
            <div className="carousel-item">
              <img className="w-100" src={picture2} alt="image" />
            </div>
            <div className="carousel-item">
              <img className="w-100" src={picture3} alt="image" />
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title">Mind Over Matter</h5>
            <p className="card-text">Sphynx of black quartz judge my vow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
