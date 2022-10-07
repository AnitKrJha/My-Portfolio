import { BsFolder } from "react-icons/bs";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "../sass/components/project-card.styles.scss";
const OtherProjectCard = ({ gitLink, externalLink, heading, tags }) => {
  return (
    <div className="card-container flex flex-col w-full text-content-100 bg-main-700 py-8 px-6 gap-6 hover:-translate-y-2 transition-transform cursor-pointer pointer-events-auto">
      <div className="card-top flex gap-2">
        <BsFolder className="mr-auto text-accent  sm:text-4xl text-3xl font-extralightlight" />
        {gitLink && (
          <a href={`${gitLink}`}>
            <FiGithub className=" text-content-200 sm:text-2xl text-xl hover:text-accent hover:-translate-y-1 transition-all" />
          </a>
        )}
        {externalLink && (
          <a href={`${externalLink}`}>
            <FiExternalLink className=" text-content-200 sm:text-2xl text-xl hover:text-accent hover:-translate-y-1 transition-all" />
          </a>
        )}
      </div>
      <div className="card-content">
        <h2 className="project-title text-lg font-bold py-2  hover:text-accent transition-colors">
          {heading}
        </h2>
        <p className="project-desc text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          saepe.
        </p>
      </div>
      <div className="card-foot">
        <ul className="project-tags text-content-300 flex gap-4 font-['Fira_Mono'] text-sm capitalize  transition-colors">
          {tags.map((tag) => {
            return (
              <li className="hover:text-accent hover:scale-105 transition-all" key={tag}>
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OtherProjectCard;
