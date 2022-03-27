import React from "react";
import { useNFC } from "../hooks/useNFC";

function NFC() {

   const {scan,serialNumber} = useNFC();

   return (
      <div className="nfc-content">
         <p>This is another public route.</p>
         <hr />
         <button type="button" onClick={scan}>scan nfc</button>
         <hr />
         <label>{serialNumber}</label>
      </div>
   );
}

export default NFC;
