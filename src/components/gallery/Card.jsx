import CardImageObject from "./CardImageObject";
import CardImageString from "./CardImageString";

const Card = ({ image, selectedImages, setSelectedImages, id }) => {
  // We want the gallery to be able to display simple URLS as well as objects
  let CompoToUse;

  if (typeof image === "string") {
    CompoToUse = CardImageString;
  } else if (typeof image === "object") {
    CompoToUse = CardImageObject;
  } else {
    console.error(
      "Image received can not be processed in the gallery card. Please check the format."
    );
  }

  const isSelected = selectedImages.includes(id);

  return (
    <div onClick={(e) => setSelectedImages(id)} className={"cardContainer"}>
      <CompoToUse image={image} isSelected={isSelected} />
    </div>
  );
};

export default Card;
