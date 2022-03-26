import React, { useState, createContext, useContext } from "react";

declare global {
   interface Window {
      NDEFReader?: any;
   }
}

// Create the context
const NFCContext = createContext(null);

export const NFCProvider = ({ children }) => {
   const [serialNumber, setSerialNumber] = useState<string>("(scanning has not started)");
   const onReading = ({message, serialNumber}) => {
      console.log(serialNumber);
      setSerialNumber(String(serialNumber));
      /*
      for (const record of message.records) {
          switch (record.recordType) {
              case "text":
                  const textDecoder = new TextDecoder(record.encoding);
                  console.log("Message", textDecoder.decode(record.data));
                  break;
              case "url":
                  // TODO: Read URL record with record data.
                  break;
              default:
                  // TODO: Handle other records with record data.
          }
      }
      */
  };
   const scan = async() =>{
      if("NDEFReader" in window) {
         try {
               const ndef = new window.NDEFReader();
               await ndef.scan();

               console.log("Scan started successfully.");
               setSerialNumber("(Scan started successfully)")
               ndef.onreadingerror = () => {
                  console.log("Cannot read data from the NFC tag. Try another one?");
               };

               ndef.onreading = (event) => {
                  console.log("NDEF message read.");
                  onReading(event); //Find function below
               };
         } catch (error) {
               console.log(`Error! Scan failed to start: ${error}.`);
               setSerialNumber("(NFCWeb not supported)");
         }
      }else{
         setSerialNumber("(NFCWeb not supported)");
      }
   };

   return (
      // Using the provider so that ANY component in our application can
      // use the values that we are sending.
      <NFCContext.Provider
         value={{serialNumber, scan }}
      >
         {children}
      </NFCContext.Provider>
   );
};

export const useNFC = () => useContext(NFCContext);
