import React from "react";
import { useState } from "react";
import ImageManagerContext from "./contexts/index";
import ImageManager from "./imageManager";

export const ImageManagerContainer = ({
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
  globalOnSelectImages = () => {},
  enabledModes = ["upload", "gallery"],
}) => {
  const [isDisplayedImageManager, setIsDisplayedImageManager] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [onValidationCallBack, setOnValidationCallBack] = useState(null);

  const handleSetOnValidationCallBack = (functionToSetAsCallback) => {
    // console.log("Setter has been called with param:", functionToSetAsCallback);
    setOnValidationCallBack(() => functionToSetAsCallback);
  };

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
      globalOnSelectImages,
      selectedImages,
      setSelectedImages,
      onValidationCallBack,
      setOnValidationCallBack: handleSetOnValidationCallBack,
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
