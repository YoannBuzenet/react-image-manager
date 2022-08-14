import { useCustomizedStyle } from "../style/imageField.js";

const ImageField = ({ name, stateFields, handleChange }) => {
  const classes = useCustomizedStyle()();
  return (
    <div className={classes.imageFieldContainer}>
      <div>
        <label htmlFor={name} className={classes.imageFieldLabel}>
          {name}
        </label>
      </div>
      <input
        id={name}
        value={stateFields?.[name]}
        onChange={(e) => handleChange(e, name)}
        className={classes.imageFieldInput}
      />
    </div>
  );
};

export default ImageField;
