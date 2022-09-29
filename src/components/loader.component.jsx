import "../sass/components/loader.styles.scss";
import { ReactComponent as LoadingIcon } from "../assets/icons8-bbb.svg";

const Loader = () => {
  setTimeout(() => {
    document.querySelector(".load").classList.add("hide");
    setTimeout(() => {
      document.querySelector(".App").classList.remove("hide");
    }, 500);
  }, 2000);

  return (
    <div>
      <h1 className="load show">
        <LoadingIcon />
      </h1>
    </div>
  );
};

export default Loader;
