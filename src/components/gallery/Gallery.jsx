import { useContext, useEffect, useState } from "react";
import config from "../../config/config";
import ImageManagerContext from "../../contexts/index";
import { useWindowDimensions } from "../../hooks/hooks";
import {
  getAllInfosFromImageHash,
  getNearestBreakPoint,
  removeDuplicateFromArrayOfImages,
} from "../../utils";
import Card from "./Card";
import ReactPaginate from "react-paginate";
import Select from "react-select";

const Gallery = () => {
  const { galleryProperties, tagList, withTags, setIsDisplayedImageManager } =
    useContext(ImageManagerContext);
  const {
    galleryImages,
    canSelectSeveralImages,
    globalOnSelectImages,
    setSelectedImages,
    onValidationCallBack,
  } = galleryProperties;

  // We compute the number of images we want to displaye, following screen size.
  const { width } = useWindowDimensions();
  const relevantBreakPoint = getNearestBreakPoint(width);
  const numberOfImagesDisplayed =
    config.gallery.imagePerSizeScreen[relevantBreakPoint];

  // Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Removing duplicate, otherwise react wont be able to handle keys
  const galleryImageWithoutDuplicate =
    removeDuplicateFromArrayOfImages(galleryImages);

  const [galleryImagesAfterSearchFilter, setGalleryImagesAfterSearchFilter] =
    useState(galleryImageWithoutDuplicate);

  const [selectedHashes, setSelectedHashes] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  const handleChangeFieldsDropDown = (e) => {
    setSelectedTags(e);
  };

  // Search by name or url
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + numberOfImagesDisplayed;

    setCurrentItems(
      galleryImagesAfterSearchFilter.slice(itemOffset, endOffset)
    );
    setPageCount(
      Math.ceil(galleryImagesAfterSearchFilter.length / numberOfImagesDisplayed)
    );
  }, [itemOffset, numberOfImagesDisplayed, galleryImagesAfterSearchFilter]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * numberOfImagesDisplayed) %
      galleryImageWithoutDuplicate.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleSetSelectedImages = (hash) => {
    if (canSelectSeveralImages) {
      if (selectedHashes.includes(hash)) {
        const indexString = selectedHashes.indexOf(hash);
        const newArray = selectedHashes.splice(indexString, 1);
        setSelectedHashes(newArray);
      } else {
        setSelectedHashes([...selectedHashes, hash]);
      }
    } else {
      if (selectedHashes.includes(hash)) {
        setSelectedHashes([]);
      } else {
        setSelectedHashes([hash]);
      }
    }
  };

  const handleSelectImages = (e, selectedHashes) => {
    const arrayOfImagesSelected = getAllInfosFromImageHash(
      galleryImageWithoutDuplicate,
      selectedHashes
    );

    setIsDisplayedImageManager(false);
    setSelectedImages(arrayOfImagesSelected);
    if (onValidationCallBack) {
      onValidationCallBack(arrayOfImagesSelected);
    }
    globalOnSelectImages(arrayOfImagesSelected);
  };

  const handleSearchKeyboard = (e) => {
    const currentSearch = e.target.value.toLowerCase();

    // Putting pagination to 0
    setItemOffset(0);

    setSearch(currentSearch);
  };

  useEffect(() => {
    // Filtering by search
    const filteredGallerySearch = galleryImageWithoutDuplicate.filter(
      (image) => {
        if (!search) {
          return image;
        }

        if (image.name && image.name.toLowerCase().includes(search)) {
          return image;
        } else if (
          !image.hasOwnProperty("name") &&
          image.toLowerCase().includes(search)
        ) {
          return image;
        }
      }
    );

    const tagAsObjects = selectedTags.reduce((total, current) => {
      total[`${current.name}-${current.language}`] = current;
      return total;
    }, {});

    let filteredGalleryTags = filteredGallerySearch;

    if (selectedTags.length > 0) {
      // Filtering by tags
      filteredGalleryTags = filteredGallerySearch.filter((image) => {
        const imageTags = image.Tags;
        let isTagPresent = false;
        for (let i = 0; i < imageTags.length; i++) {
          const constructedKey = `${imageTags[i].name}-${imageTags[i].language}`;
          if (tagAsObjects[constructedKey]) {
            isTagPresent = true;
          }
        }
        return isTagPresent;
      });
    }

    setGalleryImagesAfterSearchFilter(filteredGalleryTags);
  }, [search, setSelectedTags, selectedTags.length]);

  console.log("---", currentItems);

  return (
    <div className={"galleryContainer"}>
      <div className={"searchGalleryContainer"}>
        <input
          type="text"
          placeholder="Search by name"
          onChange={handleSearchKeyboard}
          className={withTags ? "withTags" : "withoutTags"}
        />
        {withTags && (
          <div className={"tagContainerGallery"}>
            <Select
              onChange={handleChangeFieldsDropDown}
              options={tagList}
              value={selectedTags}
              isClearable
              isSearchable
              isMulti
            />
          </div>
        )}
      </div>
      <div className={"galleryImageContainer"}>
        {currentItems.map((image, index) => {
          if (image.name && image.name.toLowerCase().includes(search)) {
            return (
              <Card
                image={image}
                id={image.src}
                key={image.src}
                selectedImages={selectedHashes}
                setSelectedImages={handleSetSelectedImages}
              />
            );
          } else if (
            !image.hasOwnProperty("name") &&
            image.toLowerCase().includes(search)
          ) {
            return (
              <Card
                image={image}
                key={image}
                id={image}
                selectedImages={selectedHashes}
                setSelectedImages={handleSetSelectedImages}
              />
            );
          }
        })}
      </div>
      <div className={"optionsGalleryContainer"}>
        <div id="pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
        <div className={"validationButtonContainer"}>
          <button
            className="customFileInput"
            onClick={(e) => handleSelectImages(e, selectedHashes)}
            disabled={selectedHashes.length === 0}
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

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
