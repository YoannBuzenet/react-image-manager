# Upload

<p align="center">
<img src="https://github.com/YoannBuzenet/react-image-manager/blob/main/doc/images/upload.gif" width="500"/>
</p>

# Manage Image Library

<p align="center">
<img src="https://github.com/YoannBuzenet/react-image-manager/blob/main/doc/images/gallery.gif" width="500"/>
</p>

# How it works

This lib allows yo do two things :

- Crop images and upload them to your server (using react-image-crop library). The server will receive all info to resize the image (gist to help for server below)
- See your images in galleries, and select the one you want

## Make it work

1. At the root of your React tree, wrap your app with `ImageManagerContainer` component. <br />

   ```JSX
   import { ImageManagerContainer } from "react-image-manager";
   <ImageManagerContainer>
      <App />
   </ImageManagerContainer>
   ```

2. Pass the right props to `ImageManagerContainer` to make it work. Constraint the crop ratio, pass the array of images that will be displayed, allow or disallow multi selection, choose min width of image upload...

3. To make the component appear, use the hook `useImageManager` <br />
   ```JSX
   import { useImageManager } from "react-image-manager";
   const { isDisplayedImageManager, setIsDisplayedImageManager } = useImageManager();
   setIsDisplayedImageManager(true); // Add this where needed to display it when wanted
   ```

## Props

- `enabledModes` <br />
  Do you only want the gallery mode or upload, or both ? Choose with this prop. <br />
  `enabledModes={["gallery", "upload"]}`
- `galleryImages`<br />
  Array of images you will display in the gallery. Can either be a url, or an object with the following shape :
  ```js
  const image = {
    src: "url",
    name: "imageName",
    credits: "imageCredits",
  };
  ```
- `canSelectSeveralImages` : boolean to allow or not to select several image in the gallery.
- `globalOnSelectImages` : Callback method that will be called each time when user validates images selection from gallery.
- To setup a setter for a particular component, pass the setter in `setOnValidationCallBack` that you get from `useImageManager` hook. It will receive the array of selected images.
- `urlUpload` : URL where image to upload will be sent.
- `axiosHeadersUpload` : Axios headers you would like to pass when uploading, for auth purpose for example.
- `onSuccessUpload` : Callback called when upload was successful. Could be a notification.
- `onFailureupload` : Callback called when upload was failed. Could be a notification.
- `imageFields` : Array of properties you would like your user to fulfill when uploading an image.
- `minWidthImageUpload` : Minimum width of pixels of image that user can upload.

All react-image-crop props can be used to custom the crop feature. For example :

- `cropAspectRatio` : Choose the ratio of how you want to crop the image.
- All other are availables on the doc of the library.

## Style

CSS can be customized. Pagination and upload inputs are handled through classic css files, the rest is in react-jss to allow customization through props.

### Import CSS files

Import CSS files in your app. If you are running a next app, it should be in \_app.jsx file.

- `import "react-image-manager/dist/style.css";`
- `import "react-image-manager/dist/pagination.css";`
- `import "react-image-crop/dist/ReactCrop.css";`

### Nextjs apps

- To make react-jss work, you need to implement this in \_document.jsx : https://github.com/vercel/next.js/blob/deprecated-main/examples/with-react-jss/pages/_document.js

### Various

[Gist](https://gist.github.com/YoannBuzenet/0ad6c2aa5f8f815e91282e2e26be949d) on how to resize the image with sharp library, server side

TO DO

- Search how to make the component props displayed on vscode thanks to ts
- Add types
- Allow better override of CSS and css-in-js
- We can zoom and rotate the image in uploader
