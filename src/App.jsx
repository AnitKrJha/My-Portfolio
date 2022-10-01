import Navigation from "./components/navigation.component";
import About from "./components/about.component";
import Landing from "./components/landing.component";
import Exprerience from "./components/experience.component";
import SidePanel from "./components/side-panel.component";
import OtherProjectDirectory from "./components/project-card-directory.component";
import "./App.css";

function App() {
  return (
    <div className="App hide relative">
      <Navigation />
      <SidePanel/>
      <Landing/>
      <About/>
      <Exprerience/>
      <OtherProjectDirectory/>
    </div>
  );
}

export default App;
