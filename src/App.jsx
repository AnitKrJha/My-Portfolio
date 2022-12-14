import Navigation from "./components/navigation.component";
import About from "./components/about.component";
import Landing from "./components/landing.component";
import Exprerience from "./components/experience.component";
import SidePanel from "./components/side-panel.component";
import OtherProjectDirectory from "./components/project-card-directory.component";
import FeaturedProjects from "./components/featured-projects-directory.component";
import "./App.scss";
import { useEffect } from "react";

function App() {

  

  return (
    <div className="App hide relative md:px-[100px] px-[30px] overflow-x-hidden">
     
      <SidePanel />
      <Landing />
      <About />
      <Exprerience />
      <FeaturedProjects />
      <OtherProjectDirectory />
    </div>
  );
}

export default App;
