import Select from "react-select";
import { capitalizeFirstLetter } from "../../utils";

const ImageFieldDropDown = ({
  name,
  keys,
  handleChange,
  isRequired,
  defaultValue,
  stateFields,
}) => {
  // console.log("Dropdown keys", keys);
  // console.log("stateFields", stateFields);
  // console.log("name", name);

  return (
    <div className={"imageFieldContainer"}>
      <p>
        {capitalizeFirstLetter(name)}
        {isRequired && " *"}
      </p>
      <Select
        defaultInputValue={defaultValue}
        onChange={(e) => handleChange(e, name)}
        options={keys}
        value={stateFields?.[name].value}
        isClearable
        isSearchable
      />
    </div>
  );
};

export default ImageFieldDropDown;
