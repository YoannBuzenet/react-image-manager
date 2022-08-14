import { createUseStyles } from "react-jss";

//TODO : passer tout le customizable en paramètre de la fonction
//TODO chaque parametre doit avoir une valeur par default
//TODO : tout faire passer là dedans ET créer les bonnes sous classes si besoin
export const useCustomizedStyle = (options) => {
  // console.log("options reçues", options);
  return createUseStyles({
    imageContainer: {
      position: "fixed",
      zIndex: 9999,
      top: 0,
      height: "100vh",
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, .4)",
    },
    imageManagerContainer: {
      position: "absolute",
      zIndex: 10000,
      width: "85%",
      height: "90%",
      borderRadius: "5px",
      padding: "20px",
      backgroundColor: "rgba(242, 241, 239, 1)",
    },
    imageManagerContainer__top: {
      display: "flex",
      justifyContent: "center",
    },
    imageManagerContainer__top__left: { width: "50%" },
    imageManagerContainer__top__right: {
      width: "50%",
    },
    imageManagerContainer__body: {
      position: "relative",
      height: "100%",
      display: "flex",
    },
    imageManagerContainer__body__left: {
      width: "25%",
      height: "100%",
      borderRight: "1px solid black",
    },
    imageManagerContainer__body__right__container: {
      height: "100%",
      width: "100%",
      position: "relative",
    },
    imageManagerContainer__body__right: {
      paddingRight: "17px",
      display: "flex",
      justifyContent: "center",
    },
    imageManagerContainer__body__left__titles: {
      marginTop: 20,
      "& p": {
        marginLeft: "30%",
        marginTop: "10px",
        cursor: "pointer",
      },
      "& p:hover": {
        textDecoration: "underline",
      },
    },
    closeButtonContainer: {
      position: "relative",
    },
    closeButton: {
      position: "absolute",
      cursor: "pointer",
      top: "0px",
      right: "0px",
      width: "32px",
      height: "32px",
      opacity: "0.3",
      zIndex: 10001,
      "&:hover": {
        opacity: 1,
      },
      "&:before": {
        position: "absolute",
        left: "15px",
        content: '""',
        height: "33px",
        width: "2px",
        backgroundColor: "black",
        transform: "rotate(45deg)",
      },
      "&:after": {
        position: "absolute",
        left: "15px",
        content: '""',
        height: "33px",
        width: "2px",
        backgroundColor: "black",
        transform: "rotate(-45deg)",
      },
    },
  });
};
