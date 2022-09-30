import "../sass/components/landing.styles.scss";
import Button from "./button.component";
import LeftHandle from "./lefthandle.component";
import AccentHeading from "./accent-heading.component";
const Landing = () => {
  return (
    <div className="landing-container" id="home">
    <section className="h-[93vh] max-w-7xl w-[90%] sm:w-[72%] lg:w-[60%] m-auto flex items-baseline justify-center flex-col gap-5 ">
      <AccentHeading align={"left"}>Hi, I Am </AccentHeading>
      <h1 className="Name text-content-100 text-5xl sm:text-6xl font-bold md:text-6xl lg:text-7xl">
        <span className="styled-name">Anit</span> Jha
      </h1>
      <h1 className="Name text-content-200 text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl">
        I Build things for the web
      </h1>

      <p className="landing-content text-content-300 text-[16.5px]  max-w-lg  mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex, dolor
        libero possimus, suscipit itaque tempore officiis laboriosam eaque
        dignissimos minima facilis veritatis eos eum placeat quos ipsum nulla
        consequatur!
      </p>
      <a href="#about"><Button>Check Out My Profile</Button></a>
      <LeftHandle/>
    </section>
    </div>
  );
};

export default Landing;
