// môj

// export const smallImage = (imagePath, size) => {
//     const image = imagePath.match(/media\/screenshots/) 
//     ? imagePath.replace(
//         "media/screenshots",
//         `media/resize/${size}/-/screenshots`
//         ) 
//     : imagePath.raplace("/media/games/", `/media/resize/${size}/-/games/`);
//     return image;
// };


// stiahnutý

export const smallImage = (imagePath, size) => {
    const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
        )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
    return image;
};