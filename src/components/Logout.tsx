import React from "react";
import { useAuth } from "../hooks/useAuth";

function Logout() {
   const { logout } = useAuth();

   return (
      <div className="logout-section">
         <button onClick={logout}>Logout</button>
      </div>
   );
}

export default Logout;
