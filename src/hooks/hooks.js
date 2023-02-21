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

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return { width: 1024, height: 768 };
  }
}

export function useWindowDimensions() {
  let [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  if(!windowDimensions){
    windowDimensions = { width: 1024, height: 768 };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


