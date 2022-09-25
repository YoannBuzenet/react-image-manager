import React from "react";

export default React.createContext({
  enabledModes: ["upload", "gallery"],
  withTags: false,
  tagList: [],
  cropProperties: {
    cropAspectRatio: null,
    newCropAspectRatio: null,
    setNewCropAspectRatio: null,
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
    onFailureuploadImageTooSmall: (minWidth) => {},
    imageFields: ["name"],
    minWidthImageUploadInitial: null,
    minWidthImageUpload: null,
    setMinWidthImageUpload: null,
    customPropsToPass: {},
  },
  galleryProperties: {
    galleryImages: [],
    canSelectSeveralImages: false,
    globalOnSelectImages: () => {},
    selectedImages: [],
    setSelectedImages: (value) => {},
    onValidationCallBack: () => {},
    setOnValidationCallBack: (fn) => {},
  },
  isDisplayedImageManager: false,
  setIsDisplayedImageManager: (value) => {},
});
