import { createUseStyles } from "react-jss";

//TODO : passer tout le customizable en paramètre de la fonction
//TODO chaque parametre doit avoir une valeur par default
export const useCustomizedStyle = () =>
  createUseStyles({
    imageFieldContainer: {},
    imageFieldLabel: { fontSize: "16px", textTransform: "capitalize" },
    imageFieldInput: { fontSize: "16px", width: "100%", padding: "8px" },
  });
