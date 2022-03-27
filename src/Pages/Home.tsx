import * as React from "react";
import RPM from "../components/RPM";


function Home() {
   
   return <div className="home-content">
            <p>This is another public route. Please login to save your avatar to our public collection.</p>
            <hr />
            <div>
               <RPM></RPM>
            </div>
         </div>;
}

export default Home;
