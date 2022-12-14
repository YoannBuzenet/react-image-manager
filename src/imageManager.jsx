import { useContext, useState, useEffect } from "react";
import Gallery from "./components/gallery/Gallery";
import ImageUploader from "./components/ImageUploader";
import ImageManagerContext from "./contexts/index";
import { useCustomizedStyle } from "./style/react-jss-customization";

// Lui va recevoir masse props overwritable
const ImageManager = () => {
  const {
    isDisplayedImageManager,
    setIsDisplayedImageManager,
    enabledModes,
    galleryProperties,
  } = useContext(ImageManagerContext);

  const { selectedImages, setSelectedImages } = galleryProperties;

  useEffect(() => {
    // We reset context of selected images when component is appearing.
    // This way, if component is open twice in a row, it doesn't keep track on ancient selection.
    if (isDisplayedImageManager) {
      setSelectedImages([]);
      console.log("Cleaning context of selectedImages");
    }
  }, [isDisplayedImageManager]);

  const bootMode = enabledModes.includes("upload") ? "upload" : "gallery";

  const [screenDisplayed, setScreenDisplayed] = useState(bootMode);

  const classes = useCustomizedStyle({
    screenDisplayed,
  })();

  return (
    <>
      {isDisplayedImageManager && (
        <div className={classes.imageContainer}>
          <>
            <div className={classes.imageManagerContainer}>
              <div className={classes.imageManagerContainer__top}>
                <div className={classes.imageManagerContainer__top__left}></div>
                <div className={classes.imageManagerContainer__top__right}>
                  <div className={classes.closeButtonContainer}>
                    <div
                      onClick={() => setIsDisplayedImageManager(false)}
                      className={classes.closeButton}
                    ></div>
                  </div>
                </div>
              </div>
              <div className={classes.imageManagerContainer__body}>
                {enabledModes.length > 1 && (
                  <div className={classes.imageManagerContainer__body__left}>
                    <div
                      className={
                        classes.imageManagerContainer__body__left__titles
                      }
                    >
                      {enabledModes.includes("upload") && (
                        <div onClick={() => setScreenDisplayed("upload")}>
                          <p>Upload</p>
                        </div>
                      )}
                      {enabledModes.includes("gallery") && (
                        <div onClick={() => setScreenDisplayed("gallery")}>
                          <p>Galleries</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {/* We add a container here to be able to hide scrolling bar */}
                {/* https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll */}
                <div
                  className={
                    classes.imageManagerContainer__body__right__container
                  }
                >
                  <div
                    className={classes.imageManagerContainer__body__right}
                    style={{
                      height: screenDisplayed === "upload" ? "100%" : "auto",
                    }}
                  >
                    {screenDisplayed === "upload" && <ImageUploader />}
                    {screenDisplayed === "gallery" && <Gallery />}
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default ImageManager;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Possibilit?? d'override les strings affich??s dans la librairie
// Mettre un message d'erreur custom si le contexte de la lib n'est pas d??tect??
