import LineHeading from "./line-heading.component";
import { useEffect, useRef } from "react";
import uniqueId from "../utils/uniquekey";
import { ExperienceData } from "./../utils/Data/expereince-data";
import "../sass/components/experience.component.scss";
const Exprerience = () => {
  const exRef = useRef();

  useEffect(() => {
    const Observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          entry.target.classList.remove("experience-container-hide");
        }
      },
      { threshold: 0.2 }
    );

    Observer.observe(exRef.current);
  }, []);

  const handleOnClick = (e) => {
    let buttons = document.querySelectorAll(".tab-btn");
    let tabContent = document.querySelectorAll(".tab-content");
    for (let button of buttons) {
      if (button.classList.contains("active-btn"))
        button.classList.remove("active-btn");
    }
    e.target.classList.add("active-btn");
    let index = e.target.dataset.index;

    for (let tab of tabContent) {
      if (tab.dataset.index == index) {
        tab.classList.remove("h-0");
        tab.classList.remove("opacity-0");
        tab.classList.add("h-full");
        tab.classList.add("opacity-100");
      } else {
        tab.classList.remove("opacity-100");
        tab.classList.remove("h-full");
        tab.classList.add("opacity-0");
        tab.classList.add("h-0");
      }
    }
  };

  return (
    <div
      className="experience-container experience-container-hide pt-12 sm:px-16 h-[60vh] pointer-events-none"
      id="experience"
      ref={exRef}
    >
      <section className="inner-experience max-w-2xl lg:max-w-3xl m-auto">
        <LineHeading index={"02"}>
          {" "}
          <span className="min-w-fit text-2xl lg:text-3xl pointer-events-auto">
            {" "}
            Where I've Worked
          </span>
        </LineHeading>
        <div className="inner flex text-content-300 gap-6 md:gap-12 mt-12 pointer-events-none">
          <ul className="tab-list w-fit flex flex-col gap-3 pt-5 md:justify-start pointer-events-auto">
            {ExperienceData.map((data,index) => {
             
              return (
                <button
                  data-index={`${index}`}
                  className={`w-[85px] flex py-2.5 rounded-l-md rounded-r-xl hover:text-accent border-l-4 border-l-content-300 px-1  md:px-1 items-center ${index===0?'active-btn':''}   tab-btn `}
                  onClick={handleOnClick}
                  key={uniqueId()}
                >
                  {data.company}
                </button>
              );
            })}
          </ul>

          <div className="tab-contents max-h-max pointer-events-auto">
            {ExperienceData.map((data,index) => {
              const { desc } = data;
              return (
                <article
                  className={`${index===0?'h-full':'h-0'} overflow-hidden tab-content `}
                  data-index={`${index}`}
                  key={uniqueId()}
                >
                  <h1 className="role font-bold text-lg md:text-xl ">
                    {desc.jobTitle+" "} 
                    <span className="text-accent text-base sm:text-lg">
                       @{data.company}
                    </span>
                  </h1>
                  <p className="tenure font-['Fira_Sans'] text-sm py-1">
                    {desc.startDate} - {desc.endDate ? desc.endDate : "present"}
                  </p>
                  <ul className="work-points text-sm sm:text-base">
                    {desc.Points.map((point) => {
                      return (
                        <li
                          className="work-point max-w-lg max-h-16 overflow-clip"
                          data-icon="▹"
                          key={uniqueId()}
                        >
                          <span>{point}</span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exprerience;
