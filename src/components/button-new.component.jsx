import "../sass/components/button-new.styles.scss";

const NewButton = ({children}) => {
  return (
    <button class="btn">
      <span>{children}</span>
    </button>
  );
};

export default NewButton;
