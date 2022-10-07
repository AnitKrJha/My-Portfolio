import "../sass/components/project-card-directory.styles.scss";
import AccentHeading from "../components/accent-heading.component";
import OtherProjectCard from "./project-card.component";
const OtherProjectDirectory = () => {
  return (
    <section className="project-directory mt-20 pointer-events-none" >
      <h1 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl text-content-100 pb-3 pointer-events-auto">
        NoteWorthy Projects
      </h1>
      <AccentHeading align={"center"}>
        {" "}
        <span className="text-base font-['Fira_Mono']">
          Here They Are!
        </span>{" "}
      </AccentHeading>
      <div className="other-project-container xl:max-w-[1024px] lg:max-w-[750px] md:max-w-[600px] max-w-lg px-8 pt-20 sm:px-0  gap-4 ">
        <OtherProjectCard
          gitLink={'a'}
          externalLink="a"
          tags={["express", "nodejs", "css"]}
          heading={"Lorem ipsum donor elinet."}
        />
        <OtherProjectCard
          gitLink={'a'}
          externalLink="a"
          tags={["express", "nodejs", "css"]}
          heading={"Lorem ipsum donor elinet."}
        />
        <OtherProjectCard
          gitLink={'a'}
          externalLink="a"
          tags={["express", "nodejs", "css"]}
          heading={"Lorem ipsum donor elinet."}
        />
        <OtherProjectCard
          gitLink={'a'}
          externalLink="a"
          tags={["express", "nodejs", "css"]}
          heading={"Lorem ipsum donor elinet."}
        />
        <OtherProjectCard
          gitLink={'a'}
          externalLink="a"
          tags={["express", "nodejs", "css"]}
          heading={"Lorem ipsum donor elinet."}
        />
        <OtherProjectCard
          gitLink={'a'}
          externalLink="a"
          tags={["express", "nodejs", "css"]}
          heading={"Lorem ipsum donor elinet."}
        />
      
      </div>
    </section>
  );
};

export default OtherProjectDirectory;
