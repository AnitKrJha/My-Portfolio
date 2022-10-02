import FeaturedProject from "./featured.component";
import { useRef,useEffect } from "react";
import LineHeading from "../components/line-heading.component";
import '../sass/components/featured-projects.styles.scss'
const FeaturedProjects = () => {

    

  return (
    <section
      className="featured-projects-directory max-w-[1000px] m-auto mt-20 "
      id="projects" 
    >
      <LineHeading index={"03"}>
        <span className="min-w-max text-2xl lg:text-3xl ">Some Projects</span>
      </LineHeading>

      <FeaturedProject
        heading={"Best Project Ever"}
        tags={["ExpressJs", "NodeJs", "HTML"]}
        gitLink={"a"}
        externalLink={"b"}
        right
      />
      <FeaturedProject
        heading={"Best Project Ever"}
        tags={["ExpressJs", "NodeJs", "HTML"]}
        gitLink={"a"}
        externalLink={"b"}
      />
      <FeaturedProject
        heading={"Best Project Ever"}
        tags={["ExpressJs", "NodeJs", "HTML"]}
        gitLink={"a"}
        externalLink={"b"}
        right
      />
      <FeaturedProject
        heading={"Best Project Ever"}
        tags={["ExpressJs", "NodeJs", "HTML"]}
        gitLink={"a"}
        externalLink={"b"}
      />
      <FeaturedProject
        heading={"Best Project Ever"}
        tags={["ExpressJs", "NodeJs", "HTML"]}
        gitLink={"a"}
        externalLink={"b"}
        right
      />
      <FeaturedProject
        heading={"Best Project Ever"}
        tags={["ExpressJs", "NodeJs", "HTML"]}
        gitLink={"a"}
        externalLink={"b"}
      />
    </section>
  );
};
export default FeaturedProjects;
