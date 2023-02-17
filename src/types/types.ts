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

export enum EnabledModes {
  Upload = "upload",
  Gallery = "gallery",
}

export type ReactSelectObject = {
  value: string;
  label: string;
};
