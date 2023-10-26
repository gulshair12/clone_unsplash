export const ADD_TO_COLLECTION = "ADD_TO_COLLECTION"; 


export const addToCollection = (image) => {
  return {
    type: ADD_TO_COLLECTION, 
    payload: image,
  };
}

export const REMOVE_FROM_COLLECTION = "REMOVE_FROM_COLLECTION";

export const removeFromCollection = (imageId) => ({
  type: REMOVE_FROM_COLLECTION,
  payload: imageId,
});
