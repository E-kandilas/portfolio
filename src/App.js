import "./App.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import blossom from "./Assets/Images/ink-plum-blossom.png"

const App = () => {
  return (
    <div className=".container-fluid pt-4">
      <img className="background-img" src={blossom}/>
        <AboutMe />
        <Projects />
    </div>
  );
};

export default App;
