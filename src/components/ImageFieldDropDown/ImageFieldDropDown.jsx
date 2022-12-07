import { useCustomizedStyle } from "./imageFieldDropDown.style";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// REPRENDRE LA YO
// De quoi générer un dropdown
// Un array d'objet avec libellé / value
// une valeur par défaut
// le nom de la key
// {type : "dropdown", name : "language", keys : [{name : "", value : "1"},{name : "", value : "2"}],defaultValue : "2", isRequired : true}

const ImageFieldDropDown = ({ name, keys, handleChange, isRequired, defaultValue }) => {
  const classes = useCustomizedStyle()();
  return (
    <div className={classes.imageFieldContainer}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={name}
          onChange={handleChange}
        >
          {keys.map((oneKey) => (
            <MenuItem value={oneKey.value} key={oneKey.value}>
              {oneKey.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <div>
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
      /> */}
    </div>
  );
};

export default ImageFieldDropDown;
