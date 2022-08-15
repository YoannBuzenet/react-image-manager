import { useState } from "react";
import ImageManagerContext from "./contexts/index";
import ImageManager from "./imageManager";

const ImageManagerContainer = ({
  children,
  cropAspectRatio,
  cropMinWidth,
  cropMinHeight,
  cropMaxWidth,
  cropMaxHeight,
  cropKeepSelection,
  cropDisabled,
  cropLocked,
  cropClassName,
  cropstyle,
  cropOnComplete,
  cropPercentCrop,
  cropOnDragStart,
  cropOnDragEnd,
  cropRenderSelectionAddon,
  cropRuleOfThirds,
  cropCircularCrop,
  urlUpload,
  axiosHeadersUpload,
  minWidthImageUpload,
  onSuccessUpload,
  onFailureupload,
  imageFields = ["name"],
  galleryImages = [],
  canSelectSeveralImages = false,
  onSelectImages = () =>
    console.error("No callback defined to use selected images."),
  enabledModes = ["upload", "gallery"],
}) => {
  const [isDisplayedImageManager, setIsDisplayedImageManager] = useState(false);

  const context = {
    enabledModes,
    cropProperties: {
      cropAspectRatio,
      cropMinWidth,
      cropMinHeight,
      cropMaxWidth,
      cropMaxHeight,
      cropKeepSelection,
      cropDisabled,
      cropLocked,
      cropClassName,
      cropstyle,
      cropOnComplete,
      cropPercentCrop,
      cropOnDragStart,
      cropOnDragEnd,
      cropRenderSelectionAddon,
      cropRuleOfThirds,
      cropCircularCrop,
    },
    uploadProperties: {
      urlUpload,
      axiosHeadersUpload,
      onSuccessUpload,
      onFailureupload,
      imageFields,
      minWidthImageUpload,
    },
    galleryProperties: {
      galleryImages,
      canSelectSeveralImages,
      onSelectImages,
    },
    isDisplayedImageManager,
    setIsDisplayedImageManager,
  };

  return (
    <ImageManagerContext.Provider value={context}>
      <ImageManager />
      {children}
    </ImageManagerContext.Provider>
  );
};

export default ImageManagerContainer;
