import Select from "react-select";

// REPRENDRE LA YO
// De quoi générer un dropdown
// Un array d'objet avec libellé / value
// une valeur par défaut
// le nom de la key
// {type : "dropdown", name : "language", keys : [{label : "", value : "1"},{label : "", value : "2"}],defaultValue : "2", isRequired : true}

const ImageFieldDropDown = ({
  name,
  keys,
  handleChange,
  isRequired,
  defaultValue,
  stateFields,
}) => {
  console.log("Dropdown keys", keys);

  return (
    <div className={"imageFieldContainer"}>
      <p>
        {name}
        {isRequired && " *"}
      </p>
      <Select
        defaultValue={defaultValue}
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
