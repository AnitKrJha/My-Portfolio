import "../sass/components/navigation.styles.scss";
import Button from "./button.component";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Navigation = () => {
  const navRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let navLinks = document.querySelectorAll(".nav-link");
      let logo = document.querySelector(".logo");

      gsap.from([logo, ...navLinks], { y: -100, opacity:0.5,stagger: 0.1, duration: 0.5 });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex items-center justify-between px-4 py-3 navigation-container nav-hide text-primary bg-main bg-opacity-70 text-3xl fixed top-0 w-full z-[1001]"
      ref={navRef}
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
          gsap.to(e.target, {
            rotate: 360,
            scale: 1.2,
            duration: 1.5,
            ease: "elastic.out",
          });
          gsap.set(e.target, { rotate: 0, scale: 1 });
        }}
      ></div>
    </div>
  );
};

export default Navigation;
