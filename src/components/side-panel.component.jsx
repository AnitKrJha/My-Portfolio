import "../sass/components/side-panel.styles.scss";
import Button from "./button.component";

const SidePanel = () => {


    const handleLinkClick =()=>{document
        .querySelector(".side-panel")
        .classList.toggle("side-panel-hide");}


  return (
    <div className=" side-panel side-panel-hide bg-main-700 pt-16 flex flex-col items-center justify-center">
      <a href="#home">
        <li onClick={handleLinkClick} className="nav-link  text-content-200 text-xl py-4 flex flex-col items-center justify-center hover:text-accent-100 hover:cursor-pointer font-['Fira_Mono']">
          <span className="text-accent text-base mx-1">01. </span>Home
        </li>
      </a>
      <a href="#about">
        <li onClick={handleLinkClick} className="nav-link  text-content-200 text-xl py-4 flex flex-col items-center justify-center hover:text-accent-100 hover:cursor-pointer font-['Fira_Mono']">
          <span className="text-accent text-base mx-1">02. </span>About
        </li>
      </a>
      <a href="#experience">
        <li onClick={handleLinkClick} className="nav-link  text-content-200 text-xl py-4 flex flex-col items-center justify-center hover:text-accent-100 hover:cursor-pointer font-['Fira_Mono']">
          <span className="text-accent text-base mx-1">03. </span>Experience
        </li>
      </a>
      <a href="#contact">
        <li onClick={handleLinkClick} className="nav-link  text-content-200 text-xl py-4 flex flex-col items-center justify-center hover:text-accent-100 hover:cursor-pointer font-['Fira_Mono']">
          <span className="text-accent text-base mx-1">04. </span>Contact
        </li>
      </a>
      <li onClick={handleLinkClick} className="nav-link font-['Fira_Mono'] my-12">
          <Button><span className="text-xl ">Resume</span></Button>
        </li>
    </div>
  );
};

export default SidePanel;
