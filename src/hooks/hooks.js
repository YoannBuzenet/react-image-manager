import { useContext } from "react";
import ImageManagerContext from "../contexts/index";
import { useState, useEffect } from "react";

export function useImageManager() {
  const {
    isDisplayedImageManager,
    setIsDisplayedImageManager,
    selectedImages,
    setSelectedImages,
  } = useContext(ImageManagerContext);

  return {
    isDisplayedImageManager,
    setIsDisplayedImageManager,
    selectedImages,
    setSelectedImages,
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
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
