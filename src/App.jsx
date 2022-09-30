import Navigation from "./components/navigation.component";
import About from "./components/about.component";
import Landing from "./components/landing.component";
import Exprerience from "./components/experience.component";
import "./App.css";

function App() {
  return (
    <div className="App hide relative">
      <Navigation />
      <Landing/>
      <About/>
      <Exprerience/>
    </div>
  );
}

export default App;
