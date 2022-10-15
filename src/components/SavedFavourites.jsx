import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SavedFavouriteCard from "./SavedFavouriteCard";

const SavedFavourites = ({ properties }) => {
  const initialState = {
    property: [],
    favourites: [],
  };

  const [favourites, setFavourites] = useState(initialState.favourites);

  const handleGetFavourites = async () => {
    await axios
      .get(`http://localhost:4000/api/v1/Favourite`)
      .then(({ data }) => {
        const favListings = data.map((fav) => fav.propertyListing);

        const filteredList = [];
        for (let i = 0; i < favListings.length; i += 1) {
          const filteredProperty = properties.filter(
            (match) => match._id === favListings[i]
          );
          const finalObject = filteredProperty.map((property) =>
            Object.assign(property, { favId: data[i]._id })
          );
          filteredList.push(...finalObject);
        }
        setFavourites(filteredList);
      });
  };

  useEffect(() => {
    handleGetFavourites();
  }, []);

  const handleDeleteFavourite = async (favouriteId) => {
    await axios.delete(`http://localhost:4000/api/v1/Favourite/${favouriteId}`);
    handleGetFavourites();
  };

  return (
    <div className="favourites">
      {favourites.map((favList) => (
        <SavedFavouriteCard
          key={favList.favId}
          {...favList}
          onDeleteFavourite={handleDeleteFavourite}
        />
      ))}
    </div>
  );
};

SavedFavourites.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      bedrooms: PropTypes.string.isRequired,
      bathrooms: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SavedFavourites;
