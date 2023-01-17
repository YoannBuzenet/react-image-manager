const CardImageObject = ({ image, isSelected }) => {
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
    <div className={isSelected ? "imageContainerSelected" : "imageContainer"}>
      <img src={image.src} alt={imageNameClean} className={"card_image"} />
      <div className={"infoContainer"}>
        <p>{imageNameClean}</p>
        {image.credits && (
          <p className={`${"lightText"} ${"infoText"}`}>
            <span>&nbsp;|&nbsp;</span>
            {image.credits}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardImageObject;
