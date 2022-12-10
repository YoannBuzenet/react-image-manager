import './App.css'
import {ImageManagerContainer} from "../../src/imageManagerContainer"
import {sampleTags,sampleListOfImages} from "./debug/dataSample.js"

function App() {

  // gallerie d'images
  // liste de tags
  // type des imagesFields chelou

  return (
    <div className="App">
      <ImageManagerContainer
        cropAspectRatio={2}
        urlUpload={`${process.env.NEXT_PUBLIC_API_URL}/api/entities/images`}
        minWidthImageUploadInitial={700}
        enabledModes={["gallery", "upload"]}
        imageFields={[
          {
            type: "input",
            name: "name",
            isRequired: true,
          },
          {
            type: "input",
            name: "credits",
          },
          {
            type: "dropdown",
            name: "language",
            keys: [
              { name: "e", value: "1" },
              { name: "a", value: "2" },
            ],
            defaultValue: "2",
            isRequired: true,
          },
        ]}
        onSuccessUpload={() => {
          console.log('Callback Prop onSuccessUpload -> Upload success !')
        }}
        onFailureupload={() =>
          console.log('Callback Prop onFailureupload -> Upload failure !')
        }
        onFailureuploadImageTooSmall={(minWidth: number) => {
          console.log('Callback Prop onFailureuploadImageTooSmall -> Upload failure !. Param minWitdh : ' + minWidth)
        }}
        onSelectImages={(arrayOfSelectedImages) => { console.log('CallBack arrayOfSelectedImages -> Param :' + arrayOfSelectedImages)}}
        galleryImages={sampleListOfImages}
        tagList={sampleTags}
        withTags
        customPropsToPass={{ language: "en-us" }}
        additionalPayloadUpload={{
          test : "additionnal Payload to send"
        }}
      >
      <h1>Vite + React</h1>
      </ImageManagerContainer>
    </div>
  )
}

export default App
