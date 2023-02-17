type ImageFieldProps = {
  name: string;
  stateFields: Record<string, any>;
  handleChange: (e, name) => void;
  isRequired: boolean;
};

const ImageField = ({
  name,
  stateFields,
  handleChange,
  isRequired,
}: ImageFieldProps) => {
  return (
    <div>
      <div>
        <label htmlFor={name} className={"imageFieldLabel"}>
          {name}
          {isRequired && " *"}
        </label>
      </div>
      <input
        id={name}
        value={stateFields?.[name].value}
        onChange={(e) => handleChange(e, name)}
        className={"imageFieldInput"}
      />
    </div>
  );
};

export default ImageField;
