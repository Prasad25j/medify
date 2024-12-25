import React from "react";
import ContactCard from "./ContactCard";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <ContactCard name="Prasad Pachbhai"  />
          <ContactCard name="Mohit Saini"  />
          <ContactCard name="Amitkumar Srivastava" />
          <ContactCard name="Rishabh Srivastava" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
