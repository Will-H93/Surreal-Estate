import "../styles/app.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";
import Alert from "./Alert";

const App = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [userID, setUserID] = useState("");

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  const handleLogout = () => {
    // eslint-disable-next-line no-unused-vars, func-names
    window.FB.logout(function (response) {});
    setUserID("");
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />
      <Alert message={alert.message} success={alert.isSuccess} />
      <Routes>
        <Route
          path="/"
          element={
            <Properties
              properties={properties}
              setProperties={setProperties}
              setAlert={setAlert}
              userID={userID}
            />
          }
        />
        <Route
          path="saved-properties"
          element={<SavedProperties properties={properties} userID={userID} />}
        />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
