import React from "react";
import { useState } from "react";
import ImageManagerContext from "./contexts/index";
import ImageManager from "./imageManager";
import {Tag, Image} from "./types/types"

type ImageManagerContainerProps = {
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
  additionalPayloadUpload,
  onSuccessUpload,
  onFailureupload,
  onFailureuploadImageTooSmall ,
  minWidthImageUploadInitial ,
  imageFields,
  galleryImages: Image[],
  canSelectSeveralImages,
  withTags,
  tagList: Tag[] ,
  globalOnSelectImages,
  enabledModes,
  customPropsToPass,
}

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
  additionalPayloadUpload,
  onSuccessUpload,
  onFailureupload,
  onFailureuploadImageTooSmall = (minWidth) => {},
  minWidthImageUploadInitial = 700,
  imageFields = ["name"],
  galleryImages = [],
  canSelectSeveralImages = false,
  withTags = false,
  tagList = [],
  globalOnSelectImages = () => {},
  enabledModes = ["upload", "gallery"],
  customPropsToPass = {},
}: ImageManagerContainerProps) => {
  const [isDisplayedImageManager, setIsDisplayedImageManager] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [onValidationCallBack, setOnValidationCallBack] = useState(null);
  const [minWidthImageUpload, setMinWidthImageUpload] = useState(
    minWidthImageUploadInitial
  );
  const [newCropAspectRatio, setNewCropAspectRatio] = useState(cropAspectRatio);

  const handleSetOnValidationCallBack = (functionToSetAsCallback) => {
    // console.log("Setter has been called with param:", functionToSetAsCallback);
    setOnValidationCallBack(() => functionToSetAsCallback);
  };

  const context = {
    enabledModes,
    withTags,
    tagList,
    cropProperties: {
      cropAspectRatio,
      newCropAspectRatio,
      setNewCropAspectRatio,
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
      additionalPayloadUpload,
      onSuccessUpload,
      onFailureupload,
      minWidthImageUploadInitial,
      onFailureuploadImageTooSmall,
      imageFields,
      minWidthImageUpload,
      setMinWidthImageUpload,
      customPropsToPass,
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
