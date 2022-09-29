import "../sass/components/navigation.styles.scss";
import Button from "./button.component";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 navigation-container text-primary bg-main text-3xl">
      <div className="logo text-accent flex items-center">Logo</div>
      <ul className="nav-links  gap-4 text-base items-center hidden sm:flex">
        <li className="nav-link text-content-200 text-sm hover:text-accent-100 hover:cursor-pointer">
          <span className="text-accent text-md mx-1">01. </span>Home
        </li>
        <li className="nav-link  text-content-200 text-sm hover:text-accent-100 hover:cursor-pointer">
          <span className="text-accent text-md mx-1">02. </span>About
        </li>
        <li className="nav-link  text-content-200 text-sm hover:text-accent-100 hover:cursor-pointer">
          <span className="text-accent text-md mx-1">03. </span>Contact
        </li>
        <li className="nav-link  text-content-200 text-sm hover:text-accent-100 hover:cursor-pointer">
          <span className="text-accent text-md mx-1">04. </span>Abcd
        </li>
        <li className="nav-link"><Button>Resume</Button></li>
      </ul>
      <div className="hamburger-menu sm:hidden"></div>
    </div>
  );
};

export default Navigation;
