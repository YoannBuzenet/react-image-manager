import Select from "react-select";
import { ReactSelectObject } from "../../../index";
import { capitalizeFirstLetter } from "../../utils";

type ImageFieldDropDownProps = {
  name: string;
  keys: ReactSelectObject[];
  handleChange: (e, name) => void;
  isRequired: boolean;
  stateFields: Record<string, any>;
};

const ImageFieldDropDown = ({
  name,
  keys,
  handleChange,
  isRequired,
  stateFields,
}: ImageFieldDropDownProps) => {
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
