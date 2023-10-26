// collectionReducer.js

import { ADD_TO_COLLECTION, REMOVE_FROM_COLLECTION } from "../Actions/collectionActions";

const initialState = [];

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_COLLECTION:
      // Handle adding an image to the collection
      return [...state, action.payload];

    case REMOVE_FROM_COLLECTION:
      // Handle removing an image from the collection
      return state.filter((image) => image.id !== action.payload);

    default:
      return state;
  }
};

export default collectionReducer;

