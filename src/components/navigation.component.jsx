import "../sass/components/navigation.styles.scss";
import Button from "./button.component";

const Navigation = () => {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 navigation-container nav-hide text-primary bg-main bg-opacity-70 text-3xl fixed top-0 w-full z-[1001]"
      onScroll={(e) => {
        
      }}
    >
      <div className="logo text-accent flex items-center">Logo</div>
      <ul className="nav-links  gap-4 text-base items-center hidden sm:flex">
        <a href="#home">
          <li className="nav-link text-content-200 text-sm hover:text-accent-100 hover:cursor-pointer font-['Fira_Mono']">
            <span className="text-accent text-md mx-1">01. </span>Home
          </li>
        </a>
        <a href="#about">
          <li className="nav-link  text-content-200 text-sm hover:text-accent-100 hover:cursor-pointer font-['Fira_Mono']">
            <span className="text-accent text-md mx-1">02. </span>About
          </li>
        </a>
        <a href="#experience">
          <li className="nav-link  text-content-200 text-sm hover:text-accent-100 hover:cursor-pointer font-['Fira_Mono']">
            <span className="text-accent text-md mx-1">03. </span>Experience
          </li>
        </a>
        <a href="#projects">
          {" "}
          <li className="nav-link  text-content-200 text-sm hover:text-accent-100 hover:cursor-pointer font-['Fira_Mono']">
            <span className="text-accent text-md mx-1">04. </span>Projects
          </li>
        </a>
        <li className="nav-link font-['Fira_Mono']">
          <Button>Resume</Button>
        </li>
      </ul>
      <div
        className="hamburger-menu sm:hidden  "
        onClick={(e) => {
          console.log("clicked");
          document
            .querySelector(".side-panel")
            .classList.toggle("side-panel-hide");

          e.target.classList.toggle("hamburger-menu-open");
        }}
      ></div>
    </div>
  );
};

export default Navigation;
