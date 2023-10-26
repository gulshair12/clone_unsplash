
import React from "react";
import { connect } from "react-redux";
import { removeFromCollection } from "../Redux/Actions/collectionActions";
import ImageCard from "../Components/ImageCard";
import Header from "../Components/Header";

const CollectionPage = ({ collection, removeFromCollection }) => {
  return (
    <div>
      <Header/>
      <h1 className=" flex text-3xl mb-4 justify-center my-2">My Collection</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 md:mx-6">
        {collection.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onDelete={() => removeFromCollection(image.id)}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: state.collection,
});

export default connect(mapStateToProps, { removeFromCollection })(CollectionPage);
