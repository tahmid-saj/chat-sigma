import React, { Component } from "react";

import pdfIcon from "./pdf-icon.png"

const PDFExport = () => {
  return (
    <div className="f5">
      <div className="f2">
        <button className="shadow-5">
          <p className="pa2">Download as PDF
            <img className="pa1 exportOptionImg" alt="pdf-icon" src={pdfIcon} width={50} height={50}/>
          </p>
          </button>
      </div>
    </div>
  );
};

export default PDFExport;