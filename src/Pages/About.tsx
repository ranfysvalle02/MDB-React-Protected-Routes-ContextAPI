import React from "react";
import ItemList from "../components/ItemList";

import Alert from 'react-bootstrap/Alert';

function About() {
   return (
      <div className="about-content">
        <Alert show={true} variant="success" >
            <Alert.Heading>ABOUT</Alert.Heading>
            <p>
                Signing up for D3M0 is simple, and best of all - FREE
            </p>
        </Alert>
        <hr />
        <ItemList></ItemList>
      </div>
   );
}

export default About;
