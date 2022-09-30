import "../sass/components/button.styles.scss";
const Button = ({ children }) => {
  return (
    <button className="button  flex px-4 py-2  text-sm items-center justify-center text-accent border border-accent rounded-md">
      {children}
    </button>
  );
};

export default Button;
