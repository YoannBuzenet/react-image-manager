# How it works

This lib allows yo do two things :

- Crop images and upload them to your server (using react-image-crop library)
- See your images in galleries

## Make it work

1. At the root of your React tree, wrap your app with `ImageManagerContainer` component. <br />
   `import { ImageManagerContainer } from "react-image-manager";`

2. Pass the right props to `ImageManagerContainer` to make it work. Constraint the crop ratio, pass the array of images that will be displayed, allow or disallow multi selection, choose min width of image upload...

3. To make the component appear, use the hook `useImageManager` <br />
   `import { useImageManager } from "react-image-manager";`
   `const { isDisplayedImageManager, setIsDisplayedImageManager } = useImageManager();`
   and just call `setIsDisplayedImageManager(true);`

## Choose mode

Via the `mode` props, you can either choose gallery only mode, or crop only, or both.

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
