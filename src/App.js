import "./App.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="App">
      <div className="main-container">
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
};

export default App;
