import { useContext, useState } from "react";
import { useCustomizedStyle } from "../style/imageUploader.js";
import CropImage from "./CropImage.jsx";
import ImageManagerContext from "../contexts/index";
import axios from "axios";
import ImageField from "./ImageField.jsx";

const ImageUploader = () => {
  const classes = useCustomizedStyle()();
  const [documentUploaded, setDocumentUploaded] = useState(null);
  const [documentUploadedRaw, setDocumentUploadedRaw] = useState(null);
  const [crop, setCrop] = useState();
  const [adjustedHeightImage, setAdjustedHeightImage] = useState(0);

  const { uploadProperties } = useContext(ImageManagerContext);

  const defaultStateFields = uploadProperties.imageFields.reduce(
    (total, current) => {
      total[current] = "";
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
        console.error(
          `Width of the image is too small. It should be ${uploadProperties.minWidthImageUpload}px at least.`
        );
        // TODO : callback failure upload size too small
        return;
      } else {
        setDocumentUploadedRaw(file);
        setDocumentUploaded(URL.createObjectURL(file));

        const { width, height } = img;

        const adjustedHeight = Math.round((680 * height) / width);
        setAdjustedHeightImage(adjustedHeight);

        URL.revokeObjectURL(img.src);
      }
    };

    img.src = url;
  };

  const handleChangeFields = (e, key) => {
    setFields({ ...fields, [key]: e.target.value });
  };

  const isUploadButtonDisabled = () => {
    let isDisabled = false;
    for (const field in fields) {
      if (!fields[field]) {
        isDisabled = true;
      }
    }

    if (!documentUploaded) {
      isDisabled = true;
    }

    console.log("isDisabled ?", isDisabled);

    return isDisabled;
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
      formData.append(key, fields[key]);
    }
    formData.append("x", crop?.x);
    formData.append("y", crop?.y);
    formData.append("width", crop?.width);
    formData.append("height", crop?.height);
    formData.append("image", documentUploadedRaw, "wtf.png");

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

  return (
    <div style={{ overflowY: documentUploaded ? "scroll" : "auto" }}>
      {documentUploaded && (
        <div className={classes.cropContainer}>
          <CropImage
            src={documentUploaded}
            crop={crop}
            setCrop={setCrop}
            adjustedHeightImage={adjustedHeightImage}
          />
        </div>
      )}
      <div
        className={documentUploaded ? classes.uploaded : classes.nonUploaded}
      >
        <div className={classes.fieldContainer}>
          {documentUploaded &&
            uploadProperties.imageFields.map((name, index) => (
              <ImageField
                handleChange={handleChangeFields}
                name={name}
                key={index}
                stateFields={fields}
              />
            ))}
        </div>
        <div className={classes.allInputs}>
          <div className={classes.inputContainer}>
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
            <div className={classes.inputContainer}>
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
