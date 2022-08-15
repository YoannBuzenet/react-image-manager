import { useContext, useState } from "react";
import Gallery from "./components/gallery/Gallery";
import ImageUploader from "./components/ImageUploader";
import ImageManagerContext from "./contexts/index";
import { useCustomizedStyle } from "./style/react-jss-customization";

// Lui va recevoir masse props overwritable
const ImageManager = () => {
  const { isDisplayedImageManager, setIsDisplayedImageManager, enabledModes } =
    useContext(ImageManagerContext);

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
// Comment intégrer des SVG ou Image ou CSS pour un module qui doit marcher sans webpack ?
// Fenetre de base avec selecteur Upload / Gallerie
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
// Possibilité d'override les strings affichés dans la librairie
// Mettre un message d'erreur custom si le contexte n'est pas détecté
