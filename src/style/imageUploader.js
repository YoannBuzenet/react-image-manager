import { createUseStyles } from "react-jss";

//TODO : passer tout le customizable en paramètre de la fonction
//TODO chaque parametre doit avoir une valeur par default
export const useCustomizedStyle = () =>
  createUseStyles({
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
    tagContainer: {
      "& > div": {
        width: "80%",
        margin: "auto",
      },
    },
    dataImage: {
      display: "flex",
      marginBottom: "1rem",
      "& p": {
        fontSize: "1.2rem",
        marginRight: "10px",
        fontWeight: "bold",
      },
    },
  });
