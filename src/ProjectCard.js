import Projects from "./Projects";

const ProjectCard = (props) => {
  const { picture1, picture2, picture3 } = props;

  return (
    <div className="col-sm">
      <div className="card">
        <div
          id="carouselExampleIndicators2"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src={picture1} alt="image" />
            </div>
            <div class="carousel-item">
              <img class="w-100" src={picture2} alt="image" />
            </div>
            <div class="carousel-item">
              <img class="w-100" src={picture3} alt="image" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
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
