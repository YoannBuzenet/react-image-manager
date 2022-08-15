import { useEffect } from "react";
import { useCustomizedStyle } from "../../style/card";
import crypto from "crypto";

const CardImageObject = ({ image, isSelected }) => {
  const classes = useCustomizedStyle()();

  return (
    <div
      className={
        isSelected ? classes.imageContainerSelected : classes.imageContainer
      }
    >
      <img src={image.src} alt={image.name} className={classes.image} />
      <div className={classes.infoContainer}>
        <p>{image.name}</p>
        {image.credits && (
          <p className={`${classes.lightText} ${classes.infoText}`}>
            <span>&nbsp;|&nbsp;</span>
            {image.credits}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardImageObject;
