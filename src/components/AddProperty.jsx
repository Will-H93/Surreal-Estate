import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "3 Bed Semi-Detached",
      type: "Flat",
      bedrooms: "3",
      bathrooms: "1",
      price: "230000",
      city: "Liverpool",
      email: "email@email.com",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", {
        title: fields.title,
        type: fields.type,
        bedrooms: fields.bedrooms,
        bathrooms: fields.bathrooms,
        price: fields.price,
        city: fields.city,
        email: fields.email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form className="add-property-form" onSubmit={handleAddProperty}>
        <div className="form-field">
          <label htmlFor="title">
            <div className="form-label">Title:</div>
            <div className="form-input">
              <input
                id="title"
                name="title"
                value={fields.title}
                onChange={handleFieldChange}
              />
            </div>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="type">
            <div className="form-label">Type:</div>
            <div className="form-input">
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat">Flat</option>
                <option value="Detatched">Detatched</option>
                <option value="Semi-Detatched">Semi-Detatched</option>
                <option value="Tarraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </div>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="bedrooms">
            <div className="form-label">Bedrooms:</div>
            <div className="form-input">
              <input
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              />
            </div>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="bathrooms">
            <div className="form-label">Bathrooms:</div>
            <div className="form-input">
              <input
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              />
            </div>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="price">
            <div className="form-label">Price:</div>
            <div className="form-input">
              <input
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              />
            </div>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="city">
            <div className="form-label">City:</div>
            <div className="form-input">
              <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </div>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            <div className="form-label">Email:</div>
            <div className="form-input">
              <input
                id="email"
                name="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </div>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
