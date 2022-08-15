import { createUseStyles } from "react-jss";

//TODO : passer tout le customizable en paramètre de la fonction
//TODO chaque parametre doit avoir une valeur par default
export const useCustomizedStyle = () =>
  createUseStyles({
    uploaded: {},
    nonUploaded: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    allInputs: {
      display: "flex",
      justifyContent: "space-between",
      "& input::-webkit-file-upload-button, & button": {
        margin: "20px 0",
      },
    },
    inputContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    cropContainer: {
      marginTop: "40px",
    },
  });
