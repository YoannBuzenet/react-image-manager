export type Image = {
  id: number;
  src: string;
  name: string;
  language: string;
  credits: string;
  createdAt: string;
  updatedAt: string;
  Tags: {
    id: number;
    name: string;
    language: string;
    createdAt: string;
    updatedAt: string;
    ImageTag: {};
  }[];
};

export type Tag = {
  id?: number;
  label: string;
  value: string;
  language: string;
  createdAt: string;
  updatedAt: string;
};

export type EnabledModes = "upload" | "gallery";

export type ReactSelectObject = {
  value: string;
  label: string;
};

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
