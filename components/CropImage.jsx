import { useContext, useState } from "react";
import ReactCrop from "react-image-crop";
import { useCustomizedStyle } from "../style/crop.js";
import ImageManagerContext from "../contexts/index";

function CropImage({ src, crop, setCrop, adjustedHeightImage }) {
  const { cropProperties } = useContext(ImageManagerContext);

  // crop format example
  // height: 173.25559997558594
  // unit: "px"
  // width: 346.5111999511719
  // x: 139.39031982421875
  // y: 37.63502502441406
  // console.log("src", src);
  // console.log("crop", crop);
  const classes = useCustomizedStyle()();
  // console.log(cropProperties);
  return (
    <ReactCrop
      crop={crop}
      onChange={(c) =>
        setCrop(() => {
          console.log("new C", {
            ...c,
            height: parseInt(c.height),
            width: parseInt(c.width),
            x: parseInt(c.x),
            y: parseInt(c.y),
          });
          return {
            ...c,
            height: parseInt(c.height),
            width: parseInt(c.width),
            x: parseInt(c.x),
            y: parseInt(c.y),
          };
        })
      }
      aspect={cropProperties.cropAspectRatio}
      minWidth={cropProperties.cropMinWidth}
      minHeight={cropProperties.cropMinHeight}
      maxWidth={cropProperties.cropMaxWidth}
      maxHeight={cropProperties.cropMaxHeight}
      keepSelection={cropProperties.cropKeepSelection}
      disabled={cropProperties.cropDisabled}
      locked={cropProperties.cropLocked}
      className={cropProperties.cropClassName}
      style={cropProperties.cropstyle}
      onComplete={cropProperties.cropOnComplete}
      percentCrop={cropProperties.cropPercentCrop}
      onDragStart={cropProperties.cropOnDragStart}
      onDragEnd={cropProperties.cropOnDragEnd}
      renderSelectionAddon={cropProperties.cropRenderSelectionAddon}
      ruleOfThirds={cropProperties.cropRuleOfThirds}
      circularCrop={cropProperties.cropCircularCrop}
    >
      <img src={src} className={classes.image} height={adjustedHeightImage} />
    </ReactCrop>
  );
}

export default CropImage;
