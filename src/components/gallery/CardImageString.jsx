const CardImageString = ({ image, isSelected }) => {
  return (
    <div
      className={isSelected ? "imageContainerSelected" : "card_imageContainer"}
    >
      <img src={image} alt="Gallery Image" className={"card_image"} />
      <p className={`${"lightText"} ${"infoText"}`}>{image}</p>
    </div>
  );
};

export default CardImageString;
