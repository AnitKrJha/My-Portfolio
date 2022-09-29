import Navigation from "./components/navigation.component";
import About from "./components/about.component";
import Landing from "./components/landing.component";
import "./App.css";

function App() {
  return (
    <div className="App hide relative">
      <Navigation />
      <Landing/>
      <About/>
    </div>
  );
}

export default App;
