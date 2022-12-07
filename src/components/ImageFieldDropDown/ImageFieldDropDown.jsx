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

const ImageFieldDropDown = ({
  name,
  keys,
  handleChange,
  isRequired,
  defaultValue,
  stateFields,
}) => {
  const classes = useCustomizedStyle()();

console.log('Dropdown keys', keys)

  return (
    <div className={classes.imageFieldContainer}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {name}
          {isRequired && " *"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={stateFields?.[name].value}
          label={name}
          onChange={(e) => handleChange(e, name)}
          defaultValue={defaultValue}
        >
          {keys.map((oneKey, index) => (
            <MenuItem value={oneKey.value} key={index} >
              {oneKey.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ImageFieldDropDown;
