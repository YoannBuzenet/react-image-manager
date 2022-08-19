# How it works

This lib allows yo do two things :

- Crop images and upload them to your server (using react-image-crop library)
- See your images in galleries

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
- `onSelectImages` : Callback method that will be called when user validates images selection from gallery.
- `urlUpload` : URL where image to upload will be sent.
- `axiosHeadersUpload` : Axios headers you would like to pass when uploading, for auth purpose for example.
- `onSuccessUpload` : Callback called when upload was successful. Could be a notification.
- `onFailureupload` : Callback called when upload was failed. Could be a notification.
- `imageFields` : Array of properties you would like your user to fulfill when uploading an image.
- `minWidthImageUpload` : Minimum width of pixels of image that user can upload.

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

- Add types
- We can zoom and rotate the image in uploader
- We can add custom component in gallery to handle systems like tags
