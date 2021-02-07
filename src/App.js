import "./App.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import blossom from "./Assets/Images/ink-plum-blossom.png";

const App = () => {

  return (
    <>
      <div className="welcome-page row h-100 align-items-center">
        <div className="col-xl pb-5">
          <p>Welcome to my page</p>
          <p>Simple, the beauty of code</p>
          <p>Please, stay a while</p>
        </div>
      </div>
      <div className="container-fluid pt-5 snow-bg ">
        <img className="background-img" src={blossom} />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
};

export default App;
