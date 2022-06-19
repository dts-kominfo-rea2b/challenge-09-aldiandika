// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";
const Contact = ({ data }) => {
  return (
    <>
      <div className="base-container">
        <div className="card-container">
          <img src={data.photo} alt="avatar" />
          <div className="card-content">
            <div className="title">Name : {data.name}</div>
            <div className="subtitle">Phone : {data.phone}</div>
            <div className="subtitle">E-mail : {data.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
