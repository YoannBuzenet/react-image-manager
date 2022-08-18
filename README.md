# How it works

This lib allows yo do two things :

- Crop images and upload them to your server (using react-image-crop library)
- See your images in galleries

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

TO DO

- Add types
- We can zoom and rotate the image in uploader
- We can add custom component in gallery to handle systems like tags
