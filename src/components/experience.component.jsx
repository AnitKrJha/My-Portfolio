import LineHeading from "./line-heading.component";
import "../sass/components/experience.component.scss";
const Exprerience = () => {
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
        tab.classList.add("h-full");
        tab.classList.remove("h-0");
      } else {
        tab.classList.remove("h-full");
        tab.classList.add("h-0");
      }
    }
  };

  return (
    <div className="experience-container h-[70vh] pt-12 sm:px-16   bg-main ">
      <section className="inner-experience max-w-2xl lg:max-w-3xl m-auto">
        <LineHeading index={"02"}>
          {" "}
          <span className="min-w-fit text-2xl lg:text-3xl">
            {" "}
            Where I've Worked
          </span>
        </LineHeading>
        <div className="inner flex text-content-300 gap-6 md:gap-12 mt-12 px-6">
          <ul className="tab-list w-fit flex flex-col gap-2 md:justify-start">
            <button
              data-index="0"
              className="w-[85px] flex py-1 px-1 md:px-3 items-center   active-btn tab-btn"
              onClick={handleOnClick}
            >
              Amazon
            </button>
            <button
              data-index="1"
              className="w-[85px] flex py-1 px-1 md:px-3 items-center    tab-btn"
              onClick={handleOnClick}
            >
              Google
            </button>
            <button
              data-index="2"
              className="w-[85px] flex py-1 px-1 md:px-3 items-center    tab-btn"
              onClick={handleOnClick}
            >
              Microsoft
            </button>
            <button
              data-index="3"
              className="w-[85px] flex py-1 px-1 md:px-3 items-center    tab-btn"
              onClick={handleOnClick}
            >
              xLance
            </button>
            <button
              data-index="4"
              className="w-[85px] flex py-1 px-1 md:px-3 items-center    tab-btn"
              onClick={handleOnClick}
            >
              NSUT
            </button>
          </ul>
          <div className="tab-contents">
            <article
              className="h-full overflow-hidden tab-content "
              data-index="0"
            >
              <h1 className="role font-bold text-lg md:text-xl ">
                Software Engineer <span className="text-accent text-base sm:text-lg">@Amazon</span>
              </h1>
              <p className="tenure font-['Fira_Sans'] text-sm py-1">
                2 October - 3 October
              </p>
              <ul className="work-points text-sm sm:text-base">
                <li className="work-point max-w-lg max-h-16 overflow-clip" data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil?</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde.</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                  <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab.</span>
                </li>
              </ul>
            </article>
            <article
              className="h-0 overflow-hidden tab-content "
              data-index="1"
            >
             <h1 className="role font-bold text-lg md:text-xl">
                Software Engineer <span className="text-accent text-base sm:text-lg">@Google</span>
              </h1>
              <p className="tenure font-['Fira_Sans'] text-sm py-1">
                2 October - 3 October
              </p>
              <ul className="work-points text-sm sm:text-base">
                <li className="work-point max-w-lg max-h-16 overflow-clip" data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil?</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde.</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                  <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab.</span>
                </li>
              </ul>
            </article>
            <article
              className="h-0 overflow-hidden tab-content "
              data-index="2"
            >
             <h1 className="role font-bold text-lg md:text-xl ">
                Data Analyst <span className="text-accent text-base sm:text-lg">@Microsoft</span>
              </h1>
              <p className="tenure font-['Fira_Sans'] text-sm py-1">
                2 October - 3 October
              </p>
              <ul className="work-points text-sm sm:text-base">
                <li className="work-point max-w-lg max-h-16 overflow-clip" data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil?</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde.</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                  <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab.</span>
                </li>
              </ul>
            </article>
            <article
              className="h-0 overflow-hidden tab-content "
              data-index="3"
            >
             <h1 className="role font-bold text-lg md:text-xl ">
                Intern <span className="text-accent text-base sm:text-lg">@xLance</span>
              </h1>
              <p className="tenure font-['Fira_Sans'] text-sm py-1">
                2 October - 3 October
              </p>
              <ul className="work-points text-sm sm:text-base">
                <li className="work-point max-w-lg max-h-16 overflow-clip" data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil?</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde.</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                  <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab.</span>
                </li>
              </ul>
            </article>
            <article
              className="h-0 overflow-hidden tab-content "
              data-index="4"
            >
             <h1 className="role font-bold text-lg md:text-xl ">
                Instructor <span className="text-accent text-base sm:text-lg">@NSUT</span>
              </h1>
              <p className="tenure font-['Fira_Sans'] text-sm py-1">
                2 October - 3 October
              </p>
              <ul className="work-points text-sm sm:text-base">
                <li className="work-point max-w-lg max-h-16 overflow-clip" data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil?</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde.</span>
                </li>
                <li className="work-point max-w-lg " data-icon="▹">
                  <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, ipsam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab.</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exprerience;
