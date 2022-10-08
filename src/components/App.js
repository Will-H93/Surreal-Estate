import "../styles/app.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  const [userID, setUserID] = useState("");

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
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
