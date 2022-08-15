import { useCustomizedStyle } from "../../style/card.js";
import crypto from "crypto";
import { useEffect } from "react";

const CardImageString = ({ image, isSelected }) => {
  const classes = useCustomizedStyle()();

  return (
    <div
      className={
        isSelected ? classes.imageContainerSelected : classes.imageContainer
      }
    >
      <img src={image} alt="Gallery Image" className={classes.image} />
      <p className={`${classes.lightText} ${classes.infoText}`}>{image}</p>
    </div>
  );
};

export default CardImageString;
