import { useCustomizedStyle } from "../style/imageField.js";

const ImageField = ({ name, stateFields, handleChange, isRequired }) => {
  const classes = useCustomizedStyle()();
  return (
    <div className={classes.imageFieldContainer}>
      <div>
        <label htmlFor={name} className={classes.imageFieldLabel}>
          {name}
          {isRequired && " *"}
        </label>
      </div>
      <input
        id={name}
        value={stateFields?.[name].value}
        onChange={(e) => handleChange(e, name)}
        className={classes.imageFieldInput}
      />
    </div>
  );
};

export default ImageField;
