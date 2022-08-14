function getNearestBreakPoint(widthScreen) {
  // console.log("widthScreen", widthScreen);

  if (widthScreen < 320) {
    return 320;
  } else if (widthScreen < 480) {
    return 480;
  } else if (widthScreen < 768) {
    return 768;
  } else if (widthScreen < 1024) {
    return 1024;
  } else if (widthScreen < 1200) {
    return 1200;
  } else if (widthScreen < 1500) {
    return 1500;
  } else if (widthScreen < 2000) {
    return 2000;
  } else {
    return 2001;
  }
}

function removeDuplicateFromArrayOfImages(array) {
  if (!Array.isArray(array)) {
    throw new Error("Parameter must be an array.");
  }

  let dictionnaryOfUnicity = {};
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    // If image is an object with name property
    if (array[i].name) {
      if (!dictionnaryOfUnicity[array[i].name]) {
        uniqueArray = [...uniqueArray, array[i]];
        dictionnaryOfUnicity[array[i].name] = true;
      }
    }
    // If image is just an url
    else {
      if (!dictionnaryOfUnicity[array[i]]) {
        uniqueArray = [...uniqueArray, array[i]];
        dictionnaryOfUnicity[array[i]] = true;
      }
    }
  }

  return uniqueArray;
}

function getAllInfosFromImageHash(arrayOfImages, arrayOfHashes) {
  if (!Array.isArray(arrayOfImages)) {
    throw new Error("Parameter arrayOfImages must be an array.");
  }
  if (!Array.isArray(arrayOfHashes)) {
    throw new Error("Parameter arrayOfHashes must be an array.");
  }

  const dictionnaryOfHashes = arrayOfHashes.reduce((acc, value) => {
    acc[value] = true;
    return acc;
  }, {});

  let arrayOfImageInfos = [];

  // We're mapping all image in the gallery, and picking the one with right hashs
  // O(N) of gallery length
  for (let i = 0; i < arrayOfImages.length; i++) {
    const image = arrayOfImages[i];
    if (image.src) {
      if (dictionnaryOfHashes[image.src]) {
        arrayOfImageInfos = [...arrayOfImageInfos, image];
      }
    } else {
      if (dictionnaryOfHashes[image]) {
        arrayOfImageInfos = [...arrayOfImageInfos, image];
      }
    }
  }

  return arrayOfImageInfos;
}

module.exports = {
  getNearestBreakPoint,
  removeDuplicateFromArrayOfImages,
  getAllInfosFromImageHash,
};
