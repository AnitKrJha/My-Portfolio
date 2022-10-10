import FeaturedProject from "./featured.component";
import { FeaturedProjectsData } from "../utils/featured-project-data";
import uniqueId from '../utils/uniquekey'
import LineHeading from "../components/line-heading.component";
import "../sass/components/featured-projects.styles.scss";
const FeaturedProjects = () => {
  return (
    <section
      className="featured-projects-directory max-w-[1000px] m-auto mt-20 pointer-events-none"
      id="projects"
    >
      <LineHeading index={"03"}>
        <span className="min-w-max text-2xl lg:text-3xl pointer-events-auto">
          Some Projects
        </span>
      </LineHeading>

      {FeaturedProjectsData.map((project) => {
        return (
          <FeaturedProject
            heading={project.title}
            tags={project.tags}
            gitLink={project.gitLink}
            externalLink={project.externalLink}
            imgURL={project.imgURL}
            key={uniqueId()}
            desc={project.desc}
            right={FeaturedProjectsData.indexOf(project)%2===0}
          />
        );
      })}
    </section>
  );
};
export default FeaturedProjects;
