import React from "react";

export default React.createContext({
  enabledModes: ["upload", "gallery"],
  cropProperties: {
    cropAspectRatio: null,
    cropMinWidth: null,
    cropMinHeight: null,
    cropMaxWidth: null,
    cropMaxHeight: null,
    cropKeepSelection: null,
    cropDisabled: null,
    cropLocked: null,
    cropClassName: null,
    cropstyle: null,
    cropOnComplete: null,
    cropPercentCrop: null,
    cropOnDragStart: null,
    cropOnDragEnd: null,
    cropRenderSelectionAddon: null,
    cropRuleOfThirds: null,
    cropCircularCrop: null,
  },
  uploadProperties: {
    urlUpload: null,
    axiosHeadersUpload: {},
    onSuccessUpload: null,
    onFailureupload: null,
    imageFields: ["name"],
    minWidthImageUpload: null,
  },
  galleryProperties: {
    galleryImages: [],
    canSelectSeveralImages: false,
    onSelectImages: () =>
      console.error("No callback defined to use selected images."),
  },
  isDisplayedImageManager: false,
  setIsDisplayedImageManager: (value) => {},
});
