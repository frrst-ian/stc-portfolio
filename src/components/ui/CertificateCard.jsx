import React from "react";
import "./CertificateCard.css";
export const CertificateCard = ({ certificate }) => {
  const { title, issuer, desc, link, imageUrl, imageAlt } = certificate;

  return (
    <div className="certificate-card-full">
        <h2 className="cert-title">{title}</h2>
      <img src={imageUrl} alt={imageAlt} className="certificate-image" />
      <div className="certificate-content">
        <p className="issuer">Issued by: {issuer}</p>
        <p className="description">{desc}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="view-button"
        >
          <button className="course-link">View Course</button>
        </a>
      </div>
    </div>
  );
};
