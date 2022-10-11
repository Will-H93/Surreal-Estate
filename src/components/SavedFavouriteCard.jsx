import PropTypes from "prop-types";
import React from "react";
import "../styles/saved-favourite-card.css";

const SavedFavouriteCard = ({ favId, title, onDeleteFavourite }) => {
  return (
    <div className="saved-favourite-card">
      <div className="saved-favourite-card-listing">{title}</div>
      <div className="saved-favourite-card-remove">
        <button
          type="button"
          onClick={() => onDeleteFavourite(favId)}
          className="remove"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

SavedFavouriteCard.propTypes = {
  favId: PropTypes.string.isRequired,
  onDeleteFavourite: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default SavedFavouriteCard;
