import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <div className="navbar">
         <Link to={"/"}>
            Home (Public)
         </Link>
         <Link to={"/NFC"}>
            NFC (Public)
         </Link>
         <Link to={"/feed"}>
            Feed (Protected)
         </Link>
      </div>
   );
}

export default Navbar;
