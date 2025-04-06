import React from "react";
export const CertificateCard = ({ certificate }) => {
  const { title, issuer, category, desc, link, imageUrl, imageAlt } =
    certificate;

  return (
    <div className="certificate-card">
      <img src={imageUrl} alt={imageAlt} className="certificate-image" />
      <div className="certificate-content">
        <h2>{title}</h2>
        <p className="issuer">Issued by:{issuer}</p>
        <span className="category-badge">{category}</span>
        <p className="desc">What did I learn?{desc}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="view-button"
        >
          View Course
        </a>
      </div>
    </div>
  );
};
