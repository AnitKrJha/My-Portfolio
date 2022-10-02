import Navigation from "./components/navigation.component";
import About from "./components/about.component";
import Landing from "./components/landing.component";
import Exprerience from "./components/experience.component";
import SidePanel from "./components/side-panel.component";
import OtherProjectDirectory from "./components/project-card-directory.component";
import FeaturedProjects from "./components/featured-projects-directory.component";
import "./App.css";

function App() {
  let navbar;
  setTimeout(() => {
    navbar = document.querySelector(".navigation-container");
    console.log(navbar);
    window.addEventListener("wheel", (e) => {
      if (e.wheelDeltaY <= 0) {
        navbar.style.transform = "translateY(-150px)";
      } else {
        navbar.style.transform = "translateY(0px)";
      }
    });
  
  }, 100);

  return (
    <div className="App hide relative md:px-[100px] px-[30px]">
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
