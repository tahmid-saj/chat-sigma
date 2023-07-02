import React, { Component } from "react";

import EmailExport from "../EmailExport/EmailExport";
import PDFExport from "../PDFExport/PDFExport";
import TxtExport from "../TxtExport/TxtExport";

const ExportBox = () => {
  return (
    <div>
      <EmailExport/>
      <PDFExport/>
      <TxtExport/>
    </div>
  );
};

export default ExportBox;