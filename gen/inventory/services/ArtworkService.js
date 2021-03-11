/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* create an artwork in the artwork list
*
* newArtwork NewArtwork A new Artwork object to be created on the server
* no response value expected for this operation
* */
const addArtwork = ({ newArtwork }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        newArtwork,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes a piece of artwork
*
* apiUnderscorekey String 
* artworkId String Id of the artwork to delete
* no response value expected for this operation
* */
const deleteArtwork = ({ apiUnderscorekey, artworkId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        apiUnderscorekey,
        artworkId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find artwork by ID.
* Returns a single artwork with its properties such as name, description, artists, storage location, etc.
*
* artworkId String ID of a artwork. ID of an artwork is a combination of the artist name and the artwork name and optional integer identifier
* returns Artwork
* */
const getArtworkById = ({ artworkId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        artworkId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Replace a artwork
*
* apiUnderscorekey String 
* artworkId String Artwork id to replace
* artwork Artwork Artwork object to be updated on the server
* no response value expected for this operation
* */
const replaceColorAtSelfURL = ({ apiUnderscorekey, artworkId, artwork }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        apiUnderscorekey,
        artworkId,
        artwork,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update an exisiting artwork
*
* apiUnderscorekey String 
* artworkId String Artwork id to update
* artwork Artwork Artwork object to be updated on the server
* no response value expected for this operation
* */
const updateArtwork = ({ apiUnderscorekey, artworkId, artwork }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        apiUnderscorekey,
        artworkId,
        artwork,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* uploads an image
*
* artworkId String ID of the artwork
* body File  (optional)
* returns ApiResponse
* */
const uploadImage = ({ artworkId, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        artworkId,
        body,
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
  addArtwork,
  deleteArtwork,
  getArtworkById,
  replaceColorAtSelfURL,
  updateArtwork,
  uploadImage,
};
