import React, { Component } from "react";

import "./AboutLinks.css";

const AboutLinks = () => {
  return (
    <div className="white f1">

      <button className="aboutIcons"><ion-icon name="logo-medium"></ion-icon></button>
      <button className="aboutIcons"><ion-icon name="logo-github"></ion-icon></button>
      <button className="aboutIcons"><ion-icon name="globe-outline"></ion-icon></button>
      <button className="aboutIcons"><ion-icon name="logo-linkedin"></ion-icon></button>
      
    </div>
  );
};

export default AboutLinks;