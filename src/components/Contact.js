// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";
const Contact = ({ name, phone, email, photo }) => {
  return (
    <>
      <div className="base-container">
        <div className="card-container">
          <img src={photo} alt="avatar" />
          <div className="card-content">
            <div className="title">Name : {name}</div>
            <div className="subtitle">Phone : {phone}</div>
            <div className="subtitle">E-mail : {email}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
