import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const mockProps = {
    title: "2-bed semi-detached",
    type: "Semi-Detatched",
    bedrooms: "2",
    bathrooms: "1",
    price: "200000",
    city: "Liverpool",
    email: "email@email.com",
  };

  return (
    <div className="properties">
      <PropertyCard {...mockProps} />
    </div>
  );
};

export default Properties;
