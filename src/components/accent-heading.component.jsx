import "../sass/components/accent-heading.styles.scss";

const AccentHeading = ({ children, align }) => {
  return (
    <h2
      className={`heading-accent ${
        align === "left" ? "heading-accent-left" : "heading-accent-center"
      } `}
    >
      {children}
    </h2>
  );
};

export default AccentHeading;