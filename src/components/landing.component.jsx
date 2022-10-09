import "../sass/components/landing.styles.scss";
import Button from "./button.component";
import NewButton from "./button-new.component";
import LeftHandle from "./lefthandle.component";
import AccentHeading from "./accent-heading.component";
import { CreateRain } from "./../utils/matrix-rain";
import { Constellation } from "../utils/constellation";
import { useEffect } from "react";
const Landing = () => {
  useEffect(() => {
    CreateRain();
    Constellation();
  }, []);

  return (
    <div className="landing-container relative pointer-events-none" id="home">
      <LeftHandle />
      <section className="h-[93vh] max-w-7xl w-[100%] sm:w-[92%] lg:w-[80%] m-auto flex items-baseline justify-center flex-col gap-5 landing-section ">
        <AccentHeading align={"left"}>Hi, I Am </AccentHeading>
        <h1 className="Name text-content-100 text-5xl sm:text-6xl font-bold md:text-6xl lg:text-7xl pointer-events-auto">
          <span className="styled-name">Anit</span> Jha
        </h1>
        <h1 className="Name text-content-200 text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl pointer-events-auto">
          I Build things for the web
        </h1>

        <p className="landing-content text-content-300 text-[16.5px]  max-w-lg  mb-5 pointer-events-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex, dolor
          libero possimus, suscipit itaque tempore officiis laboriosam eaque
          dignissimos minima facilis veritatis eos eum placeat quos ipsum nulla
          consequatur!
        </p>
        <a href="#about" className="pointer-events-auto">
          {/* <Button>Check Out My Profile</Button> */}
          <NewButton>Contact Me</NewButton>
        </a>
        
      </section>
    </div>
  );
};

export default Landing;
