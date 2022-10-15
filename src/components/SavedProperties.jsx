import PropTypes from "prop-types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SavedFavouriteCard from "./SavedFavouriteCard";

const SavedProperties = ({ properties, userID }) => {
  const initialState = {
    favourites: [],
    listing: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [listing, setListing] = useState(initialState.listing);

  const checkProperties = async () => {
    await properties;

    if (properties) {
      axios.get(`http://localhost:4000/api/v1/Favourite`).then(({ data }) => {
        const filteredList = [];
        for (let i = 0; i < data.length; i += 1) {
          const filteredArray = properties.filter(
            (property) => property._id === data[i].propertyListing
          );
          const finalArray = filteredArray.map((v) =>
            Object.assign(v, { favId: data[i]._id })
          );
          filteredList.push(...finalArray);
        }
        console.log(filteredList);
        setListing(filteredList);
      });
    }
  };

  useEffect(() => {
    checkProperties();
  }, []);

  const handleDeleteFavourite = (favouriteId) => {
    axios.delete(`http://localhost:4000/api/v1/Favourite/${favouriteId}`, {
      propertyListing: favouriteId,
      fbUserId: userID,
    });
  };

  return (
    <div className="favourites">
      {listing.map((favList) => (
        <SavedFavouriteCard
          key={favList.favId}
          {...favList}
          onDeleteFavourite={handleDeleteFavourite}
        />
      ))}
    </div>
  );
};

SavedProperties.propTypes = {
  properties: PropTypes.shape({
    filter: PropTypes.func.isRequired,
  }).isRequired,
  userID: PropTypes.string.isRequired,
};

export default SavedProperties;
