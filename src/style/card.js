import { createUseStyles } from "react-jss";

//TODO : passer tout le customizable en paramètre de la fonction
//TODO chaque parametre doit avoir une valeur par default
export const useCustomizedStyle = () =>
  createUseStyles({
    cardContainer: {},
    imageContainer: {
      marginLeft: 20,
      height: 120,
      "& img:hover": {
        cursor: "pointer",
        border: "2px solid black",
      },
      width: 200,
      marginBottom: "40px",
    },
    imageContainerSelected: {
      "& img": {
        border: "2px solid red",
      },
      height: 120,
      width: 200,
      marginLeft: 20,
      marginBottom: "40px",
      "& img:hover": {
        cursor: "pointer",
      },
    },
    image: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
    lightText: {
      opacity: 0.7,
      fontSize: "12px",
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      "& p": {
        display: "flex",
        alignItems: "center",
      },
    },
    infoText: {
      marginTop: "5px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  });
