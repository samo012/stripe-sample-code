import React from "react";
import QRCode from "qrcode.react";
const Confirmation = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Confirmation Page</h1>
      <p>Easy Money?</p>

      <div style={{ marginTop: "20px" }}>
        <QRCode value={"74q8ts5hrqg"} size={256} />
      </div>
    </div>
  );
};

export default Confirmation;
