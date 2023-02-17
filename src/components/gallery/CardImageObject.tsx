import { Image } from "../../../index";

type CardImageObjectProps = {
  image: Image;
  isSelected: boolean;
};

const CardImageObject = ({ image, isSelected }: CardImageObjectProps) => {
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
      className={isSelected ? "imageContainerSelected" : "card_imageContainer"}
    >
      <img
        src={image.src}
        alt={imageNameClean}
        className={"card_image card_image_object"}
      />
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
