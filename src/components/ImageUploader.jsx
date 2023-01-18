import { useContext, useState } from "react";
import CropImage from "./CropImage.jsx";
import ImageManagerContext from "../contexts/index";
import axios from "axios";
import ImageField from "./ImageFieldInput";
import ImageFieldDropDown from "./ImageFieldDropDown/ImageFieldDropDown";
import { WIDTH_IMAGE } from "../config/consts";
import { DROPDOWN } from "../consts";
import CreatableSelect from "react-select/creatable";

const ImageUploader = () => {
  const [documentUploaded, setDocumentUploaded] = useState(null);
  const [documentUploadedRaw, setDocumentUploadedRaw] = useState(null);
  const [crop, setCrop] = useState();
  const [adjustedHeightImage, setAdjustedHeightImage] = useState(0);
  const [ratioDimensionsImage, setRatioDimensionsImage] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [statImage, setStateImage] = useState({
    width: null,
    height: null,
  });

  const { uploadProperties, tagList, withTags, cropProperties } =
    useContext(ImageManagerContext);

  const { onFailureuploadImageTooSmall, minWidthImageUpload } =
    uploadProperties;

  // Settings up fields for the image based on received props
  const defaultStateFields = uploadProperties.imageFields.reduce(
    (total, current) => {
      total[current.name] = {
        value: current?.defaultValue || "",
        isRequired: current?.isRequired || false,
        type: current?.type || "input",
        keys: current?.keys || [],
      };
      return total;
    },
    {}
  );

  const [fields, setFields] = useState(defaultStateFields);

  const handleChange = (event) => {
    const { target } = event;
    const { files } = target;
    const file = files[0];

    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function () {
      if (
        uploadProperties.minWidthImageUpload &&
        img.width < uploadProperties.minWidthImageUpload
      ) {
        onFailureuploadImageTooSmall(uploadProperties.minWidthImageUpload);
        return;
      } else {
        setDocumentUploadedRaw(file);
        setDocumentUploaded(URL.createObjectURL(file));

        const { width, height } = img;
        setStateImage({
          width,
          height,
        });

        const adjustedHeight = Math.round((WIDTH_IMAGE * height) / width);
        setAdjustedHeightImage(adjustedHeight);
        setRatioDimensionsImage(width / WIDTH_IMAGE);

        URL.revokeObjectURL(img.src);
      }
    };

    img.src = url;
  };

  const handleChangeFields = (e, key) => {
    setFields({ ...fields, [key]: { ...fields[key], value: e.target.value } });
  };

  const handleChangeFieldsDropDown = (e, key) => {
    console.log("event received e", e);
    console.log("event received key", key);
    setFields({ ...fields, [key]: { ...fields[key], value: e } });
  };

  const isUploadButtonDisabled = () => {
    let isDisabled = false;
    for (const field in fields) {
      if (!fields[field].value && fields[field].isRequired) {
        isDisabled = true;
      }
    }

    if (!documentUploaded) {
      isDisabled = true;
    }

    console.log("isDisabled ?", isDisabled);

    return isDisabled;
  };

  const handleSelectTags = (values, option) => {
    // console.log("handleSelectTags values", values);
    // console.log("handleSelectTags option", option);

    let tagsChecked = [];

    if (Array.isArray(values)) {
      for (const value of values) {
        // Checking if there are new tags
        if (option.action === "create-action") {
          const tagAsObject = {
            label: value,
            language: uploadProperties?.customPropsToPass?.language,
            isNewTag: true,
          };
          tagsChecked = [...tagsChecked, tagAsObject];
        } else {
          tagsChecked = [...tagsChecked, value];
        }
      }
    }

    setSelectedTags(tagsChecked);
  };

  const handleUpload = async (event) => {
    // crop format example
    // height: 173.25559997558594
    // unit: "px"
    // width: 346.5111999511719
    // x: 139.39031982421875
    // y: 37.63502502441406

    if (!uploadProperties.urlUpload) {
      throw "urlUpload prop is not defined. This URL is needed to know where to send the data uploaded.";
    }

    const formData = new FormData();

    // Adding all the keys defined by the dev
    for (const key in fields) {
      if ((fields[key].type = DROPDOWN)) {
        // value is nested in value object for react-select fonctionnning purpose
        formData.append(key, fields[key].value.value);
      } else {
        formData.append(key, fields[key].value);
      }
    }

    // Adding custom paylord properties passed from props
    for (const prop in uploadProperties.additionalPayloadUpload) {
      formData.append(prop, uploadProperties.additionalPayloadUpload[prop]);
    }

    formData.append("x", crop?.x * ratioDimensionsImage);
    formData.append("y", crop?.y * ratioDimensionsImage);
    formData.append("width", crop?.width * ratioDimensionsImage);
    formData.append("height", crop?.height * ratioDimensionsImage);
    formData.append("image", documentUploadedRaw, "wtf.png");
    formData.append("tags", JSON.stringify(selectedTags));

    //TODO map all props and check there are no JS objects ?

    console.log("headers ajoutés", uploadProperties.axiosHeadersUpload);

    try {
      const resp = await axios.post(uploadProperties.urlUpload, formData, {
        ...uploadProperties.axiosHeadersUpload,
        "Content-Type": "multipart/form-data",
      });
      console.log("RESP OK ?", resp);

      // Success callback function if defined
      if (uploadProperties.onSuccessUpload) {
        uploadProperties.onSuccessUpload(resp);
      }
    } catch (e) {
      // Failure callback function if defined
      if (uploadProperties.onFailureupload) {
        uploadProperties.onFailureupload(e);
      } else {
        console.log("Error while uploading picture. Error :", e);
      }
    }
  };

  console.log("image fields", uploadProperties.imageFields);
  console.log("fields as state", defaultStateFields);

  return (
    <div style={{ overflowY: documentUploaded ? "scroll" : "auto" }}>
      {documentUploaded && (
        <div className={"cropContainer"}>
          <CropImage
            src={documentUploaded}
            crop={crop}
            setCrop={setCrop}
            adjustedHeightImage={adjustedHeightImage}
          />
          <div className={"dataImage"}>
            {statImage.width && <p>Width: {statImage.width} px</p>}
            {statImage.height && <p>Height: {statImage.height} px</p>}
          </div>
          <div className={"dataImage"}>
            {crop?.width && (
              <p>
                Croppped Width: {parseInt(crop?.width * ratioDimensionsImage)}
                px
              </p>
            )}
            {crop?.height && (
              <p>
                Cropped Height: {parseInt(crop?.height * ratioDimensionsImage)}
                px
              </p>
            )}
          </div>
        </div>
      )}
      <div className={documentUploaded ? "uploaded" : "nonUploaded"}>
        {documentUploaded && (
          <div>
            <div className={"fieldContainer"}>
              {uploadProperties.imageFields.map((objectField, index) => {
                if (
                  objectField.type === "input" ||
                  objectField?.type === undefined
                ) {
                  return (
                    <ImageField
                      handleChange={handleChangeFields}
                      name={objectField.name}
                      isRequired={objectField.isRequired}
                      key={index}
                      stateFields={fields}
                    />
                  );
                } else if (objectField.type === DROPDOWN) {
                  return (
                    <ImageFieldDropDown
                      handleChange={handleChangeFieldsDropDown}
                      name={objectField.name}
                      isRequired={objectField.isRequired}
                      key={index}
                      stateFields={fields}
                      keys={objectField.keys}
                      defaultValue={objectField.defaultValue}
                    />
                  );
                }
              })}
            </div>
            {withTags && (
              <div className={"tagContainer"}>
                <CreatableSelect
                  isClearable
                  options={tagList}
                  onChange={handleSelectTags}
                  isMulti
                  value={selectedTags}
                />
              </div>
            )}
          </div>
        )}
        <div className={"allInputs"}>
          <div className={"inputContainer"}>
            <label htmlFor="uploadButton" className="customFileInput">
              CHOOSE A FILE
            </label>
            <input
              type="file"
              name="myfile"
              className="inputFile"
              onChange={handleChange}
              accept="image/png, image/jpeg"
              id="uploadButton"
            />
          </div>
          {documentUploaded && (
            <div className={"inputContainer"}>
              <button
                className="customFileInput"
                onClick={handleUpload}
                disabled={isUploadButtonDisabled()}
              >
                UPLOAD
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// next
// Regarder dans la doc de sharp si left and co sont forcément des integer avec sharp, car on a des nombres avec 8 chiffres après la virgule
// essayer de sauvegarder une image !!
// checker que tous les endpoins ne sont pas désormais des multi form car on n'a pas encapsulé
//
// prop isCropMandatory
//
// Endpoint back
// Gestion image avec les data de crop
// Sauvegarder l'image
// Renvoyer une 200 ou 500

// On passe sur la gallery (multi/mono select, pagination)
//
// On peut choisir les modes à activer sur l'image manager
//
