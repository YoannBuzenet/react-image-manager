import { useCustomizedStyle } from "../../style/card";

const CardImageObject = ({ image, isSelected }) => {
  const classes = useCustomizedStyle()();

  let imageNameClean = image.name;
  try {
    const imageNameWithoutFormat = image.name.split(".")[0];
    imageNameClean = imageNameWithoutFormat;
  } catch (e) {
    console.log(
      `Couldn't remove the format from the name for image :`,
      image.name
    );
  }

  return (
    <div
      className={
        isSelected ? classes.imageContainerSelected : classes.imageContainer
      }
    >
      <img src={image.src} alt={imageNameClean} className={classes.image} />
      <div className={classes.infoContainer}>
        <p>{imageNameClean}</p>
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
