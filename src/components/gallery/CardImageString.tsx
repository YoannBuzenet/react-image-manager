type CardImageStringProps = {
  image: string;
  isSelected: boolean;
};

const CardImageString = ({ image, isSelected }: CardImageStringProps) => {
  return (
    <div
      className={isSelected ? "imageContainerSelected" : "card_imageContainer"}
    >
      <img
        src={image}
        alt={"Gallery Image"}
        className={"card_image card_string"}
      />
      <p className={`${"lightText"} ${"infoText"}`}>{image}</p>
    </div>
  );
};

export default CardImageString;
