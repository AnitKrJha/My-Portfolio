import "../sass/components/featured.styles.scss";
import { useRef, useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import AccentHeading from "../components/accent-heading.component";
const FeaturedProject = ({
  heading,
  tags,
  right,
  gitLink,
  externalLink,
  imgURL,
  desc,
}) => {
  const featuredRef = useRef();

  useEffect(() => {
    const Observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          entry.target.classList.remove("featured-projects-directory-hide");
        }
      },
      { threshold: 0.5 }
    );

    Observer.observe(featuredRef.current);
  }, []);

  return (
    <div
      className="featured-container w-full relative featured-projects-directory-hide grid grid-cols-12 gap-2 bg-transparent  pointer-events-none"
      ref={featuredRef}
    >
      <div className="featured-image flex items-center">
        <img
          src={`${
            imgURL
              ? imgURL
              : `https://picsum.photos/id/${Math.floor(
                  Math.random() * 1000
                )}/800/500`
          }`}
          alt=""
          className="overflow-hidden  feature-image opacity-70 hover:opacity-95 transition duration-300"
        />
      </div>

      <div
        className={`featured-content  text-content-300 flex flex-col items-center gap-6 md:gap-2 md:m-auto justify-center ${
          right ? "md:text-right" : "md:text-left"
        } text-left px-2 py-4 pointer-events-auto`}
      >
        <AccentHeading>
          <span
            className={`${
              right ? "md:text-right" : "md:text-left"
            } text-left block text-sm md:text-xs`}
          >
            Featured Project
          </span>
        </AccentHeading>
        <h1
          className={`heading ${
            right ? "md:text-right" : "md:text-left"
          } text-left w-full font-bold text-xl text-content-100`}
        >
          {heading}
        </h1>
        <div className="content  bg-main-700 px-2 py-4 rounded-md">{desc}</div>
        <ul
          className={`tags flex ${right?'justify-end':'justify-start' } gap-2 w-full`}
        >
          {tags.map((tag) => {
            return (
              <li className="tag" key={tag}>
                {tag}
              </li>
            );
          })}
        </ul>

        <ul
          className={`tags flex ${right?'justify-end':'justify-start' } gap-2 w-full mt-2 md:mt-6`}
        >
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
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProject;
