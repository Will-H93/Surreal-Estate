import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = ({ properties, setProperties, setAlert, userID }) => {
  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };

  return (
    <div className="properties">
      <SideBar />
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="property-card-container">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            {...property}
            userID={userID}
            onSaveProperty={handleSaveProperty}
          />
        ))}
      </div>
    </div>
  );
};

Properties.propTypes = {
  properties: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }),
  setAlert: PropTypes.func.isRequired,
  setProperties: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
}.isRequired;

export default Properties;
