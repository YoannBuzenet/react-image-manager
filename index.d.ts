import { EnabledModes, Image, ReactSelectObject, Tag } from "./src/types/types";

export type InputElement = {
  type: string;
  name: string;
  isRequired?: boolean;
};

export type DropDownElement = {
  type: string;
  name: string;
  isRequired?: boolean;
  defaultValue?: ReactSelectObject;
  keys: ReactSelectObject[];
};

export type ImageFieldElement = InputElement | DropDownElement | string;

export type ImageManagerContainerProps = {
  children?: any;
  cropAspectRatio?: any;
  cropMinWidth?: number;
  cropMinHeight?: number;
  cropMaxWidth?: number;
  cropMaxHeight?: number;
  cropKeepSelection?: any;
  cropDisabled?: any;
  cropLocked?: any;
  cropClassName?: any;
  cropstyle?: any;
  cropOnComplete?: any;
  cropPercentCrop?: any;
  cropOnDragStart?: any;
  cropOnDragEnd?: any;
  cropRenderSelectionAddon?: any;
  cropRuleOfThirds?: any;
  cropCircularCrop?: any;
  urlUpload?: string;
  axiosHeadersUpload?: any;
  additionalPayloadUpload?: any;
  onSuccessUpload?: any;
  onFailureupload?: any;
  onFailureuploadImageTooSmall?: any;
  minWidthImageUploadInitial?: any;
  imageFields?: ImageFieldElement[];
  galleryImages: (Image | string)[];
  canSelectSeveralImages?: any;
  withTags?: boolean;
  tagList: Tag[];
  globalOnSelectImages?: any;
  enabledModes?: EnabledModes[];
  customPropsToPass?: any;
};
declare module "react-image-manager" {
  export function useImageManager(): {
    isDisplayedImageManager: boolean;
    setIsDisplayedImageManager: (value: any) => void;
    selectedImages: any[];
    setSelectedImages: (value: any) => void;
    setOnValidationCallBack: (fn: any) => void;
    setMinWidthImageUpload: any;
    minWidthImageUpload: any;
    setNewCropAspectRatio: any;
    newCropAspectRatio: any;
  };

  export function ImageManagerContainer(
    props: ImageManagerContainerProps
  ): JSX.Element;
}
