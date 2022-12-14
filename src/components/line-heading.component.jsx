import "../sass/components/line-heading.styles.scss";

const LineHeading = ({ children,index }) => {
  return (
    <h1 className="line-heading flex gap-6 text-content-100">
      <span className="index text-accent">{index}.</span>
      {children}
      <div className="line h-[2px] bg-content-300"></div>
    </h1>
  );
};
export default LineHeading;