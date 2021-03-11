/**
 * The ArtworkController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ArtworkService');
const addArtwork = async (request, response) => {
  await Controller.handleRequest(request, response, service.addArtwork);
};

const deleteArtwork = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteArtwork);
};

const getArtworkById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getArtworkById);
};

const replaceColorAtSelfURL = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceColorAtSelfURL);
};

const updateArtwork = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateArtwork);
};

const uploadImage = async (request, response) => {
  await Controller.handleRequest(request, response, service.uploadImage);
};


module.exports = {
  addArtwork,
  deleteArtwork,
  getArtworkById,
  replaceColorAtSelfURL,
  updateArtwork,
  uploadImage,
};
