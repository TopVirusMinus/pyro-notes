import CSS from "./ColorSelector.module.css";

const ColorSelector = ({ id, backgroundColor, handleClick }) => {
  const handleClickHelper = () => {
    handleClick(id);
  };
  return (
    <div
      key={id}
      className={CSS.color}
      style={{ backgroundColor }}
      onClick={() => handleClickHelper()}
    ></div>
  );
};

export default ColorSelector;
