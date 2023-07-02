import React, { Component } from "react";

import emailIcon from "./email-icon.png";

const EmailExport = () => {
  return (
    <div className="f5">
      <div className="f2">
        <button className="shadow-5 pl3 pr4">
          <p className="pa2">Share via email
            <img className="pa2 exportOptionImg" alt="email-icon" src={emailIcon} width={50} height={50}/>
          </p>
          </button>
      </div>

    </div>
  );
};

export default EmailExport;