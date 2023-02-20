import { useContext } from "react";
import ImageManagerContext from "../contexts/index";
import { useState, useEffect } from "react";

export function useImageManager() {
  const {
    isDisplayedImageManager,
    setIsDisplayedImageManager,
    galleryProperties,
    uploadProperties,
    cropProperties,
  } = useContext(ImageManagerContext);

  const { selectedImages, setSelectedImages, setOnValidationCallBack } =
    galleryProperties;
  const { setMinWidthImageUpload, minWidthImageUpload } = uploadProperties;
  const { setNewCropAspectRatio, newCropAspectRatio } = cropProperties;

  return {
    isDisplayedImageManager,
    setIsDisplayedImageManager,
    selectedImages,
    setSelectedImages,
    setOnValidationCallBack,
    setMinWidthImageUpload,
    minWidthImageUpload,
    setNewCropAspectRatio,
    newCropAspectRatio,
  };
}


