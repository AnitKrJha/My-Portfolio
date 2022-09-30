import LineHeading from "../components/line-heading.component";
import "../sass/components/about.styles.scss";
const About = () => {
  return (
    <section className="about-me-container min-h-[75vh] py-16 "id="about">
      <div className="inner-container lg:w-[65%] md:w-[75%] w-[90%] px-0 md:px-0 m-auto  flex flex-col md:flex-row md:gap-16 gap-10  items-center md:items-stretch md:justify-around">
        <div className="about-left max-w-lg  ">
          <LineHeading index={"01"}>
            <span className="min-w-max text-2xl lg:text-3xl">About Me</span>
          </LineHeading>
          <p className="about-content  lg:text-[17px] text-content-300 mb-2 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            autem, atque ea quia aut eius nisi cum harum non? Sint distinctio
            officia voluptates laboriosam accusantium numquam vero praesentium
            earum eum.
          </p>
          <p className="about-content text-base lg:text-[17px] text-content-300 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab amet
            aperiam aspernatur mollitia ex sapiente aut ea recusandae. Saepe
            dolorum unde nisi, repellendus incidunt ea repudiandae debitis quia.
            Impedit.
          </p>
          <p className="about-content lg:text-[17px] text-content-300 mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            labore, laborum, corrupti laboriosam nemo inventore eius eum, cumque
            repellat officiis suscipit delectus! Nobis dignissimos modi eum,
            quaerat labore recusandae. Quod!
          </p>
          <p className="text-content-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, tempora!</p>

            <div className="tech-stack grid grid-rows-3 grid-cols-2 font-['Fira_Mono'] gap-x-4 text-content-200 mt-4">
                <li data-icon="▹" >Node.js</li>
                <li data-icon="▹" >Jekyll</li>
                <li data-icon="▹" >Hugo</li>
                <li data-icon="▹" >ExpressJs</li>
                <li data-icon="▹" >Python</li>
                <li data-icon="▹" >Javascript</li>
            </div>

        </div>
        <div className="about-right-image flex items-start mt-16 min-w-[250px] max-w-xs">
            <img src="https://www.picsum.photos/400/400" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
