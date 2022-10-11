import PropTypes from "prop-types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SavedFavouriteCard from "./SavedFavouriteCard";

const SavedProperties = ({ userID }) => {
  const initialState = {
    favourites: [],
    listing: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [favourites, setFavourites] = useState(initialState.favourites);
  const [listing, setListing] = useState(initialState.listing);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/Favourite`)
      .then(({ data }) => setFavourites(data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing/`)
      .then(({ data }) => {
        const filteredList = [];
        for (let i = 0; i < favourites.length; i += 1) {
          const filteredArray = data.filter(
            (list) => list._id === favourites[i].propertyListing
          );
          const finalArray = filteredArray.map((v) =>
            Object.assign(v, { favId: favourites[i]._id })
          );
          filteredList.push(...finalArray);
        }
        setListing(filteredList);
      });
  }, [favourites]);

  console.log(favourites);
  console.log(listing);

  const handleDeleteFavourite = (favouriteId) => {
    axios.delete(`http://localhost:4000/api/v1/Favourite/${favouriteId}`, {
      propertyListing: favouriteId,
      fbUserId: userID,
    });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/Favourite`)
      .then(({ data }) => setFavourites(data));
  }, [handleDeleteFavourite]);

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
  userID: PropTypes.string.isRequired,
};

export default SavedProperties;
