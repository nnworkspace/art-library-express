/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get a list of artworks.
* Returns a list of artworks. The result can be filtered by query parameters.
*
* limit Integer Specifies in response, how many records should be contained in a page.
* offset Integer Specifies how many records should be skipped.
* title String name of the artwork, can be a partial string of name (optional)
* description String description of the artwork, can be a partial string of description (optional)
* artists List (Partial) name of the artists, relationship between the artists in the parameter list is 'or'. (optional)
* artForm ArtForm  (optional)
* artworkStatus ArtworkStatus  (optional)
* availableFrom date  (optional)
* returns ArtworksResponse
* */
const getArtworks = ({ limit, offset, title, description, artists, artForm, artworkStatus, availableFrom }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        limit,
        offset,
        title,
        description,
        artists,
        artForm,
        artworkStatus,
        availableFrom,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getArtworks,
};
