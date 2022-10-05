import PropTypes from "prop-types";
import React from "react";
import "../styles/property-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="property-card-title">{title}</div>
      <div className="property-card-type">{type}</div>
      <div className="property-card-bathrooms">
        <div className="property-card-bathrooms-icon">
          <FontAwesomeIcon icon={faBath} />
        </div>
        {bathrooms}
      </div>
      <div className="property-card-bedrooms">
        <div className="property-card-bedrooms-icon">
          <FontAwesomeIcon icon={faBed} />
        </div>
        {bedrooms}
      </div>
      <div className="property-card-price">
        <FontAwesomeIcon icon={faSterlingSign} />
        {price}
      </div>
      <div className="property-card-city">{city}</div>
      <div className="property-card-email">
        <a href={`mailto:${email}`}>
          <div className="property-card-email-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          Email
        </a>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default PropertyCard;
