import { createUseStyles } from "react-jss";

//TODO : passer tout le customizable en paramètre de la fonction
//TODO chaque parametre doit avoir une valeur par default
export const useCustomizedStyle = (withTags) =>
  createUseStyles({
    galleryContainer: {
      display: "flex",
      flexDirection: "column",
    },
    searchGalleryContainer: {
      position: "absolute",
      top: 0,
      height: "70px",
      right: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      "& input": {
        width: withTags ? "30%" : "60%",
        height: "40px",
        fontSize: "16px",
        paddingLeft: "10px",
      },
    },
    tagContainer: {
      width: "30%",
      height: "40px",
      fontSize: "16px",
      paddingLeft: "10px",
      "& span": {
        fontSize: 14,
      },
      "& .MuiInputBase-root": {
        marginTop: 0,
      },
    },
    galleryImageContainer: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      overflowY: "scroll",
      position: "absolute",
      top: "70px",
      left: 0,
      right: 0,
      bottom: "15%",
    },
    optionsGalleryContainer: {
      position: "absolute",
      top: "85%",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(242, 241, 239, 1)",
      display: "flex",
      alignContent: "center",
      "& > div": {
        width: "50%",
        display: "flex",
        justifyContent: "center",
      },
      "& >div:first-child": {},
      "& >div:last-child": {
        textAlign: "right",
      },
    },
    validationButtonContainer: {
      display: "flex",
      alignItems: "center",
    },
  });
